var assert = require("assert");

var JSONFeed = require("../lib/jsonfeed.js");

describe("empty feed", function() {
    it("generate", function() {
        var emptyFeed = {
            "version": "https://jsonfeed.org/version/1",
            "title": "Untitled Feed",
            "items": []
        };
        var feed = new JSONFeed();
        assert.deepEqual(emptyFeed, feed.generate());
    });
});

describe("podcast feed", function() {
    it("generate", function() {
        var podcastFeed = {
            "version": "https://jsonfeed.org/version/1",
            "user_comment": "This is an example feed of podcast.",
            "title": "The Acme Podcast",
            "home_page_url": "http://example.com/",
            "feed_url": "http://example.com/feed.json",
            "items": [
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
            ]
        };
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
        assert.deepEqual(podcastFeed, feed.generate());
    });
});

describe("microblog feed", function() {
    it("generate", function() {
        var microblogFeed = {
            "version": "https://jsonfeed.org/version/1",
            "user_comment": "This is an example feed of microblog.",
            "title": "Yet Another Microblog",
            "home_page_url": "https://example.co/",
            "feed_url": "https://example.co/feed.json",
            "author": {
                "name": "Jane Doe",
                "url": "http://example.co/",
                "avatar": "https://example.co/avatar.png"
            },
            "items": [
                {
                    "id": "7223459",
                    "url": "https://example.co/7223459",
                    "content_text": "I have a pen. \n\nhttps://example.co/pen",
                    "date_published": "2017-06-01T08:30:00+09:00"
                }
            ]
        };
        var feedOptions = {
            "version": "https://jsonfeed.org/version/1",
            "user_comment": "This is an example feed of microblog.",
            "title": "Yet Another Microblog",
            "home_page_url": "https://example.co/",
            "feed_url": "https://example.co/feed.json",
            "author": {
                "name": "Jane Doe",
                "url": "http://example.co/",
                "avatar": "https://example.co/avatar.png"
            }
        };
        var items = [
            {
                "id": "7223459",
                "url": "https://example.co/7223459",
                "content_text": "I have a pen. \n\nhttps://example.co/pen",
                "date_published": "2017-06-01T08:30:00+09:00"
            }
        ];
        var feed = new JSONFeed(feedOptions, items);
        assert.deepEqual(microblogFeed, feed.generate());
    });
});