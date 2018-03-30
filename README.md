# UpUpDownDown

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/e11f497ef8824cc793e53a235be2efa2)](https://www.codacy.com/app/noahliedfilm/UpUpDownDown?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=WebWevers/UpUpDownDown&amp;utm_campaign=Badge_Grade)

Know the cheat in old games that when you pressed the keys UP, UP, DOWN, DOWN, LEFT, RIGHT, LEFT, RIGHT, B, A something would happen?

Well, this JS libary is exactly that!

# Examples

See them in action here: https://webwevers.github.io/UpUpDownDown/index.html

Display a alert message

```javascript
uudd(function(){
    alert('Woah, this is a custom alert.');
});
```

Change the background color

```javascript
uudd(function(){
    document.getElementsByTagName('body')[0].style.backgroundColor = 'red';
});
```

Go to a other site

```javascript
uudd(function(){
    window.location = 'https://webwevers.nl';
});
```

# Get started

In order to get started you can do one of these two things:

- Use a CDN (Recommend)
- Clone the repository

## Use a CDN (Recommend)

Just add this line of code to your document for the minified code:
```html
<script src="https://cdn.rawgit.com/WebWevers/UpUpDownDown/651db237/UpUpDownDown.min.js"></script>
```
Or, maybe you want the non-minified version:
```html
<script src="https://cdn.rawgit.com/WebWevers/UpUpDownDown/651db237/UpUpDownDown.js"></script>
```

## Clone the repository

Clone the repository to whatever folder you like, make sure your webserver can access it!

Next include one of the following lines of code (of course with the correct paths):

Minified
```html
<script src="path/to/UpUpDownDown.min.js"></script>
```

Non-Minified
```html
<script src="path/to/UpUpDownDown.js"></script>
```
