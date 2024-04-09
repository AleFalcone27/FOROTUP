from datetime import datetime

class User:
    def __init__(self,username:str,email:str,avatar:str,password:str):
        self.username = username
        self.email = email
        self.password = password
        self.avatar = avatar
        self.roles = "standard"
        # inicializamos los valores por defecto para todos los usuarios
        self.date_joined = datetime.now()
        self.bio = ''
        self.saved_posts = [] 
        