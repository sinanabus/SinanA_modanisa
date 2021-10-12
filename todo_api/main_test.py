import unittest
import requests

## call the script by {python main_test.py}

class UnitTestAPI(unittest.TestCase):
    URL='http://localhost:5000/todos'

    def test_handleGET(self):
        # A method to test GET request functionality
        resp = requests.get(self.URL)
        self.assertEqual(resp.status_code, 200)
        print('Test handleGET returns a status ok response.')

    data = {"id": "1", "items":["TASK 1", "TASK 2"]}
    def test_handlePOST(self):
        # A method to test POST request functionality
        resp = requests.post(self.URL, json=self.data)
        self.assertEqual(resp.status_code, 200)
        print('Test handlePOST returns a status ok response.')


if __name__ == '__main__':
    tester = UnitTestAPI()
    tester.test_handleGET()
    tester.test_handlePOST()
