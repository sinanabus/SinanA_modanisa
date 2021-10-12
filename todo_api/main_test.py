import unittest
import requests

## call the script by {python main_test.py}

class UnitTestAPI(unittest.TestCase):
    URL='http://localhost:5000/todos'
    
    data = {"uid": "1", "items":{ "1":"TASK 1", "2" :"TASK 2"}}

    def test_handleGET(self):
        # A method to test GET request functionality
        #PARAMS = {'id' : self.data["uid"]}
        resp = requests.get(self.URL + f'/{self.data["uid"]}')
        print(resp)
        self.assertEqual(resp.status_code, 200)
        print('Test handleGET returns a status ok response.')
        self.assertEqual(resp.json(), self.data)
        print('HandleGETs sends correct json')

    def test_handlePOST(self):
        # A method to test POST request functionality
        resp = requests.post(self.URL, json=self.data)
        self.assertEqual(resp.status_code, 200)
        print('Test handlePOST returns a status ok response.')
        self.assertEqual(resp.json(), self.data)
        print('HandlePOST receives correct json')


if __name__ == '__main__':
    tester = UnitTestAPI()
    tester.test_handleGET()
    tester.test_handlePOST()
