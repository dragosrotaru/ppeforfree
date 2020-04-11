# Scripts

## Getting Started

These scripts require Python 3.

Install the following packages with pip:

```
requestium
pandas
python-dotenv
facebook-scraper
```

You should be ready to run any of the scripts after that.

### Facebook credentials

The scripts that scrape Facebook will need a valid pair of Facebook credentials.
To provide these to the scripts securely, create a file called `.env` in the `/scripts`
directory and use the following format:

```
FB_USERNAME=XXXXXXXXXX
FB_PASSWORD=XXXXXXXXXX
```

The scripts will use `python-dotenv` to load these automatically. Note that `.env` files are
included in `.gitignore` and obviously should not be committed.