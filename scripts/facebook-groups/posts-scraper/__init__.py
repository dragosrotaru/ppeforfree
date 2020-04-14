import sys
sys.path.append("..")
import datetime
from uuid import uuid4
import pandas as pd
from facebook_scraper import get_posts
from pymongo import MongoClient
from utils import fb_credentials

def main(input_file_path):
    df = pd.read_csv(input_file_path, sep='\n', header=None)
    mongoClient = MongoClient('localhost', 27017)
    db = mongoClient['ppeforfree']
    posts = db['fb-group-posts']
    for item in df.iterrows():
        group_id = item[0]
        new_posts = get_posts(group=group_id, pages=10, sleep=100, credentials=fb_credentials.get_credentials())
        for post in new_posts:
            post["group_id"] = group_id
            post["scraped_at"] = datetime.datetime.now().isoformat()
            post["scraped_id"] = uuid4()
        posts.insert_many(new_posts)

if __name__ == '__main__':
    main(sys.argv[1])


