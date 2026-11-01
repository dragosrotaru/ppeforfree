# ppeforfree

A 2020 COVID-era project for collective sensemaking around volunteer groups making and distributing free PPE (personal protective equipment). It collected public data about these groups and published it as an open, browsable directory.

> Archived: no longer maintained. Kept for reference.

## What it did

Early in the pandemic, hundreds of grassroots groups formed to sew masks, print face shields and get them to hospitals. Most organised on Facebook and were hard to find or compare. This project tried to map them and make that data open.

It has two parts:

- **Website** (`src/`): a React + TypeScript single-page app (Create React App, Ant Design) with a sortable, filterable table of initiatives (name, description, locations, founding date, member count, activity growth) and a detail modal per group. It also had about and contributors pages. The table renders a JSON snapshot bundled with the site (`src/latest.json`).
- **Data scripts** (`scripts/`): a Node/TypeScript scraper that uses Puppeteer to log in to Facebook and collect public metadata for a list of group IDs (`data/facebook-groups-ids.csv`), such as member counts, post activity, admins and linked pages. It also pulls groups from the mutualaid.wiki API. Results are stored in a local MongoDB and exported as dated JSON snapshots (`data/`, `public/data/`).

The snapshots are committed to the repo so others could reuse the data.

## Tech stack

TypeScript, React 16, Ant Design, React Router, Jest + Testing Library, Puppeteer, Cheerio, Axios, MongoDB.

## Running it

Website (Node version pinned in `.nvmrc`):

```sh
nvm install && nvm use
npm install
npm start     # dev server
npm test      # tests
```

Scraper (needs a local MongoDB at `mongodb://localhost:27017` and a Facebook account):

```sh
cd scripts
npm install
npm start
```

It reads these variables from `scripts/.env`: `FB_USERID`, `FB_USERNAME`, `FB_PASSWORD`, `FB_2FA`, `FB_GROUPS_IDS_FILEPATH`. Facebook's markup and login flow have changed a lot since 2020, so the scraper is unlikely to work as-is.

## Context

Built from April to July 2020 as an open volunteer effort, with several outside contributors. The ppeforfree.org site and its community channels are no longer active. `CONTRIBUTING.md` and `CODE_OF_CONDUCT.md` are kept for history. The project is archived, so it no longer accepts contributions.

## License

GPL-3.0. See [LICENSE](LICENSE).
