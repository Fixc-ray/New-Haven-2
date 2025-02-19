from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()  # Create SQLAlchemy instance

class Admin(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)  # Store hashed passwords in real scenarios
