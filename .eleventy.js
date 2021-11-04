module.exports = eleventyConfig => {

  const markdownIt = require('markdown-it')
  const markdownItAttrs = require('markdown-it-attrs')

  const markdownItOptions = {
    html: true,
    breaks: true,
    linkify: true
  }

  const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs)

  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.setLibrary('md', markdownLib);
  eleventyConfig.markdownTemplateEngine = 'njk';

  return {
    pathPrefix: '/publishing-11ty/',
    dir: {
      input: "src",
      output: "docs"
    }
  }
}