import os
from dotenv import load_dotenv
load_dotenv()

def get_credentials():
    return os.getenv("FB_USERNAME"), os.getenv("FB_PASSWORD")