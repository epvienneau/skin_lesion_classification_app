from get_prediction import get_prediction
import numpy as np 
import  matplotlib.pyplot.imread as iread

def return_response(image_string):
    fh = open("imageToSave.png", "wb")
    fh.write(str.decode('image_string'))
    fh.close()

    base64im = iread("imageToSave.png")

    return get_prediction(base64im)

