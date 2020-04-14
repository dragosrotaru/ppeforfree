"""
For the selenium approach, here are the best ways to extract the following data:

(note that the classnames are all obfuscated versions spat out by facebooks build system,
im making the assumption that these will stay relatively constant over time).

id             - already have
name           - text inside of <a> tag within #seo-h1-tag
isPublic       - #js-4t element holds the string "Public group" or "Private group"
description    - /about/ page, simulate a click on element with title="See More" to
                    expand descrioption. Description is inside of p tag with class "_4etw". 
foundedOn      - class "_2ieo"
memberCount    - /about/ page, classname: "_2iem _50f7"
adminCount     - /members/ page, classname: "_1oqv _50f8"
moderatorCount - It looks like "admin and moderator count" only exist on the page as a sum of both
postCount      - we can use the facebook_scraper package for this.
memberList,    - need to visit /members/ and trigger the the async scroll all the way to the bottom of the
adminList        page. see here https://dev.to/hellomrspaceman/python-selenium-infinite-scrolling-3o12.
                    The ids for each user are the numbers in the data- tags, with values like "GroupMember_XXXXXXX"
                    where XXXXXXXXX is the user id

Read here for some tips on not getting blocked by facebook, we'll need to be careful
https://medium.com/analytics-vidhya/the-art-of-not-getting-blocked-how-i-used-selenium-python-to-scrape-facebook-and-tiktok-fd6b31dbe85f
"""