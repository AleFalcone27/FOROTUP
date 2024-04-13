from flask import Flask, Blueprint, jsonify, request
from models.user import User
#db = Database(uri, "Cluster0", "database_products.test")

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
        # Confrotar datos con la base de datos 
        
        return jsonify({"message": "Incorrect Email"})
    
    

@app_routes.route('/register', methods=['POST'])
def register():
    
    data = request.json

    username = data['username']
    email = data['email']
    password = data['password']
    
    #validar datos
    if '@' not in email:
        return jsonify({'Error':'incorrect Email'})
    else:
        new_user = User(username,email,password) 
        # Guardar el nuevo usuario en la base de datos
        return jsonify({"message": "Register sucessfull"})