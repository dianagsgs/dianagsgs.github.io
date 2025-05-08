import time
import requests
from hashlib import md5
from flask import Flask, request, jsonify, make_response
from flask_cors import CORS


app = Flask(__name__)
CORS(app, origins=["https://dianagsgs.github.io"])  # Add your allowed origin(s) here


account_code = "/powerce"
api_key = "AzZ7mGCbLTxprItPsExOmijMalOx9PxEovbQ9asP47baO2JRCEGZLQ34s4PbZB9E"

@app.route('/get_views', methods=['GET'])
def get_views():
    
    ttl_ms = 31536000000 # Expiration time in milliseconds. In this example, 31536000000ms = 1 year.
    expiration_time = int(round(time.time() * 1000)) + ttl_ms
    dateToken = ('&dateToken=' + str(expiration_time))

    host = "https://api.npaw.com"
    pre_url = '/data?fromDate=last6hours&metrics=plays' + dateToken + '&filter=[{"name":"MyIPv6","rules":{"ip":["2806:2a0:f0e:810d:31d6:11f0:4970:1d50"]}}]'

    # Token Generation
    token_encrypt = md5(f"{account_code}{pre_url}{api_key}".encode('utf-8'))
    token = token_encrypt.hexdigest()

    # Building Final URL
    final_url = f"{host}{account_code}{pre_url}&token={token}"

    response = requests.get(final_url)    
    return make_response(jsonify(response.text).data, 200)


if __name__ == '__main__':
    app.run(debug=True)
