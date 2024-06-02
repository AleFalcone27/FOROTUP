from datetime import datetime
from .dbConnection import dbPosts
from bson import ObjectId

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
        
    async def get_posts():
        posts = []
        for post in dbPosts.collection.find():
            # Convertimos ObjectId a str ya que este no permite la serialziacion a Json por defecto
            
            post['_id'] = str(post['_id'])
            
            post = {
                'title': post['title'],
                '_id': post['_id'],
                'description': post['description'],
                'author': post['author'],
                'score': post['score'],
                'comments': post['comments'],
                'create_at': post['created_at'],
                'upvotes': post['upvotes'],
                'downvotes': post['downvotes']}
            
            posts.append(post)
        return posts

    async def get_post_by_id(id):
        """ 
        Sumary:
            Buscamos el post en la base da tos por id 
        
        Args:
            id: id del post
        
        Returns:
            El post si la busqueda fue éxitosa , caso contrario Falso
        """
    
        post_id = ObjectId(id)
        post = dbPosts.collection.find_one({"_id": post_id})
        
        print(post)
        
        if post:
            return post
        else: 
            return False
        
    
    # Tengo que guardar en la lista de comentarios del post solo los ids de los comentarios
    # Guardar el registro de comentario, traerme el id y agregarlo a la lista de comentarios del post 
    
    # async def add_comment(id,Commentcoment):
    #     """ 
    #     Sumary:
    #         Buscamos el post en la base da tos por id 
        
    #     Args:
    #         id: id del post
        
    #     Returns:
    #         El post si la busqueda fue éxitosa , caso contrario Falso
    #     """
    
    #     filter = {'_id': ObjectId(id)}
    #     update = {'$set': update_fields}
    
    
    #     post_id = ObjectId(id)
    #     post = dbPosts.collection.find_one({"_id": post_id})
        
    #     print(post)
        
    #     if post:
    #         return post
    #     else: 
    #         return False
        
