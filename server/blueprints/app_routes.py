from flask import Blueprint, jsonify, request
from models.user import User
from models.dbConnection import Database
from models.post import Post
from bson import json_util
import json
from utilities.validation import *

app_routes = Blueprint("app_routes", __name__,
                       template_folder="templates",
                       static_folder="static")

@app_routes.route('/', methods=['GET'])
def root():
    return jsonify({"message": "running"})


@app_routes.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data['email']
    password = data['password']
    if '@' not in email:
        return jsonify({"Error": "Incorrect format email"})
    else:
        user = User('',email,password)
        
        if user.sign_in():
            return jsonify({"Error": "Credenciales correctas"})

        else: return jsonify({"Error": "Incorrect credentials"})
       
        
@app_routes.route('/register', methods=['POST'])
def register():
    data = request.json
    username = data['username']
    email = data['email']
    password = data['password']
    
    if validate_email(email) and validate_username(username):
        new_user = User(username,email,password) 
        if new_user.is_not_already_signed_up():
            if new_user.sign_up():
                return jsonify({"message": "Register sucessfull"})
            else: return jsonify({"message": "Register unsucessfull"})
        else: return jsonify({"message": "User already registered"})
    else:
        return jsonify({'Error':'Formato de email o usuario incorrecto'})
        
        
@app_routes.route('/feed', methods=['GET'])
async def feed():
    
    ## new_post = Post('PANINI GATE','Juntemos firmas para que vuelvan los paninis al buffet','Ale Falcone')
    
    posts = await Database.get_posts() 
    
    json_data = json.dumps(posts, default=json_util.default)
    print(json_data)

    return jsonify(posts)   
    
    