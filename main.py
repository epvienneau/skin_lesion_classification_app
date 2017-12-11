from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqldb://polortiz40:mypassword@35.227.93.161/skin_app'
db = SQLAlchemy(app)
count_requests = 0

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    personal_history = db.Column(db.BOOLEAN, unique=False, nullable=False)
    family_history = db.Column(db.BOOLEAN, unique=False, nullable=False)
    gender = db.Column(db.String(6), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username

#Create a table called users in case there isn't any
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
    '''
    Returns string that will get assigned to variable 'valid' in react code

    :return: String
    '''
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