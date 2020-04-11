# this module returns a logged-in facebook selenium session
from utils import fb_credentials

from requestium import Session, Keys
import pandas as pd
import os

def get_session():
    s = Session(webdriver_path = 'chromedriver',
        browser='chrome',
        default_timeout = 15,
        webdriver_options={'arguments': ['headless']})

    username, password = fb_credentials.get_credentials()

    s.driver.get("https://www.facebook.com")
    s.driver.ensure_element_by_id("email").send_keys(username)
    s.driver.ensure_element_by_id("pass").send_keys(password)
    s.driver.ensure_element_by_id("u_0_b").click() # login button

    return s