# share-it

> Modern share. No dependencies. Just JS. Just 4kb.

Use share-it with one click and share your data easily!

See share-it in action: http://cezarlz.github.io/share-it/

![harjrwfvmr](https://cloud.githubusercontent.com/assets/954889/26737838/3bb9291e-47a2-11e7-8525-18bff2acc1ea.gif)


## Supported Social Networks
* [Facebook](#facebook)
* [Twitter](#twitter)
* [Google+](#google)
* [Pinterest](#pinterest)
* [Linked In](#linked-in)
* [Buffer](#buffer)
* [Digg](#digg)
* [StumbleUpon](#stumbleupon)
* [Tumblr](#tumblr)
* [Reddit](#reddit)
* [Evernote](#evernote)
* [Wordpress](#wordpress)
* [Pocket](#pocket)
* **[Whatsapp](#whatsapp)**

## Install

Using bower:
```
bower install --save share-it
```

Using npm:
```
npm install --save share.it
```

## Usage
```javascript
var share = new ShareIt({
  specs: {
    width: 720,
    height: 300
  }
});

share.init();
```

After initialization, just put `data-share` attribute in your target button or whatever element.
```html
<button
  class="btn"
  data-share
  data-share-facebook
  data-share-facebook-url="http://example.com"
>
  Share on Facebook
</button>

<button
  class="btn"
  data-share
  data-share-whatsapp
  data-share-whatsapp-text="Hi guys, like share-it!"
>
  Share on Whatsapp (only mobile)
</button>
```

## API

### Init params
Property|Type|Default|Required?
---------|----|-------|---------
specs.width|`number`|`550`|No
specs.height|`number`|`350`|No
target|`string`|`'_blank'`|No
newTab|`boolean`|`false`|No

_In `specs`, you can use another values. [See more here](http://www.w3schools.com/jsref/met_win_open.asp)._

For example:
```javascript
var share = new ShareIt({
  specs: {
    left: 20,
    top: 20,
    menubar: 'no',
    titlebar: 'yes',
    resizable: 'no'
  }
});

share.init();
```

### Facebook

```html
<button
  data-share
  data-share-facebook
  data-share-facebook-url="http://example.com"
>
  Share me!
</button>
```

### Twitter

```html
<button
  data-share
  data-share-twitter
  data-share-twitter-url="http://example.com"
  data-share-twitter-title="May the force be with you!"
  data-share-twitter-via="cezar_luiz"
  data-share-twitter-hashtags="one,two,thre"
>
  Share me!
</button>
```

### Google+

```html
<button
  data-share
  data-share-google
  data-share-google-url="http://example.com"
>
  Share me!
</button>
```

### Pinterest

```html
<button
  data-share
  data-share-pinterest
  data-share-pinterest-url="http://example.com"
  data-share-pinterest-img="http://example.com/image.jpg"
  data-share-pinterest-is-video="1"
  data-share-pinterest-title="Awesome JS library!"
>
  Share me!
</button>
```

### Linked In

```html
<button
  data-share
  data-share-linkedin
  data-share-linkedin-url="http://example.com"
  data-share-linkedin-title="My awesome article!"
  data-share-linkedin-summary="Description here"
  data-share-linkedin-source="The New York Times"
>
  Share me!
</button>
```

### Buffer

```html
<button
  data-share
  data-share-buffer
  data-share-buffer-url="http://example.com"
  data-share-buffer-title="Share It on Buffer!"
>
  Share me!
</button>
```

### Tumblr

```html
<button
  data-share
  data-share-tumblr
  data-share-tumblr-url="http://example.com"
  data-share-tumblr-title="Share It on Tumblr!"
  data-share-tumblr-desc="Description of my Tumblr!"
>
  Share me!
</button>
```

### Digg

```html
<button
  data-share
  data-share-digg
  data-share-digg-url="http://example.com"
  data-share-digg-title="Share It on Digg!"
>
  Share me!
</button>
```

### StumbleUpon

```html
<button
  data-share
  data-share-su
  data-share-su-url="http://example.com"
  data-share-su-title="Share It on StumbleUpon!"
>
  Share me!
</button>
```

### Delicious

```html
<button
  data-share
  data-share-delicious
  data-share-delicious-url="http://example.com"
  data-share-delicious-title="Save my link on Delicious!"
>
  Share me!
</button>
```

### Reddit

```html
<button
  data-share
  data-share-reddit
  data-share-reddit-url="http://example.com"
  data-share-reddit-title="Share on Reddit!"
>
  Share me!
</button>
```

### Evernote

```html
<button
  data-share
  data-share-evernote
  data-share-evernote-url="http://example.com"
  data-share-evernote-title="Save my link on Evernote!"
>
  Share me!
</button>
```

### Wordpress

```html
<button
  data-share
  data-share-wp
  data-share-wp-url="http://example.com"
  data-share-wp-title="Share on Wordpress!"
  data-share-wp-desc="Description of my link!"
  data-share-wp-img="http://example.com/image.jpg"
>
  Share me!
</button>
```

### Pocket

```html
<button
  data-share
  data-share-pocket
  data-share-pocket-url="http://example.com"
  data-share-pocket-title="Read later on Pocket!"
>
  Share me!
</button>
```

### Whatsapp

```html
<button
  data-share
  data-share-whatsapp
  data-share-whatsapp-text="Share any text on Whatsapp like a message! PS: Works only in smartphones."
>
  Share me!
</button>
```

## License

MIT.

Do you like? Fork and contribute :D

Made with :heart:
