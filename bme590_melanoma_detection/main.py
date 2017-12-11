from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
import numpy as np
from datetime import datetime
import json
from ./get_prediction import get_prediction
import matplotlib.pyplot.imread as imread
import base64

app = Flask(__name__)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqldb://polortiz40:mypassword@35.227.93.161/skin_app'
db = SQLAlchemy(app)
count_requests = 0

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    phistory = db.Column(db.BOOLEAN, unique=False, nullable=False)
    fhistory = db.Column(db.BOOLEAN, unique=False, nullable=False)
    sex = db.Column(db.String(6), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    DOB = db.Column(db.DateTime, unique=False, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username

class ImPath(db.model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=False, nullable=False)
    impath = db.Column(db.String(200), unique=True, nullable=False)
    date = db.Column(db.DateTime, unique=False, default=datetime.utcnow)
    tag = db.Column(db.String(200), unique=False, nullable=False)
    diam = db.Column(db.DECIMAL(4), unique=False, nullable=False)

    def __repr__(self):
        return '<Image %r>' % self.id

db.create_all()

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

@app.route('/checklogin', methods=['POST'])
def checklogin():
    """
    Returns string that will get assigned to variable 'valid' in react code

    :return: (String) 'YES' if login credentials are valid
    """
    username = request.json['username']
    password = request.json['password']

    #Check if username is valid
    if db.session.query(User.username).filter_by(username=username).scalar() is None:
        return 'This Username does not exist, try creating it!'
    #Check if the password is the same
    if User.query.filter_by(username=username).first().password != password:
        print(password)
        print(User.query.filter_by(username=username).first().password)
        return 'Wrong Password'
    return 'YES'

@app.route('/getImages/<username>', methods = ['GET'])
    def get_images(username):
        """
        
        Retrieves image history for given username

        :return: resp: (json) All the pathways to the images the user has previously uploaded
        """
        resp = []
        for image in ImPath.query.filter_by(username=username):
            resp.append(image.impath)
        return json.dumps(resp)

@app.route('/prediction', methods = ['POST'])
def prediction():
    """
    
    Calls get_prediction to determine if the uploaded image is malignant or benign

    :return: resp: (json) Returns {labels: ['Malignant', 'Benign'], predictions: [xx%, xx%]}
    """



@app.route('/create_new_profile', methods=['POST'])
def create_new_profile():
    """

    Adds new user to DB

    return: resp: (json) username, email, password, DOB, sex, family history of melanoma, personal history of melanoma, email preferences
    """
    
    return resp

@app.route('/update_profile/<username>', methods=['POST'])
def update_profile(username):
    """

    Updates profile of user associated with given username

    return: resp: (json) username, email, password, DOB, sex, family history of melanoma, personal history of melanoma, email preferences
    """
    

@app.route('/display_thumbnail/<verbose>', methods=['POST'])
def display_thumbnail(verbose):
    """

    Retrieves recent images and associated data for upload history or prediction results display

    return: resp: (json) image, date capture, tag. If verbose = 1: result, true diagnosis, diameter are also returned. 
    """

@app.route('/upload_image', methods=['POST'])
def upload_image():
    """

    Sends image and associated data (tag, date, diameter) to DB 

    return: resp: (json) 
    """
    req = request.json
    image = req['image']
    imgdata = base64.b64decode(image)
    filename = 'some_image.jpg'
    with open(filename, 'wb') as f:
        f.write(imgdata)
    image64 = imread('some_image.jpg')
    resp = get_prediction(base64)
    return resp

def send_error(message, code): #Suyash error function
    err = {"error": message,}
    return jsonify(err), code















