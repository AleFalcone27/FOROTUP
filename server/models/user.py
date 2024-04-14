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
        
        user = db.collection.find_one({"email": self.email, "password": self.password})
            
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
            bool: True se insertaron correctamente los datos en la Bd, caso contrario False  
        """
        try:
            print(db.collection.insert_one({
                            "username": self.username,
                            "email": self.email,
                            "password": self.password,
                            "role": self.roles,
                            "date_joined": self.date_joined,
                            "bio": self.bio,
                            "saved_posts": self.saved_posts, 
                            }))
            return True
        except Exception as e:
            print("Error:", e)
            return ["Error: " + str(e)]
        
        
    def is_not_signed_up(self) -> bool:
        """
        Sumary:
            Verifica si un usuario ya se encuentra registrado
        Args:
            User (User): Instancia de User
        Returns:
            bool: True si el usuario no se encuentra registrado  
        """
        try:
            found_email  = db.collection.find_one({"email": self.email})
            found_username = db.collection.find_one({"username": self.username})
            
            print(found_email)
            print(found_username)
            
            if found_username == None and found_username == None:
                return True
            else: return False
            
        except Exception as e:
            print("Error:", e)       
            return {"message": "error"}