from pymongo.mongo_client import MongoClient

uri = "mongodb+srv://AleFalcone:Overyou200127@TUSIBLOG.guiv1nd.mongodb.net/?retryWrites=true&w=majority&appName=TUSIBLOG"

class Database:
    def __init__(self, db_uri, db_name, db_collection):
        self.client = MongoClient(db_uri)
        self.db = self.client[db_name]
        self.collection = self.db[db_collection]
    
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
        
db = Database(uri,'TUSIBLOG','TUSIBLOG.TUSIBLOG_TEST')
dbPosts = Database(uri,'TUSIBLOG','POSTS')
