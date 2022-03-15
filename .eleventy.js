const moment = require('moment-timezone');
const pluginSEO = require("eleventy-plugin-seo");

moment.tz.add("Europe/Berlin|CET CEST CEMT|-10 -20 -30|01010101010101210101210101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 kL0 Nc0 m10 WM0 1ao0 1cp0 dX0 jz0 Dd0 1io0 17c0 1fA0 1a00 1ehA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|41e5");

module.exports = function (eleventyConfig) {
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

  eleventyConfig.addPlugin(pluginSEO, {
    title: "Werkstatt für Verantwortung und Führung",
    description: "Die Werkstatt dient der gemeinsamen Entwicklung von Verantwortung und Führung auf der individuellen wie der beruflichen Ebene. Das wollen wir miteinander praktisch erforschen und lernen: Wie will ich Verantwortung übernehmen und tragen? Wie praktiziere ich Führung  (d. h. Selbst-, Team- und Organisationsführung)? Alle unsere Werkstatträume sind Lern- und Begegnungsräume, in denen aus dem konkreten »Material« einer Situation schöpferisch neue Möglichkeiten entwickelt werden. So erproben wir von Anfang an Lernen im Team, erleben uns im Spiegel anderer, erkunden kokreative Prozesse und gewinnen spielerisch Einsichten durch konkrete Beispiele.",
    url: "https://werkstatt-fuer-verantwortung-und-fuehrung.de",
    author: "Werkstätter",
    image: "/assets/arco.jpg"
  });

  eleventyConfig.setLibrary("md", markdownIt(mdOptions));

  eleventyConfig.setTemplateFormats('md, liquid');
  eleventyConfig.setBrowserSyncConfig({
    files: './_site/css/**/*.css'
  });
  eleventyConfig.addPassthroughCopy({
    'assets/': '/assets/'
  });

  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: '---'
  });

  eleventyConfig.addFilter('dateformat', (dateIn) => {
    return moment(dateIn).locale('de').tz('CET').format('DD. MMM');
  });
  eleventyConfig.addFilter('fulldateformat', (dateIn) => {
    return moment(dateIn).locale('de').tz('CET').format('DD. MMMM');
  });
  eleventyConfig.addFilter('starttime', (dateIn) => {
    return moment(dateIn).locale('de').tz('CET').format('HH:mm');
  });

  // render as markdown
  eleventyConfig.addFilter('mdfy', (str) => {
    if (str) {
      markdownItRenderer.renderInline(str);
      return str;
    }
  });

  // to integer
  eleventyConfig.addFilter('minusDays', (val) => {
    now = Date.now();
    if (val) {
      dat = parseInt(val);
      dat - 345600;
      if (dat > now) return true;
    }
  });
  // to lower case 
  eleventyConfig.addFilter('tlc', (val) => {
    if (val) {
      return val.toLowerCase();
    }
  });

  // render only first word
  eleventyConfig.addFilter('fw', (val) => {
    if (val) {
      return val.substr(0, val.indexOf(' '));
    }
  });

};