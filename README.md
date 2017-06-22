# CSV To Plain Text Table

[![Build Status](https://travis-ci.org/terriann/CsvToPlainTextTable.svg?branch=master)](https://travis-ci.org/terriann/CsvToPlainTextTable)
[![Coverage Status](https://coveralls.io/repos/github/terriann/CsvToPlainTextTable/badge.svg?branch=code-coverage)](https://coveralls.io/github/terriann/CsvToPlainTextTable?branch=code-coverage)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/terriann/CsvToPlainTextTable/master/LICENSE.md)

A simple JavaScript CSV to Markdown Table converter with Confluence Markup support

[View the live demo](https://terriann.github.io/CsvToPlainTextTable/) to convert your CSV to a table on-the-fly.

Requires **no external libraries**. Works in Node.js as well as in browser.

### For Markdown (Github/BitBucket)

Example Use:

    csvToMarkdown( 'header1,header2,header3\nValue1,Value2,Value3', ',', true);

Outputs:

```
| header1 | header2 | header3 | 
|---------|---------|---------| 
| Value1  | Value2  | Value3  | 
```

Which displays in Markdown as:

| header1 | header2 | header3 | 
|---------|---------|---------| 
| Value1  | Value2  | Value3  | 

### For Confluence Markup (JIRA/Confluence)

Example Use:

    csvToMarkdown( 'header1,header2,header3\nValue1,Value2,Value3', ',', true, true);

Outputs:

```
|| header1 || header2 || header3 || 
|  Value1   | Value2   | Value3   | 
```

Which displays in JIRA/Confluence as:

| header1 | header2 | header3 | 
|---------|---------|---------| 
| Value1  | Value2  | Value3  |

## Contributing

Are you interested in contributing to this project? Please read [CONTRIBUTING.md](CONTRIBUTING.md) for information on how to contribute, developer installation, required testing steps and other information about best practices for this project.

## Credits

* Originally forked from [donatj/CsvToMarkdownTable](https://github.com/donatj/CsvToMarkdownTable)
