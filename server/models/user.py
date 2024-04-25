from datetime import datetime
from models.dbConnection import db

class User:
    def __init__(self,username:str,email:str,password:str):
        self.username = username
        self.email = email
        self.password = password
        # inicializamos los valores por defecto para todos los usuarios
        self.roles = "standard"
        self.date_joined = datetime.now()
        self.bio = ''
        self.saved_posts = [] 
        
        
    def sign_in(self):
        """ 
        Sumary:
            Verificar las credenciales para el inicio de sesion, confrontado los datos ingrsados con los registros de la base de datos
        
        Args:
            email (str): Email del usuario
            password (str): pasword del usuario
        
        Returns:
            El usuario si la condición se cumple, caso contrario Falso
        """
        
        user = db.collection.find_one({"email": self.email})
        
        if user:
            return user
        else: 
            return False
        
        
    def sign_up(self) -> bool:
        """
        Sumary:
            Inserta un nuevo User en la base de datos
        
        Args:
            User (User): Instancia de User

        Returns:
            bool: True se inserto orrectamente el usuario en la bd, caso contrario False.
        """
        try:
            db.collection.insert_one({
                                "username": self.username,
                                "email": self.email,
                                "password": self.password,
                                "roles": self.roles,
                                "date_joines": self.date_joined,
                                "bio": self.bio,
                                "saved_posts": self.saved_posts,
                            })
            
            return True
        except Exception as e:
            
            print("Error:", e)
            return ["Error: " + str(e)]
    
    
    def is_not_already_signed_up(self):
        """ 
        Sumary:
            Verificar si el usuario ya se encuentra registrado
    
        Returns:
            True si el usuario no se encuentra registrado, caso contrario Falso
        """
        email_found = db.collection.find_one({"email": self.email})
        username_found = db.collection.find_one({"username":self.username})
        if email_found == None and username_found == None:
            return True
        else: 
            return False