import os

class Config:
    SQLALCHEMY_DATABASE_URI = 'sqlite:///admins.db'  # SQLite database
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    JWT_SECRET_KEY = os.getenv('JWT_SECRET', 'Jqo9iSF9rx')  # Secret key for JWT
