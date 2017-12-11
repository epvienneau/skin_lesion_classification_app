from gcr.io/tensorflow/tensorflow:latest
COPY requirements.txt .
RUN apt-get update
RUN apt-get install -y python-mysqldb
RUN apt-get install -y libmysqlclient-dev python-dev
RUN pip install -r requirements.txt
ENV FLASK_APP=main.py
