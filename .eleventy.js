const moment = require('moment-timezone');
moment.tz.add("Europe/Berlin|CET CEST CEMT|-10 -20 -30|01010101010101210101210101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 kL0 Nc0 m10 WM0 1ao0 1cp0 dX0 jz0 Dd0 1io0 17c0 1fA0 1a00 1ehA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|41e5");

module.exports = function(eleventyConfig) {
  let markdownIt = require("markdown-it");

  let markdownItRenderer = new markdownIt({
    html: true,
    linkify: true,
    typographer: true,
    qoutes: '»«'
  });
  
  let mdOptions = {
    html: true,
    breaks: true,
    linkify: true,
    qoutes: '»«',

  };

  eleventyConfig.setLibrary("md", markdownIt(mdOptions));

  eleventyConfig.setTemplateFormats('md, liquid');
    eleventyConfig.setBrowserSyncConfig({files: './_site/css/**/*.css'});
    eleventyConfig.addPassthroughCopy({'assets/': '/assets/'});
    
    eleventyConfig.setFrontMatterParsingOptions({
      excerpt: true,
      excerpt_separator: '---'
    });

    eleventyConfig.addFilter('dateformat', (dateIn) => {
      return moment(dateIn).tz('CET').format('DD.MMMM');
    });

    // render as markdown
    eleventyConfig.addFilter('mdfy', (str) => {
      if (str) {
        markdownItRenderer.renderInline(str);
        return str;
      } 
    });

    // to lower case 
    eleventyConfig.addFilter('tlc', (val) => {
      if(val) {
      return val.toLowerCase();}
    });

    // render only first word
    eleventyConfig.addFilter('fw', (val) => {
      if(val) {
        return val.substr(0,val.indexOf(' '));
      }
    });

    // make list
    // eleventyConfig.addFilter('toList', (str) => {
    //   if(str) {
    //     str.split("*").join("</li><li>")
    //     str = '<ul><li>' + str + '</li></ul>'; 
    //     return str;
    //   }
    // });
    
    // eleventyConfig.addCollection('newsrev', function(collectionApi) {
    //   return collectionApi.getFilteredByTag('news').slice(0,2).sort(function(a, b) {
    //     return b.date - a.date;
    //   });
    // });
};
