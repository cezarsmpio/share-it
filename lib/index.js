'use strict';

const ShareIt = function(options) {
  // Defaults
  const defaults = {
    specs: {
      width: 550,
      height: 350,
    },
    target: '_blank',
    newTab: false,
  };

  this.opts = {
    ...defaults,
    ...options,
  };

  // Constructor
  this.elements = [].slice.apply(document.querySelectorAll('[data-share]'));

  return {
    init: () => {
      this.clickElements();
    },
  };
};

ShareIt.prototype = {
  clickElements: function() {
    this.elements.map(el => {
      el.addEventListener('click', e => {
        e.preventDefault();

        const url = this.getMediaUrl(el);

        window.open(encodeURI(url), this.opts.target, this.getSpecs(el));
      });
    });
  },
  getSpecs: function(el) {
    const specs = [];

    if (!this.opts.newTab) {
      Object.keys(this.opts.specs).map(spec => {
        const val = this.opts.specs[spec];

        if (el.hasAttribute('data-share-' + spec)) {
          specs.push(`${spec}=${el.getAttribute(`data-share-${spec}`)}`);
        } else {
          specs.push(`${spec}=${val}`);
        }
      });
    }

    return specs.join(',');
  },
  getMediaUrl: function(el) {
    let url;
    const obj = {};
    const attrs = [].slice.call(el.attributes);

    // Mapping the attributes of clicked element
    attrs.map(attr => {
      if (attr.name.toLowerCase().indexOf('data-share') >= 0) {
        // Mapping networks
        Object.keys(this.networks).map(net => {
          // Elememt has the attribute
          if (attr.name.toLowerCase().indexOf('data-share-' + net) >= 0) {
            var network = this.networks[net];

            // Set network url
            url = network.url;

            // Create object with etwork strings
            network.strings.map(s => {
              obj[s] = el.getAttribute(`data-share-${net}-${s}`) || '';
            });

            return;
          }
        });
      }
    });

    return this.supplant(url, obj);
  },
  supplant: function(url, o) {
    return url.replace(/{([^{}]*)}/g, function(a, b) {
      var r = o[b];
      return typeof r === 'string' || typeof r === 'number' ? r : a;
    });
  },
  networks: {
    facebook: {
      url: 'http://www.facebook.com/sharer.php?s=100&u={url}',
      strings: ['url'],
    },
    twitter: {
      url:
        'https://twitter.com/share?url={url}&text={title}&via={via}&hashtags={hashtags}',
      strings: ['title', 'url', 'via', 'hashtags'],
    },
    google: {
      url: 'https://plus.google.com/share?url={url}',
      strings: ['url'],
    },
    pinterest: {
      url:
        'https://pinterest.com/pin/create/bookmarklet/?media={img}&url={url}&is_video={is-video}&description={title}',
      strings: ['img', 'url', 'is-video', 'title'],
    },
    linkedin: {
      url:
        'https://www.linkedin.com/shareArticle?mini=true&url={url}&title={title}&summary={summary}&source={source}',
      strings: ['url', 'title', 'summary', 'source'],
    },
    buffer: {
      url: 'http://bufferapp.com/add?text={title}&url={url}',
      strings: ['title', 'url'],
    },
    tumblr: {
      url:
        'https://www.tumblr.com/widgets/share/tool?canonicalUrl={url}&title={title}&caption={desc}',
      strings: ['url', 'title', 'desc'],
    },
    digg: {
      url: 'http://digg.com/submit?url={url}&title={title}',
      strings: ['url', 'title'],
    },
    su: {
      url: 'http://www.stumbleupon.com/submit?url={url}&title={title}',
      strings: ['url', 'title'],
    },
    delicious: {
      url:
        'https://delicious.com/save?v=5&noui&jump=close&url={url}&title={title}',
      strings: ['url', 'title'],
    },
    reddit: {
      url: 'http://reddit.com/submit?url={url}&title={title}',
      strings: ['url', 'title'],
    },
    evernote: {
      url: 'http://www.evernote.com/clip.action?url={url}&title={title}',
      strings: ['url', 'title'],
    },
    wp: {
      url:
        'http://wordpress.com/press-this.php?u={url}&t={title}&s={desc}&i={img}',
      strings: ['url', 'title', 'desc', 'img'],
    },
    pocket: {
      url: 'https://getpocket.com/save?url={url}&title={title}',
      strings: ['url', 'title'],
    },
    whatsapp: {
      url: 'whatsapp://send?text={text}',
      strings: ['text'],
    },
  },
};

export default ShareIt;
