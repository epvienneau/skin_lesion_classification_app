from flask import Flask, jsonify, request
from get_prediction import get_prediction

app = Flask(__name__)

count_requests = 0

@app.route('/', methods=['GET'])
def requests():
    """
    Returns the number of requests

    :return: resp: (int) the number of requests
    """
    global count_requests
    count_requests += 1
    resp = jsonify(count_requests)
    return resp
@app.route('/user',methods=['POST'])
def newuser()
    return hi

@app.route('/prediction',methods=['POST'])
def getpred()
    f = request.json['image']
    
