# Eleventy Plugin - Typography

This is just a thin wrapper around: https://github.com/ekalinin/typogr.js with the 2 additional filters `nl2br` and `paragraphs`.

Install:

```
npm install @jamshop/eleventy-plugin-typography
```

## Usage

In you main config `.eleventy.js`: 
```
const typographyPlugin = require("@jamshop/eleventy-plugin-typography");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(typographyPlugin);
  // and the rest of your config
};
```

Then in your templates:

```
{{ content | typogrify | safe }}
```

Applies various transformations to plain text in order to deliver typographically-improved HTML. See the Typogrify docs for: https://github.com/ekalinin/typogr.js info. It needs the `| safe` filter because it will output HTML.

Each of the individual `typogr` can be used as a filter:

```
{{ content | typogrify | safe }}
{{ content | caps | safe }}
{{ content | amp  | safe }}
{{ content | initQuotes  | safe }}
{{ content | smartypants  | safe }}
{{ content | widont  | safe }}
{{ content | caps  | safe }}
{{ content | ord  | safe }}
```

There are 2 additional filter that are not part of typogr: 
  - `nl2br` converts new lines to `<br>` 
  - `paragraphs` converts new lines to `<p>`.

Each of these is smart and will collapse empty paragraphs or multiple line breaks.

```
{{ someText | nl2b | safe }}
{{ someText | paragraphs | safe }}
```