# Scribble files

Saved with `.scrb` extension. It is a simple file in JSON format. No nesting. It is the file(s) is directly directly manipulated and recognised by the app.

```json
{
  "basic": "#52nxfjtpi3y2m03f3u3y2m03f3u",
  "name": "John Doe",
  "age": "24",
  "gender": "Male",
  "height": "14cm",
  "temp": "#3dryadmnu4id9pu67s2thakncvv",
  "extra": "hosfafa",
  "description": "Hisfoisf",
  "third": "#3y2m04cel3dryae0ci1ovz57069",
  "actor": "",
  "director": "",
  "country": "Nigeria",
  "city": "Lagos"
}
```

The following values are parsed differently

- `#52nxfjtpi3y2m03f3u3y2m03f3u` => h1
- `#3dryadmnu4id9pu67s2thakncvv` => h2
- `#3y2m04cel3dryae0ci1ovz57069` => h3

# Templates

A file named `.template`. There should be one in any folder with `scrb` files. The values of `.template` is copied into `scrb` files. All `scrb` files are based on `.template`, hence should follow the same pattern.
It should be ordered according to the way you want it to appear on the page.

```jsonc
{
  "basic": "#52nxfjtpi3y2m03f3u3y2m03f3u", //header 1
  "name": "John Doe", //default value
  "age": "",
  "gender": "",
  "height": "",
  "temp": "#3dryadmnu4id9pu67s2thakncvv", //header 2
  "extra": "",
  "description": "",
  "third": "#3y2m04cel3dryae0ci1ovz57069", //header 3
  "actor": "",
  "director": "",
  "country": "",
  "city": ""
}
```

Normally, the values of the obj should be empty. If it's not empty, it should either indicate the headers or default/shared value

# Generator

Saved as `.generator`, like `.template`, there must be one of it in a folder. It's possess information on how to generate random values for `scrb` files.
The keys should be based on `.template`. It shouldn't include keys that is not inside `.template`, otherwise it will add more keys to the `scrb`.
Note, keys should be ordered based on need. E.g if **name** depends on **gender** and **nationality**, then _name_ should come after _gender_ and _nationality_. This would only affect how it is generated, it won't affect the order of `scrb` input.

```jsonc
{
  "key1": {
    // a equal chance for key1.data
    "data": ["val1", "val2", "val3", "val4"]
  },
  "key2": {
    "data": ["val1", "val2", "val3", "val4"],
    // odd will be used by oddCalculator if you don't want equal chances
    "odd": [1, 2, 3, 4]
  },
  "key3": {
    // Use nesting where there are different possible values for data
    "data": {
      "odd": ["val1", "val3", "val5", "val7"],
      "even": ["val2", "val4", "val6", "val8"]
    },
    // each .scrb["sub"] has the possible value of "odd" or "even".
    "filter": ["sub"]
  },
  "key4": {
    // The depth of data will determine the number of filters
    "data": {
      "odd": {
        "small": ["val1", "val3"],
        "big": ["val5", "val7", "val9"]
      },
      "even": {
        "small": ["val0", "val2", "val4"],
        "big": ["val6", "val8"]
      }
    },
    // each .scrb[isOdd] has the possible value of "odd" or "even".
    // and size = small or big
    "filter": ["isOdd", "size"]
  },
  "key5": {
    // it will return a value between two numbers. It's important for stuff like age.
    "isRange": true,
    // data should have a length of 2, and data[0] < data[1]
    "data": [1, 100]
  }
}
```

# More
> These are things that is to be added.

- Make `data` link to external json files