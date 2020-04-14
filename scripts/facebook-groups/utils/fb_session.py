# this module returns a logged-in facebook selenium session
from utils import fb_credentials
from requestium import Session
from requestium import Session, Keys
import os

def get_session(with_log_in=True):
    session = Session(webdriver_path = 'chromedriver',
        browser='chrome',
        default_timeout = 15,
        # webdriver_options={'arguments': ['headless']}
        )
    if with_log_in:
        username, password = fb_credentials.get_credentials()
        session.driver.get("https://www.facebook.com")
        session.driver.ensure_element_by_id("email").send_keys(username)
        session.driver.ensure_element_by_id("pass").send_keys(password)
        session.driver.ensure_element_by_id("u_0_b").click() # login button
    return session