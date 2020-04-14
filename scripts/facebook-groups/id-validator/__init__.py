import sys
import os
import time
sys.path.insert(0, os.path.abspath('..'))
import pandas as pd
from utils import fb_session

def is_group_id(id, session):
    session.driver.get("https://www.facebook.com/groups/" + id)
    return len(session.driver.find_elements_by_partial_link_text("Create New Account")) < 1

def main(input_file_path, output_file_path):
    df = pd.read_csv(input_file_path, sep='\n', header=None)
    df['valid'] = None
    session = fb_session.get_session(with_log_in=False)
    for idx, item in df.iterrows():
        is_valid = is_group_id(item[0], session)
        print(is_valid)
        df.iloc[idx]['valid'] = is_valid
        time.sleep(2)
    df.to_csv(output_file_path, index=False)

if __name__ == '__main__':
    main(sys.argv[1], sys.argv[2])