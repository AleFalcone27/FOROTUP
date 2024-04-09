from flask import Flask
from flask_cors import CORS

from blueprints.app_routes import app_routes 
from blueprints.user_routes import user_routes

def create_app():
    
    app = Flask(__name__)
    CORS(app) 
 
    app.register_blueprint(app_routes)
    app.register_blueprint(user_routes)   
 
    return app
    
if __name__ == '__main__':
    
    app = create_app()
    app.run(debug = True)