from flask import Flask, jsonify, request

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
