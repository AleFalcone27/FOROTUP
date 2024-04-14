from pymongo.mongo_client import MongoClient

uri = "mongodb+srv://AleFalcone:Overyou200127@cluster0.guiv1nd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

class Database:
    def __init__(self, db_uri, db_name, db_collection):
        self.client = MongoClient(db_uri)
        self.db = self.client[db_name]
        self.collection = self.db[db_collection]

    def ping_db(db):
        """ 
            Sumary:
                Verificar la conexion con la base de datos
            
            Args:
                db (Database): instancia de Database 
            
            Returns:
                True si la conexión se pudo completar, caso contrario False
        """
        
        try:
            print("Conexión exitosa a la base de datos:")
            return True
        except Exception as e:
            print("Error al conectar a la base de datos:", e)
            return False

db = Database(uri,'Cluster0','database_products.test')
# Ping de database
# Database.ping_db(db)