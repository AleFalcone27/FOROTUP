# Dependencies imports
from flask import Blueprint, jsonify, request, make_response
from bson import json_util
import json
from flask_bcrypt import Bcrypt

# moduls import
from models.user import User
from models.dbConnection import Database
from models.post import Post
from utilities.validation import *

bcrypt = Bcrypt()


app_routes = Blueprint("app_routes", __name__,
                       template_folder="templates",
                       static_folder="static")

@app_routes.route('/', methods=['GET'])
def root():
    return jsonify({"message": "running"})

@app_routes.route('/login', methods=['POST'])
def login():
    req = request.json
    email = req['email']
   
    user = User('',email,'')
    valid_user = user.sign_in()
    print(valid_user)
        
    if valid_user:
        if bcrypt.check_password_hash(valid_user['password'], req['password']):
            response = json.dumps(valid_user,default=json_util.default) 
            return make_response(jsonify({"Info": response}), 200)  # 200 OK 
        else: return make_response(jsonify({"Info": "Error contraseña incorrecta"}), 401)
    else: return make_response(jsonify({"Info": "Error credenciales incorrectas"}), 401)
        
@app_routes.route('/register', methods=['POST'])
def register():
    data = request.json
    username = data['username']
    email = data['email']
    password = data['password']
    
    if validate_email(email) and validate_username(username):
        hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
        new_user = User(username,email,hashed_password) 
        if new_user.is_not_already_signed_up():
            if new_user.sign_up():
                return jsonify({"message": "Register sucessfull"})
            else: return jsonify({"message": "Register unsucessfull"})
        else: return jsonify({"message": "User already registered"})
    else:
        return jsonify({'Error':'Formato de email o usuario incorrecto'})
        
        
@app_routes.route('/feed', methods=['GET'])
async def feed():

    posts = await Post.get_posts() 
    
    json_data = json.dumps(posts, default=json_util.default)
    print(json_data)

    return jsonify(posts)   
    

@app_routes.route('/post/<id>', methods=['GET'])
async def get_post(id):
    post = await Post.get_post_by_id(id)
    if post:
        response = json.dumps(post,default=json_util.default) 
        return make_response(jsonify({"Post": response}), 200) 
    else: return make_response(jsonify({"Info": "Error"}), 401)