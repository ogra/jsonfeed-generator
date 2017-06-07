# jsonfeed-generator

JSON Feed generator

```
$ npm install jsonfeed-generator
```

```javascript
var JSONFeed = require('jsonfeed-generator');
var feedOptions = {
    "version": "https://jsonfeed.org/version/1",
    "user_comment": "This is an example feed of podcast.",
    "title": "The Acme Podcast",
    "home_page_url": "http://example.com/",
    "feed_url": "http://example.com/feed.json"
};
var items = [
    {
        "id": "http://example.com/john-doe",
        "title": "Episode #1 - John Doe",
        "url": "http://example.com/john-doe",
        "content_text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id.",
        "content_html": "<a href=\"http://example.com/lorem/\">Lorem</a> ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id.",
        "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "date_published": "2017-06-07T21:21:00+09:00",
        "attachments": [
            {
                "url": "http://example.com/downloads/ep1.m4a",
                "mime_type": "audio/x-m4a",
                "size_in_bytes": 70289936,
                "duration_in_seconds": 6269
            }
        ]
    }
];
var feed = new JSONFeed(feedOptions, items);
feed.generate();
```

[JSON Feed Version 1](https://jsonfeed.org/version/1)