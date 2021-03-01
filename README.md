![Habanero Bee - Logo](https://user-images.githubusercontent.com/8216064/109447036-28951f80-7a86-11eb-80ec-e7e77939dd86.png)

<h2 align="center">🌶 Habanero Bee 🐝</h2>

<p align="center">Habanero Bee is a simple <a href="https://amp.dev/" target="_blank" rel="noopener  noreferrer">AMP-compliant</a> CMS system that makes it easy to create content using <a href="https://www.google.com/sheets/about/" target="_blank" rel="noopener  noreferrer">Google Sheets</a>.</p>

<p align="center">
  <a href="https://github.com/shinshin86/habanero-bee/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/shinshin86/habanero-bee?color=blue" alt="Habanero Bee is released under the MIT license." />
  </a>
  <a href="https://travis-ci.org/shinshin86/habanero-bee">
    <img src="https://travis-ci.org/shinshin86/habanero-bee.svg?branch=main" alt="Current Travis CI build status." />
  </a>
</p>

## WIP📌

This project is work in progress to version to 0.1.0.
I will update the version to 0.1.0 as soon as this task is completed.

- [x] Create a logo for this project.
- [x] Create a unit test for a util functions.
- [ ] Create a simple document on deploying a site using Habanero Bee.
- [ ] And some minor fixes...

## Setup Habanero Bee Site 🛠

The data to be displayed on the site will be managed by Google Sheets.

If you want to use Google Sheets, you need to set up Google Apps Script as well.
Don't worry. It's very easy to set up.

For more information about these settings, please refer to [this page (habanero-bee-google-apps-script)](https://github.com/shinshin86/habanero-bee-google-apps-script).

## Deploy to Netlify 🌎

This is deployed to Netlify for use.
Specify the published URL of the Google spreadsheet you want to use as data.

Data structure of Spreadsheet is defined. If it is not structured correctly, the deployment will fail.
For more information on data structures, see [this section](https://github.com/shinshin86/habanero-bee-google-apps-script).

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/shinshin86/habanero-bee">
  <img src="https://www.netlify.com/img/deploy/button.svg" title="Deploy to Netlify"></a>

### Parameters required when deploying

- SHEET_URL (Specify the published URL of the Google spreadsheet you want to use as data.)

## Development Usage 🔦

```bash
# Development
SHEET_URL=<google spreadsheet url> yarn dev

# Deploy
SHEET_URL=<google spreadsheet url> yarn deploy
# => Then "yarn start"

# Code format
yarn format
# or short hand alias
yarn fmt

# eslint(All file)
yarn lint .

# Code format and type check and run eslint
yarn allcheck
```

## Habanero Bee uses the power of open source 🌋

### Using HTML5 UP

[Identity by HTML5 UP](https://html5up.net/identity)
html5up.net | @ajlkn
Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)

LICENCE: [HTML5 UP LICENCE](https://html5up.net/license)

### Using Next.js

[Next.js - GitHub](https://github.com/vercel/next.js)

LICENCE: [Next.js LICENCE](https://github.com/vercel/next.js/blob/canary/license.md)

## Author 🖌

[Yuki Shindo](https://shinshin86.com)
