from datetime import datetime
from bson import ObjectId

class Post:
    def __init__(self,body:str,author:str):
        self.body = body
        self.author = author
        # inicializamos los valores por defecto para todos los posts
        self.score = 0
        self.created_at = datetime.now()
        self.upvotes = 0
        self.downvotes = 0