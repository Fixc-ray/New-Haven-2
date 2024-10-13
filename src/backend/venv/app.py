from flask import Flask
from flask_cors import CORS  # Import CORS for cross-origin requests
from flask_jwt_extended import JWTManager
from models import db  # Import the SQLAlchemy instance
from routes import admin_routes  # Import your blueprint
from config import Config  # Import configuration class

# Initialize the Flask app
app = Flask(__name__)
app.config.from_object(Config)  # Load configuration from Config class

# Initialize CORS to allow requests from the React frontend
CORS(app, origins=['http://localhost:3000'])

# Initialize SQLAlchemy and JWT
db.init_app(app)
jwt = JWTManager(app)

# Create the database tables
with app.app_context():
    db.create_all()

# Register the admin routes with the /api prefix
app.register_blueprint(admin_routes, url_prefix='/api')

# Run the Flask app in debug mode
if __name__ == '__main__':
    app.run(debug=True)
