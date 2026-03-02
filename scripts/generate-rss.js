import { Feed } from 'feed';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Read tweet data
const dataPath = path.join(__dirname, '../src/data.json');
const tweetIds = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

// Create feed
const feed = new Feed({
  title: 'Rabbit Hole',
  description: 'A fan-made unofficial Rabbit Hole website',
  id: 'https://rabbithole.akr.moe',
  link: 'https://rabbithole.akr.moe',
  language: 'zh-CN',
  image: 'https://rabbithole.akr.moe/og-image.jpg',
  favicon: 'https://rabbithole.akr.moe/favicon.ico',
  copyright: 'All rights reserved',
  generator: 'feed',
  feedLinks: {
    rss2: 'https://rabbithole.akr.moe/rss.xml',
  },
  author: {
    name: 'akr',
    link: 'https://akr.moe',
  },
});

// Add tweets to feed (most recent first)
tweetIds.forEach((id) => {
  const tweetUrl = `https://twitter.com/i/web/status/${id}`;
  // Extract timestamp from tweet ID (Snowflake ID)
  const twitterEpoch = 1288834974657;
  const timestamp = (Number(id) >> 22) + twitterEpoch;
  const date = new Date(timestamp);

  feed.addItem({
    title: `Tweet ${id}`,
    id: tweetUrl,
    link: tweetUrl,
    description: `View tweet on X/Twitter`,
    date: date,
    pubDate: date,
  });
});

// Ensure public directory exists
const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Write RSS feed
const rssPath = path.join(publicDir, 'rss.xml');
fs.writeFileSync(rssPath, feed.rss2());
console.log(`Generated RSS feed at ${rssPath}`);
