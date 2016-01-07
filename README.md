# peermusic (WIP!)

[![GitHub release](https://img.shields.io/github/release/peermusic/desktop.svg?style=flat-square)](https://github.com/peermusic/desktop/releases)
[![Travis](https://img.shields.io/travis/peermusic/desktop.svg?style=flat-square)](https://travis-ci.org/peermusic/desktop)
[![David](https://img.shields.io/david/peermusic/desktop.svg?style=flat-square)]()
[![GitHub license](https://img.shields.io/github/license/peermusic/desktop.svg?style=flat-square)](https://github.com/peermusic/desktop/blob/master/LICENSE)

> Music player in a browsertab that works with your own mp3 files and can share music with your friends automatically. Features fully encrypted communication with all endpoints.
> 
> This is the main repository for the interface of peermusic, that ties all other repositories together. 

![peermusic interface](http://i.imgur.com/6K1W5mQ.png)

## Install

```sh
npm install -g gulp
npm install
```

## Run

```sh
gulp
```

After that, the server is now running on `localhost:8000` and the files get recompiled into `public/build/` on change. 
If you have http://livereload.com/extensions/ installed, they even get instantly reloaded in the browser.

## Styleguides

```sh
# Javascript
standard app/**/*

# SCSS
scss-lint styles/* -e styles\_normalize.scss
```
