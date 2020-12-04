
var typogr = require('typogr');

const typogrify = (value) => typogr.typogrify(value);
const amp = (value) => typogr.amp(value);
const initQuotes = (value) => typogr.initQuotes(value);
const smartypants = (value) => typogr.smartypants(value);
const widont = (value) => typogr.widont(value);
const caps = (value) => typogr.caps(value);
const ord = (value) => typogr.ord(value);

const nl2br = (value) => {
  return value
    .split(/\r?\n/)
    .filter((sentence) => sentence.trim().length)
    .map((sentence) => `${sentence}</br>`)
    .join("");
};

const paragraphs = (value) => {
  return value
    .split(/\r?\n/)
    .filter((sentence) => sentence.trim().length)
    .map((sentence) => `<p>${sentence}</p>`)
    .join("");
};


const typographyModule = module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter("typogrify", typogrify);
  eleventyConfig.addFilter("amp", amp);
  eleventyConfig.addFilter("initQuotes", initQuotes);
  eleventyConfig.addFilter("smartypants", smartypants);
  eleventyConfig.addFilter("widont", widont);
  eleventyConfig.addFilter("caps", caps);
  eleventyConfig.addFilter("ord", ord);
  eleventyConfig.addFilter("nl2br", nl2br);
  eleventyConfig.addFilter("paragraphs", paragraphs);
}

typographyModule.typogrify;
typographyModule.amp;
typographyModule.initQuotes;
typographyModule.smartypants;
typographyModule.widont;
typographyModule.caps;
typographyModule.ord;
typographyModule.nl2br;
typographyModule.paragraphs;