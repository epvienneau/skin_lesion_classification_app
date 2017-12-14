import base64

#Validate base64 image strings, ie is the string really an image?
def is_valid_image_string(some_str):
    try:
        decoded_image = base64.b64decode(some_str)
    except: 
        return False
    return True

#this will be more useful when we add the hashing function 
def check_passwords(pword1, pword2):
    if (pword1 != pword2):
        return False
    return True

def is_valid_image_path(path):
    try:
        with open(path, 'r') as f:
            return True
    except:
        return False

#obviously this test isn't exhaustive.... but it keeps people from accidentally putting in a very wrong email address
def is_valid_email_address(email):
    if (email.find("@") > 0 ): 
        return True
    else:
        return False
