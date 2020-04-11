import sys
sys.path.append('..')

from utils import fb_session, fb_credentials
from requestium import Session, Keys
from facebook_scraper import get_posts
import pandas as pd
import os

df = pd.read_csv("../../data/facebook-group-ids-unclean.txt", sep='\n', header=None)
df['valid'] = None

s = fb_session.get_session()

for idx, item in df.iterrows():
    group_id = item[0]
    data = get_group_data(s, group_id)
    print(data)

# TODO
get_group_data(session, group_id):
    pass
