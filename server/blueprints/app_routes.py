from flask import Blueprint, jsonify, request
from models.user import User
from utilities.validations import *  

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
        login_user = User('',email,password)
        # Confrontamos los datos con lka base de datos 
        if login_user.sign_in():
                return jsonify({"message": "Credenciales correctas"})
        else: return jsonify({"message": "Credenciales incorrectas"})
    
    
@app_routes.route('/register', methods=['POST'])
def register():
    data = request.json
    username = data['username']
    email = data['email']
    password = data['password']

    if is_email(email) and is_valid(username) and is_valid(password) :
        new_user = User(username,email,password) 
        # Verificamos que el email o nombre no se encuentren ya registrados para evitar duplicados
        if new_user.is_not_signed_up():
            if new_user.sign_up():
                 return jsonify({"message": "Registro correcto"}) 
            else:  return jsonify({"message": "Algo salió mal"})
        else: return jsonify({"message": "Nombre de usuario o mail ya registrados"})
    else:
        return jsonify({'Error':'incorrect Email'})
        
