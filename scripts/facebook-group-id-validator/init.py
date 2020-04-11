import sys
sys.path.append('..')

from requestium import Session, Keys
from fb_credentials import get_credentials
import pandas as pd
import os

df = pd.read_csv("../../data/facebook-group-ids-unclean.txt", sep='\n', header=None)

s = Session(webdriver_path = 'chromedriver',
       browser='chrome',
       default_timeout = 15,
       webdriver_options={'arguments': ['headless']})

username, password = get_credentials()

s.driver.get("https://www.facebook.com")
s.driver.ensure_element_by_id("email").send_keys(username)
s.driver.ensure_element_by_id("pass").send_keys(password)
s.driver.ensure_element_by_id("u_0_b").click() # login button
df['valid'] = None
for idx, item in df.iterrows():
    s.driver.get(os.path.join("https://www.facebook.com", item[0]))
    is_valid = len(s.driver.find_elements_by_partial_link_text("Go back"))
    if is_valid < 1:
        print(f"VALID: {item[0]}")
        df.iloc[idx]['valid'] = True
    else:
        print(f"NOT VALID: {item[0]}")

df.to_csv("filepath", index=False)