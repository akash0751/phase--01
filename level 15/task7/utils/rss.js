const Parser = require('rss-parser')
const Article = require('../Model/rss')

const parser = new Parser();

const fetchAndStoreFeed = async (feedUrl) => {
  try {
    const feed = await parser.parseURL(feedUrl);
    const source = feed.title;

    for (const item of feed.items) {
      const { title, link, content, pubDate } = item;

      
      const exists = await Article.findOne({ link });
      if (!exists) {
        const article = new Article({
          title,
          link,
          content: content || '',
          pubDate: pubDate ? new Date(pubDate) : new Date(),
          source
        });
        await article.save();
      }
    }

    return { success: true, count: feed.items.length };
  } catch (error) {
    throw new Error(`Failed to fetch feed: ${error.message}`);
  }
};

module.exports = fetchAndStoreFeed;