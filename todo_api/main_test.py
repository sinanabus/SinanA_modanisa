import unittest
import requests

## call the script by {python main_test.py}

class UnitTestAPI(unittest.TestCase):
    URL='http://localhost:8080/todos'
    
    data_get = {"items": ["TASK 1"]}
    data_post = {"uid": "1", "items": "TASK 1"}
    def test_handleGET(self):
        # A method to test GET request functionality
        #PARAMS = {'id' : self.data["uid"]}
        resp = requests.get(self.URL +'/1')
        print(resp)
        self.assertEqual(resp.status_code, 200)
        print('Test handleGET returns a status ok response.')
        self.assertEqual(resp.json(), self.data_get)
        print('HandleGETs sends correct json')

    def test_handlePOST(self):
        # A method to test POST request functionality
        resp = requests.post(self.URL, json=self.data_post)
        self.assertEqual(resp.status_code, 200)
        print('Test handlePOST returns a status ok response.')


if __name__ == '__main__':
    tester = UnitTestAPI()
    tester.test_handlePOST()
    tester.test_handleGET()



