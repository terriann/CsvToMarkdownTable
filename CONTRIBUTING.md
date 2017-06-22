# Contributors & Forks Welcome

I launched this fork from [donatj/CsvToMarkdownTable](https://github.com/donatj/CsvToMarkdownTable) and heartily encourage anyone and everyone to fork this repo and do with it as they please. This was the first open source project that I contributed to and the first I forked and felt proud of the finished state I brought it to.

## How to Contribute

If you have an improvement and are interested in contributing to this repo here are the steps that need to be taken. Look for existing issues with the [help wanted](https://github.com/terriann/CsvToPlainTextTable/labels/help%20wanted) tag if you don't have an idea but would like to contribute.

1. Find or create a detailed [issue](https://github.com/terriann/CsvToPlainTextTable/issues) to describe the feature, enhancement or bug
2. [Fork this repository](https://help.github.com/articles/fork-a-repo/)
3. [Setup your new forked repository on your local machine](#setting-up-the-project-locally-for-development)
4. Write your tests and add them to `/test/`  
_That's right kids, we're advocating for some [TDD](https://en.wikipedia.org/wiki/Test-driven_development) here_
5. Make your changes to the source files in `/src/`  
_**Never** make changes directly to files in `/lib/`, that's tsc's job_
6. Run all [required tests and scripts](#required-tests-and-scripts)
7. Commit and push changes to GitHub
8. Submit a pull request
9. Wait for a response

## Setting Up the Project Locally for Development

**Requirements**
* [Node.js](https://nodejs.org/en/) should be installed on your local machine

**Steps**
1. Clone the repo [terriann/CsToPlainTextTable](https://github.com/terriann/CsvToPlainTextTable) (or fork and use your repository)
2. Open the folder in your editor of choice
_I recommend [Visual Studio Code](https://code.visualstudio.com/); it's what I use to maintan the project_
3. Through a terminal, in the project's working directory, run `npm install`

## Required Tests and Scripts

If you choose to submit a pull request I politely request that you do the following before submitting it.

    npm run lint
    npm run test
    npm run cover

**But why?**

`npm run lint`  
The lint script (which uses [tslint](https://github.com/palantir/tslint)) will check to make sure that your changes adhere to the same code style that the rest of the library does. Using a modern IDE, like [Visual Studio Code](https://code.visualstudio.com/) makes it easy to see when you've created a stylistic deviation.

`npm run test`  
This has two actions tied to it. First it will build JavaScript (in ES3 based on the current configurations in `tsconfig.json`) from the source files then upon successful compilation [mocha](https://github.com/mochajs/mocha) tests are run against the finished library.

`npm run cover`  
If you've been a good dev andyou wrote your tests first you can see already by running `npm run test` that your code successfully does the thing you wanted it to do, using [Istanbul](https://github.com/gotwarlost/istanbul) will tell you how much of the existing (and new) code _isnt'_ covered by the existing tests.

My goal with this project is to maintain > 95% code coverage.    
[![Coverage Status](https://coveralls.io/repos/github/terriann/CsvToPlainTextTable/badge.svg?branch=code-coverage)](https://coveralls.io/github/terriann/CsvToPlainTextTable?branch=code-coverage)

## Making Changes in gh-pages branch

I don't have a great process down for this yet. [More coming soon](https://github.com/terriann/CsvToPlainTextTable/issues/6).


## NPM Dev Scripts Availiable

| Script    | Cmd                 | Description                                                                                                              | 
|-----------|---------------------|--------------------------------------------------------------------------------------------------------------------------| 
| cover     | `npm run cover`     | Runs a check to see where there are coverage gaps in the existing tests                                                  | 
| coveralls | `npm run coveralls` | Runs the coverage script and reports output to the project on [Coveralls.io](https://coveralls.io)                       | 
| lint      | `npm run lint`      | Verifies that the source files are following the project's coding style and helps alert to potential bug causing defects | 
| test      | `npm run test`      | Triggers the TypeScript compiler and runs tests against the freshly compiled file(s)                                     | 
| watch     | `npm run watch`     | Triggers the TypeScript compiler on watch mode to compile TypeScript to Javascript each time a source file is changed    | 
