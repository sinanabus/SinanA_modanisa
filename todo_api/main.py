from flask import Flask, jsonify, request
from flask.wrappers import Request
from flask_restful import Resource, Api
from flask_cors import CORS


app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})
api = Api(app)

storage = {}

class handlePOST(Resource):
    def post(self):
        req_json = request.get_json()
        print(req_json)
        if req_json["uid"] in storage.keys():
            storage[req_json["uid"]].append(req_json["items"])
            return req_json, 200
        else:
            storage[req_json["uid"]] = [req_json["items"]]

class handleGET(Resource):
    def get(self, id):
        print(storage)
        response = {"items" : storage[id]}
        return response, 200

api.add_resource(handlePOST, '/todos')
api.add_resource(handleGET, '/todos/<string:id>')

if __name__ == '__main__':
    app.run(debug=True, port=8080)