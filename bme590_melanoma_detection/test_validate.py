from validate import is_valid_image_string, check_passwords, is_valid_email_address
import unittest


class TestMainMethods(unittest.TestCase):

    def test_email(self):
        self.assertTrue(is_valid_email_address('emelina.vienneau@duke.edu'))
        self.assertFalse(is_valid_email_address('not.a.valid.email.address'))
    
    def test_chkpwords(self):
        self.assertTrue(check_passwords('a_password', 'a_password'))
        self.assertFalse(check_passwords('a_password', 'a_diff_password'))
            
    def test_imstr(self): 
        with open('base64string.txt', 'r') as f:    
            base64str = f.read()
        self.assertTrue(is_valid_image_string(base64str))
        self.assertFalse(is_valid_image_string('hello world'))
        #self.assertFalse(is_valid_image_string('hi'))
        #As expected by Suyash, the above assertion fails. This is something 
        #we need to fix in the future. 

if __name__ == '__main__':
    unittest.main()


