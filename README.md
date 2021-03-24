![Habanero Bee - Logo](https://user-images.githubusercontent.com/8216064/109447036-28951f80-7a86-11eb-80ec-e7e77939dd86.png)

<h2 align="center">🌶 Habanero Bee 🐝</h2>

<h3 align="center">Your content to the world faster</h3>

<p align="center">Habanero Bee is a simple <a href="https://amp.dev/" target="_blank" rel="noopener  noreferrer">AMP-compliant</a> CMS system that makes it easy to create content using <a href="https://www.google.com/sheets/about/" target="_blank" rel="noopener  noreferrer">Google Sheets</a>.</p>

<p align="center">
  <a href="https://github.com/shinshin86/habanero-bee/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/shinshin86/habanero-bee?color=blue" alt="Habanero Bee is released under the MIT license." />
  </a>
  <a href ="https://github.com/shinshin86/habanero-bee/actions/workflows/format.yml">
    <img src="https://github.com/shinshin86/habanero-bee/actions/workflows/format.yml/badge.svg" alt="Format Check">
  </a>
  <a href ="https://github.com/shinshin86/habanero-bee/actions/workflows/lint.yml">
    <img src="https://github.com/shinshin86/habanero-bee/actions/workflows/lint.yml/badge.svg" alt="Lint">
  </a>
  <a href ="https://github.com/shinshin86/habanero-bee/actions/workflows/test.yml">
    <img src="https://github.com/shinshin86/habanero-bee/actions/workflows/test.yml/badge.svg" alt="Test">
  </a>
  <a href ="https://github.com/shinshin86/habanero-bee/actions/workflows/type-check.yml">
    <img src="https://github.com/shinshin86/habanero-bee/actions/workflows/type-check.yml/badge.svg" alt="Test">
  </a>
</p>

## Table of Contents

- [Abstract](#abstract)
- [Features](#features)
- [Setup Habanero Bee Site](#setup-habanero-bee-site)
  - [Make a content on Google Sheets](#make-a-content-on-google-sheets)
  - [Deploy to Netlify](#deploy-to-netlify)
  - [Advanced: How to manage Habanero Bee in a private repository](#advanced-how-to-manage-habanero-bee-in-a-private-repository)
- [For developers](#for-developers)
  - [Development Usage](#development-usage)
  - [Tips for development](#tips-for-development)
- [Habanero Bee uses the power of open source](#habanero-bee-uses-the-power-of-open-source)
  - [Using HTML5 UP](#using-html5-up)
  - [Using Next.js](#using-next.js)
- [Author](#author)

## Abstract

![Habanero Bee - Abstract gif](https://user-images.githubusercontent.com/8216064/110764965-04f88300-8297-11eb-8977-cfc26ca137d2.gif)

Habanero Bee is a static site generator that generates AMP-compliant sites created based on [Next.js](https://github.com/vercel/next.js/).
When generating a site, the content can be managed with [Google Sheets](https://www.google.com/sheets/about/), and can also be used as a simple CMS system.
The tool is designed to be deployed on [Netlify](https://www.netlify.com/) and excels at publishing to user content with little effort and time.

## Features

Habanero Bee has three "Easy and Fast" features.

- Easy and Fast generating AMP-compliant sites.
  - It's easy to create an AMP-enabled site, and being AMP-enabled also ensures that your site will perform well.
    (This is because being AMP-enabled also means that you are following web best practices.)
- Easy and Fast manage your content on Google Sheets.
  - The dashboard required for content management does not use in the Habanero Bee.
    Everything from setting up your site to managing your content is done on Google Sheets!
- Easy and Fast to publish a site.
  - Habanero Bee is designed to be deployed using Netlify.
    If you already have content on your Google Sheets in place for your site, [this section in button](#deploy-to-netlify) will get your site deployed in no time.

## Setup Habanero Bee Site

### Make a content on Google Sheets

First, you need to create content for Habanero Bee in Google Sheets.

Please refer to this document for instructions on how to create it( [this page (habanero-bee-google-apps-script)](https://github.com/shinshin86/habanero-bee-google-apps-script) ).

If you just want to see the Habanero Bee in action first, skip this step, as we have prepared demo data for you.

### Deploy to Netlify

Once content is complete, So simply deploy site on Netlify.
Your site will now be available to the world!

When deploy on Netlify, Specify the published URL of Google Sheets you want to use as data.

To deploy, just click the button below!

If the text is not clear enough, a [YouTube video](https://youtu.be/ykh_vVB3JLk) of deployment procedure is also available.

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/shinshin86/habanero-bee">
  <img src="https://www.netlify.com/img/deploy/button.svg" title="Deploy to Netlify"></a>

#### Demo site data

If you want to use demo site data, please specify this URL.

```
https://script.google.com/macros/s/AKfycbzFMeY9SFDVuGj9n0t2UaS2NNcLws03xdQj1Gt-J_JSlPeqmhmupakjzU8nSbpcuFbJmw/exec
```

#### Deploy to your PC using demo data

If you don't want to use Netlify and want to see how it works on your PC, you can run the following command.

```sh
# Clone and Install
git clone https://github.com/shinshin86/habanero-bee.git
cd habanero-bee
yarn install

# Generate Habanero Bee demo site
yarn clean && SHEET_URL=https://script.google.com/macros/s/AKfycbzFMeY9SFDVuGj9n0t2UaS2NNcLws03xdQj1Gt-J_JSlPeqmhmupakjzU8nSbpcuFbJmw/exec yarn deploy && yarn start
```

Let's open `http://localhost:3000` with browser!

### Advanced: How to manage Habanero Bee in a private repository

If you use `Deploy to Netlify` button, it will be copied to your GitHub account as a public repository.  
So, if you want to manage it as a private repository, you need to clone this repository using the `git clone` command.  
The command for this is written below.

```sh
# clone and remove git
git clone https://github.com/shinshin86/habanero-bee.git your-project
cd your-project
rm -rf .git

# initialize
git init
git add .
git commit
```

Create a private repository on your GitHub and push this project to it.

If you are deploying to Netlify, you will need to log in to your Netlify dashboard and manually configure your site.
(Even though it is manual, it is very easy!)

Make sure to set an environment variable called `SHEET_URL` when deploying and set the Google Sheets public URL there.

## For developers

The following is the documentation for Habanero Bee's developers.

### Development Usage

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

### TIPS for development

When I develop locally, I set up my own commands like this to develop.

```diff
diff --git a/package.json b/package.json
index b461d8a..a3625c1 100644
--- a/package.json
+++ b/package.json
@@ -4,9 +4,11 @@
   "description": "Habanero Bee is a simple AMP-compliant CMS system that makes it easy to create content using Google Sheets.",
   "scripts": {
     "dev": "next",
+    "dev2": "SHEET_URL=<Google Sheets published URL> yarn dev",
     "build": "next build",
     "start": "next start",
     "deploy": "yarn favicon && yarn sitemap && next build && next export",
+    "deploy2": "yarn clean && SHEET_URL=<Google Sheets published URL> yarn deploy && yarn start",
     "clean": "rm -rf out/",
     "format": "prettier --write **/*.{js,json,md} src/**/*.{ts,tsx}",
     "fmt": "prettier --write **/*.{js,json,md} src/**/*.{ts,tsx}",
```

#### Note:

Be careful not to `push` it by mistake.
Of course, there is nothing wrong with making that URL public (As long as you don't write any secure information on it.), and archiving the URL will disable it.

## Habanero Bee uses the power of open source

### Using HTML5 UP

[Identity by HTML5 UP](https://html5up.net/identity)
html5up.net | @ajlkn
Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)

LICENCE: [HTML5 UP LICENCE](https://html5up.net/license)

### Using Next.js

[Next.js - GitHub](https://github.com/vercel/next.js)

LICENCE: [Next.js LICENCE](https://github.com/vercel/next.js/blob/canary/license.md)

## Author

[Yuki Shindo](https://shinshin86.com)
