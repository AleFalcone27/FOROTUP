from datetime import datetime

class Post:
    def __init__(self,title:str,body:str,author:str):
        self.title = title
        self.body = body
        self.author = author
        # inicializamos los valores por defecto para todos los posts
        self.score = 0
        self.comments = []
        self.created_at = datetime.now()
        self.upvotes = 0
        self.downvotes = 0