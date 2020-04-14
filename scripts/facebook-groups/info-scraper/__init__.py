import sys
import os
sys.path.insert(0, os.path.abspath('..'))
import datetime
from uuid import uuid4
import pandas as pd
from pymongo import MongoClient
from utils import fb_session

# TODO define get_group_info
def get_group_info(session, group_id):
    group = {}
    group["group_id"] = group_id
    return group

def main(input_file_path):
    df = pd.read_csv(input_file_path, sep='\n', header=None)
    mongoClient = MongoClient('localhost', 27017)
    db = mongoClient['ppeforfree']
    groups = db['fb-group-info']
    session = fb_session.get_session(with_log_in=False)
    for item in df.iterrows():
        group_id = item[0]
        group = get_group_info(session, group_id)
        group["scraped_at"] = datetime.datetime.now().isoformat()
        group["scraped_id"] = uuid4()
        groups.insert_one(group)

if __name__ == '__main__':
    main(sys.argv[1])