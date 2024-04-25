from datetime import datetime
from .dbConnection import dbPosts

class Post:
    def __init__(self,title:str,body:str,author:str):
        self.title = title
        self.description = body
        self.author = author
        # inicializamos los valores por defecto para todos los posts
        self.score = 0
        self.comments = []
        self.created_at = datetime.now()
        self.upvotes = 0
        self.downvotes = 0
        
    def insert(self):
        dbPosts.collection.insert_one({
            'title' : self.title,
            'description': self.description,
            'author': self.author,
            'score': self.score,
            'comments': self.comments,
            'create_at': self.created_at,
            'upvotes': self.upvotes,
            'downvotes': self.downvotes,
        })

