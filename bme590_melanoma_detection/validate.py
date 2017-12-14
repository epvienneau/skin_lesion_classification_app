import base64

#Validate base64 image strings, ie is the string really an image?
def is_valid_image_string(some_str):
    try:
        decoded_image = base64.b64decode(some_str)
    except: 
        return false
    return true

