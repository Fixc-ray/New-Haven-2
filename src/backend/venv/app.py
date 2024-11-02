from flask import Flask, request, jsonify
from flask_cors import CORS  # CORS for cross-origin requests
from flask_jwt_extended import JWTManager
from models import db  # SQLAlchemy instance
from routes import admin_routes  # Blueprint for other routes
from config import Config  # Configuration class
import requests
import os
from datetime import datetime
from dotenv import load_dotenv
import base64

# Load environment variables
load_dotenv()

# Initialize Flask app
app = Flask(__name__)
app.config.from_object(Config)  # Load configuration from Config class

# Initialize CORS, SQLAlchemy, and JWT
CORS(app, origins=['http://localhost:3000'])
db.init_app(app)
jwt = JWTManager(app)

# Daraja API credentials
consumer_key = os.getenv("CONSUMER_KEY")
consumer_secret = os.getenv("CONSUMER_SECRET")
shortcode = os.getenv("SHORTCODE")
passkey = os.getenv("PASSKEY")

# Register blueprints for admin routes
app.register_blueprint(admin_routes, url_prefix='/api')

# Create the database tables if they don't exist
with app.app_context():
    db.create_all()

# Daraja API: Get OAuth Token
@app.route("/mpesa/token", methods=["GET"])
def get_token():
    auth_url = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials"
    auth = (consumer_key, consumer_secret)
    response = requests.get(auth_url, auth=auth)
    if response.status_code == 200:
        return jsonify(response.json())
    else:
        return jsonify({"error": "Failed to get token"}), response.status_code

@app.route("/mpesa/stkpush", methods=["POST"])
def stk_push():
    token = request.headers.get("Authorization").split(" ")[1]
    data = request.json
    amount = data["amount"]
    phone_number = data["phoneNumber"]

    timestamp = datetime.now().strftime("%Y%m%d%H%M%S")
    password_str = f"{shortcode}{passkey}{timestamp}"
    password = base64.b64encode(password_str.encode("utf-8")).decode("utf-8")

    stk_url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest"
    headers = {"Authorization": f"Bearer {token}"}
    payload = {
        "BusinessShortCode": shortcode,
        "Password": password,
        "Timestamp": timestamp,
        "TransactionType": "CustomerPayBillOnline",
        "Amount": amount,
        "PartyA": phone_number,
        "PartyB": shortcode,
        "PhoneNumber": phone_number,
        "CallBackURL": "https://your-server.com/api/v1/callback",
        "AccountReference": "Order123",
        "TransactionDesc": "Payment for Order 123",
    }

    response = requests.post(stk_url, json=payload, headers=headers)
    if response.status_code == 200:
        return jsonify(response.json())
    else:
        return jsonify({"error": "Failed to initiate STK Push"}), response.status_code

@app.route("/api/v1/callback", methods=["POST"])
def callback():
    callback_data = request.json
    print("Callback received:", callback_data)
    return jsonify({"ResultCode": 0, "ResultDesc": "Callback received successfully"})

if __name__ == '__main__':
    app.run(debug=True, port=3001)
