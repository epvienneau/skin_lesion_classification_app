from flask import Flask, jsonify, request
import numpy as np

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

@app.route('/login', methods=['GET'])
def login(username):
    """

    Retrieves password for given username

    :return: resp: (json) The user's password or null if username does not exist
    """
    resp = null //this is where DB needs to be accessed...
    return resp

@app.route('/create_new_profile', methods=['POST'])
def create_new_profile():
    """

    Adds new user to DB 
    
    return: resp: (json) username, email, password, DOB, sex, family history of melanoma, personal history of melanoma, email preferences
    """
    resp = null //this is where DB needs to be accessed...
    return resp

@app.route('/update_profile', methods=['POST'])
def update_profile(uuid):
    """

    Updates profile of user associated with given uuid

    return: resp: (json) username, email, password, DOB, sex, family history of melanoma, personal history of melanoma, email preferences
    """
    resp = null //this is where DB needs to be accessed...
    return resp

@app.route('/display_thumbnail', methods=['POST'])
def display_thumbnail(verbose):
    """
    
    Retrieves recent images and associated data for upload history or prediction results display
    
    return: resp: (json) image, date captured, tag. If verbose = 1: result, true diagnosis, diameter are also returned
    """
    resp = null //this is where DB needs to be accessed...
    return resp

@app.route('/upload_image', methods=['POST'])
def upload_image():
    """

    Sends image and associated data to DB

    return: resp: (json) image, date captured, tag, diameter
    """
    resp = null //this is where DB needs to be accessed...
    return resp

@app.route('/get_user_data', methods=['POST']))
def get_user_data(uuid):
    """

    Retrieves all user profile information for default display in edit profile screen

    return: resp: (json) username, email, password, DOB, sex, family history of melanoma, personal history of melanoma, email preferences
    """
    resp = null //this is where DB needs to be accessed...
    return resp


def send_error(message, code):  # Suyash error function
    err = {
        "error": message,
    }
    return jsonify(err), code






