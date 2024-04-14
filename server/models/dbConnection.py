from pymongo.mongo_client import MongoClient

uri = "mongodb+srv://AleFalcone:Overyou200127@TUSIBLOG.guiv1nd.mongodb.net/?retryWrites=true&w=majority&appName=TUSIBLOG"

class Database:
    def __init__(self, db_uri, db_name, db_collection):
        self.client = MongoClient(db_uri)
        self.db = self.client[db_name]
        self.collection = self.db[db_collection]
    
    
db = Database(uri,'TUSIBLOG','TUSIBLOG.TUSIBLOG_TEST')

