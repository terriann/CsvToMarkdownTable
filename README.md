# CSV to Plain Text Table

This branch is the live demo of the [CSV to Plain Text Table](https://github.com/terriann/CsvToPlainTextTable) open source project.

For more informaiton please visit the master branch of that project at:  
[github.com/terriann/CsvToPlainTextTable/](https://github.com/terriann/CsvToPlainTextTable)

## Looking to setup this branch in your dev environment

I highly recommend that you manage both the source (`master` branch) and demo (`gh-pages` branch) in separate directories. The two branches do not share the same NPM packages  - if you know of a better way to setup this part of the project please do reach out via [issues](https://github.com/terriann/CsvToPlainTextTable/issues/new).

## Setting Up the Demo Page Project Locally for Development

### Requirements

* [Node.js](https://nodejs.org/en/) should be installed on your local machine

### Steps

1. Clone the repo [terriann/CsToPlainTextTable](https://github.com/terriann/CsvToPlainTextTable) (or fork and use your repository)
2. Open the folder in your editor of choice
_I recommend [Visual Studio Code](https://code.visualstudio.com/); it's what I use to maintan the project_
3. Through a terminal, in the project's working directory, run `npm install`
4. In the terminal run `npm run dev` and a live reloading tab will open in your browser running the `index.html` file  
Now anytime you edit the html, css or js files the browser will live reload your changes
