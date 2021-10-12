
from flask import Flask, jsonify, request
from flask.wrappers import Request
from flask_restful import Resource, Api


app = Flask(__name__)
api = Api(app)

class handlePOST(Resource):
    def post(self):
        req_json = request.get_json()
        return {'you sent' : req_json}, 200

class handleGET(Resource):
    def get(self):
        return {'message' : "Hello world!"}

api.add_resource(handlePOST, '/todos')
api.add_resource(handleGET, '/todos')

if __name__ == '__main__':
    app.run()