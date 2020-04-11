from facebook_scraper import get_posts

for post in get_posts(group="fake_grouodddfvkwecnwcowv", pages=1):
      print(post['time'])
      print(post['link'])
      print(post['shares'])
      print(post['comments'])
      print(post['likes'])
      print(post['post_id'])