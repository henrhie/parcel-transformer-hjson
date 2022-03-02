# parcel-transformer-hjson

Parcel plugin that allows developers to write json files as `hjson`

<br>

[Hjson](https://hjson.github.io/) is a syntax extension to JSON. It's NOT a proposal to replace JSON or to incorporate it into the JSON spec itself. It's intended to be used like a user interface for humans, to read and edit before passing the JSON data to the machine. [Source](https://hjson.github.io/)

## Install

```bash
npm install parcel-transformer-hjson --save-dev
```

<br>

## Usage

`.parcelrc`

```json
{
	"extends": "@parcel/config-default",
	"transformers": {
		"*.hjson": ["parcel-transformer-hjson"]
	}
}
```

`example.hjson`

```json
{

  // Live demo.
  // Type either into the Hjson or JSON input
  // to convert to the other format.
  // Reload to reset.

  # comments are useful
  # specify rate in requests/second
  "rate": 1000

  // maybe you prefer js style comments
  /* or if you feel old fashioned */

  # key names do not need to be placed in quotes
  key: "value"

  # you don't need quotes for strings
  text: look ma, no quotes!

  # note that for quoteless strings everything up
  # to the next line is part of the string!

  # commas are optional
  commas:
  {
    one: 1
    two: 2
  }

  # trailing commas are allowed
  trailing:
  {
    one: 1,
    two: 2,
  }

  # multiline string
  haiku:
    '''
    JSON I love you.
    But you strangle my expression.
    This is so much better.
    '''

  # Obviously you can always use standard JSON syntax as well:
  favNumbers: [ 1, 2, 3, 6, 42 ]
}
```

`example.js`

```js
import example from './example.hjson';

console.log(example.rate); // 1000
console.log(example.key); // value
console.log(example.commas.one); // 1
```

`package.json`

```json
{
	"scripts": {
		"start": "parcel src/index.html",
		"build": "parcel build src/index.html --dist-dir dist"
	}
}
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
