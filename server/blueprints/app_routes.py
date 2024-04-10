from flask import Flask, Blueprint, jsonify

#db = Database(uri, "Cluster0", "database_products.test")

app_routes = Blueprint("app_routes", __name__,
                       template_folder="templates",
                       static_folder="static")

@app_routes.route('/', methods=['GET'])
def root():
    return jsonify({"message": "running"})