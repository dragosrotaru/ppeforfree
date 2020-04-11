import os
from dotenv import load_dotenv
load_dotenv()

def get_credentials():
    username = os.getenv("FB_USERNAME")
    password = os.getenv("FB_PASSWORD")

    if not username or not password:
        raise Exception('Could find both FB_USERNAME and FB_PASSWORD variables in environment')

    return username, password