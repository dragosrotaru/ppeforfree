from requestium import Session, Keys
import pandas as pd
import os

df = pd.read_csv("/home/ale/Desktop/facebook-group-ids.txt", sep='\n', header=None)

s = Session(webdriver_path = 'chromedriver',
       browser='chrome',
       default_timeout = 15,
       webdriver_options={'arguments': ['headless']})


s.driver.get("https://www.facebook.com/asdf")
s.driver.ensure_element_by_id("email").send_keys("username")
s.driver.ensure_element_by_id("pass").send_keys("password")
s.driver.ensure_element_by_id("loginbutton").click()
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