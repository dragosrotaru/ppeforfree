import sys
sys.path.append('..')

from utils import fb_session
from requestium import Session, Keys
import pandas as pd
import os

df = pd.read_csv("../../data/facebook-group-ids-unclean.txt", sep='\n', header=None)

s = fb_session.get_session()
df['valid'] = None

for idx, item in df.iterrows():
    s.driver.get(os.path.join("https://www.facebook.com", item[0]))
    is_valid = len(s.driver.find_elements_by_partial_link_text("Go back"))
    if is_valid < 1:
        print(f"VALID: {item[0]}")
        df.iloc[idx]['valid'] = True
    else:
        print(f"NOT VALID: {item[0]}")
    break

df.to_csv("filepath", index=False)