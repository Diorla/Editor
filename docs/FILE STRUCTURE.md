This the file structure and the significance of each folder

- `./assets`: Images (and other media objects) used by the app
- `./docs`: List of markdown files, to be use by developers. I won't ship this with the app
- `./node`_modules: Well, this is from nodejs
- `./projects`: This is the folder where all works will be saved. Each folder under this folder will represent a project.
- `./scripts`: all `.js` files compiled by `.babelrc`. It's a mirror of `./src`
- `./src`: This is where I write my raw code before it's compiled. I won't ship it with the app
  - `./redux`: All redux related files like reducers, stores and constant.
  - `./sections`: The five segments of the app
  - `./components`: These are reusable react elements
  - `./modules`: Scripts that I use in my apps
- `./styles`: All `.css` files.
