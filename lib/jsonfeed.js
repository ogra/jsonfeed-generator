const jsonfeedSchema = require('jsonfeed-schema');
var Ajv = require('ajv');
var ajv = new Ajv();
var validate = ajv.compile(jsonfeedSchema);

function JSONFeed (options, items, extensions) {
    options = options || {};
    this.feed = {};

    this.feed.version = options.version || 'https://jsonfeed.org/version/1';
    this.feed.title   = options.title || 'Untitled Feed';
    this.feed.items   = items || [];

    if (options.home_page_url) this.feed.home_page_url = options.home_page_url;
    if (options.feed_url) this.feed.feed_url = options.feed_url;
    if (options.description) this.feed.description = options.description;
    if (options.user_comment) this.feed.user_comment = options.user_comment;
    if (options.next_url) this.feed.next_url = options.next_url;
    if (options.icon) this.feed.icon = options.icon;
    if (options.favicon) this.feed.favicon = options.favicon;
    if (options.author) this.feed.author = options.author;
    if (options.author && options.author.name) this.feed.author.name = options.author.name;
    if (options.author && options.author.url) this.feed.author.url = options.author.url;
    if (options.author && options.author.avatar) this.feed.author.avatar = options.author.avatar;
    if (options.expired) this.feed.expired = options.expired;
    if (options.hubs) this.feed.hubs = options.hubs;

    addExtensions(this.feed, extensions);

    this.item = function (options, extensions) {
        options = options || {};
        var item = {
            id: options.id
        };

        if (options.url) item.url = options.url;
        if (options.external_url) item.external_url = options.external_url;
        if (options.title) item.title = options.title;
        if (options.content_html) item.content_html = options.content_html;
        if (options.content_text) item.content_text = options.content_text;
        if (options.content_html === undefined && options.content_text === undefined) item.content_text = '';
        if (options.summary) item.summary = options.summary;
        if (options.image) item.image = options.image;
        if (options.banner_image) item.banner_image = options.banner_image;
        if (options.date_published) item.date_published = options.date_published;
        if (options.date_modified) item.date_modified = options.date_modified;
        if (options.author) item.author = options.author;
        if (options.author && options.author.name) item.author.name = options.author.name;
        if (options.author && options.author.url) item.author.url = options.author.url;
        if (options.author && options.author.avatar) item.author.avatar = options.author.avatar;
        if (options.tags) item.tags = options.tags;
        if (options.attachments) item.attachments = [];
        if (options.attachments) {
            options.attachments.forEach(function(attachment) {
                var tmpAttachment = {};
                tmpAttachment.url = attachment.url;
                tmpAttachment.mime_type = attachment.mime_type;
                if (attachment.title) tmpAttachment.title = attachment.title;
                if (attachment.size_in_bytes) tmpAttachment.size_in_bytes = attachment.size_in_bytes;
                if (attachment.duration_in_seconds) tmpAttachment.duration_in_seconds = attachment.duration_in_seconds;
                item.attachments.push(tmpAttachment);
            });
        }

        this.feed.items.push(item);
        var valid = validate(this.feed);
        if (valid) {
            return this.feed;
        } else {
            console.log(validate.errors);
            throw validate.errors;
        }
    };

    this.generate = function () {
        var valid = validate(this.feed);
        if (valid) {
            return this.feed;
        } else {
            console.log(validate.errors);
            throw validate.errors;
        }
    }
}

function addExtensions(addTo, extensions) {
    for (var property in extensions) {
        addTo[property] = extensions[property];
    }
}

module.exports = JSONFeed;