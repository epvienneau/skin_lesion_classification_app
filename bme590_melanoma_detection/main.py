from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import numpy as np
from datetime import datetime
import json
from get_prediction import get_prediction
import matplotlib.pyplot as mpl
import base64
from validate import is_valid_image_string, check_passwords, is_valid_image_path, is_valid_email_address

app = Flask(__name__)

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqldb://polortiz40:mypassword@35.227.93.161/skin_app'
db = SQLAlchemy(app)
count_requests = 0
CORS(app)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    personal_history = db.Column(db.BOOLEAN, unique=False, nullable=False)
    family_history = db.Column(db.BOOLEAN, unique=False, nullable=False)
    gender = db.Column(db.String(6), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    bday = db.Column(db.DateTime, unique=False, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username


class ImPath(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=False, nullable=False)
    impath = db.Column(db.String(200), unique=True, nullable=False)
    date = db.Column(db.DateTime, unique=False, default=datetime.utcnow)
    pred = db.Column(db.String(80), unique=False, nullable=False)

    # tag = db.Column(db.String(200), unique=False, nullable=True)
    # diam = db.Column(db.DECIMAL(4), unique=False, nullable=True)

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

    :return: (String) 'Valid credentials' if login credentials are valid
    """
    username = request.json['username']
    password = request.json['password']

    # Check if username is valid
    if db.session.query(User.username).filter_by(username=username).scalar() is None:
        return 'This Username does not exist, try creating it!'
    #Check if the password is the same
    if (not check_passwords(User.query.filter_by(username=username).first().password, password)): 
        return 'Wrong Password'
    return 'Valid credentials'


@app.route('/getImages/<username>', methods=['GET'])
def get_images(username):
    """

    Retrieves image history for given username

    :return: resp: (json) All the pathways to the images the user has previously uploaded
    """
    resp = []
    for image in ImPath.query.filter_by(username=username):
        if (is_valid_image_path(image.impath)):
            with open(image.impath, 'r') as f:
                im = f.read()
            im = 'data:image/png;base64,' + im.encode('base64')
            pred = image.pred
            resp.append({'image': im, 'prediction': pred})
        else:
            return send_error('Invalid image pathway', 410)
    return json.dumps(resp)


@app.route('/create_new_profile', methods=['POST'])
def create_new_profile():
    """

    Adds new user to DB from the input given by the frontend

    :return: resp: (json) username, email, password, DOB, sex,
    family history of melanoma, personal history of melanoma
    """
    req = request.json
    new_user = User(username = req['username'],
                    password = req['password'],
                    personal_history = req['personal_history'],
                    family_history = req['family_history'],
                    gender = req['gender'],
                    email = req['email'],
                    bday = req['bday'][0:10])
    if (db.session.query(User.username).filter_by(username=req['username']).scalar() is not None):
        return send_error('Error, User with that username or password already exists', 409)
    elif (not is_valid_email_address(req['email'])):
        return send_error('Are you sure this is a valid email address?', 400)
    else:
        db.session.add(new_user)
        db.session.commit() 
        return 'Created Profile'

# Commented out this endpoint for now because we currently don't have an update profile component in the web app

'''
@app.route('/update_profile/<username>', methods=['POST'])
def update_profile(username):
    """

    Updates profile of user associated with given username

    return: resp: (json) username, email, password, DOB, sex,
    family history of melanoma, personal history of melanoma
    """
'''


@app.route('/uploadimage', methods=['POST'])
def upload_image():
    '''

    Stores image in the Database

    :return: string: 'Success' if stored properly
    '''
    req = request.json
    im_path = req['impath']
    new_image = ImPath(username=req['username'],
                       impath=im_path,
                       pred=req['pred'])
    try:
        db.session.add(new_image)
        db.session.commit()
        return 'Saved the image'
    except:
        return send_error('Failed to save the image', 418) 


@app.route('/prediction', methods=['POST'])
def prediction():
    """

    Decodes input image from patient and gets prediction results

    :return: json: dictionary with predictinon results and image path
    """
    req = request.json
    image = req['image'][23:]
    if (is_valid_image_string(image)):
        imgdata = base64.b64decode(image) 
        try:
            filename = 'images/some_image' + \
                   str(ImPath.query.order_by(ImPath.id.desc()).first().id + 1) + \
                   '.jpg'
        except:
            filename = 'images/some_image1.jpg'
        with open(filename, 'w') as f:
            f.write(imgdata)
        image64 = mpl.imread(filename)
        resp = get_prediction(image64)
        dictout = {resp[0][0]:str(resp[1][0]), resp[0][1]:str(resp[1][1]), 'impath': filename}
    else:
        return send_error('Invalid image data', 415)
    return jsonify(dictout)


def send_error(message, code):  # Suyash error function
    err = {"error": message, }
    return jsonify(err), code
