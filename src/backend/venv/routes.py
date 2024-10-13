from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token

admin_routes = Blueprint('admin_routes', __name__)

@admin_routes.route('/login', methods=['POST'])
def login():
    data = request.get_json()  # Get JSON data from the request
    username = data.get('username')
    password = data.get('password')

    # Basic hardcoded validation for now (replace with DB check in real apps)
    if username == 'rayjustin@gmail.com' and password == 'liverpoolfc44':
        token = create_access_token(identity={'username': username})  # Create JWT token
        return jsonify(token=token), 200  # Return token with 200 OK status

    return jsonify(message='Invalid credentials'), 401  # Return error on failure
