# Introduction

This will be used to structure my redux which is key to the app architecture.

# Store

These are the data that will be edited directly

- Screen
- ActiveProject
- ActiveDir
- ActivePage
- PageData

# Screen

This is basically used to navigate the app, it is like a webpage of app screen.

- Welcome
- Project
- Folder
- Form
- Blog page

## Welcome page

This is the default page of the app, it will show when

- Screen: undefined | ""

On the main page, it will display

- list of projects already added and
- list of blogs or instructions, some of it will come with the app, and as time goes on, we may add latest blogs, like some sort of online back up.

On sidebar, it will display

- input for add new project
- List of recently added project

### Local data

```js
// sort in alphabetical order, it will be used to navigate/open a project
// It will be based on the folders inside "./projects"
const projects = [
  "Aether",
  "Caramel of sweets",
  "Dragon prince",
  "dunkin donuts",
  "The last airbender",
];

// sort in chronologically order, from the latest to oldest.
// User may also click them to open a project
const recents = [
  //...
];

// I will only use the title and subtitle on the main page.
// The rest will be fetched from "data/help.json"
const post = [
  {
    title: "Basic",
    subtitle: "How to use the app",
    content: "A very long blog on how to use the app",
  },
  {
    title: "Basic",
    subtitle: "How to use the app",
    // I could use this to link to a markdown(or yml) page and render it on page.
    // I will use some sort of mdToHtml tool. This will allow for more complex
    // blog post.
    // So, the markdown page may contain "author name", "date" etc.
    path: ID,
  },
];
```

## Project

This is when a project is loaded

- Screen = "project"
- ActiveProject: The name of the project/directory

On the main page, it will display

- Project configuration
- Button to add new folder. You can't add a file directly inside a project.

On the sidebar, it will display

- A file tree indicating the files and folder inside a project

### Local data

```js
// The file tree, it will be generated based on the ActiveProject
const fileTree = [
  name: "",
  path: "",,
  type: "dir"
  children: [
    {
      name: "",
      path: "",
      children: "",
      type: "file"
    }
  ]
]

// There will be a .config file at the root of the project.
// It will contain additional information about the project.
const config = {
  // Will be used to save project on firebase storage
  id: ID,
  // By default, it will be the name of the project(dir)
  // Changing it won't affect project/dir name
  title: ""
  description: "This is a story of two or three etc",
  tags: ["fantasy", "bending", "esoterism"],
  genre: "Sci fi",
  // Target audience age and gender
  target: "Adult male",
  created: Date
}
```

## Folder

Any one of the folders and subfolders inside a project.

- Screen: Folder
- ActiveDir: name of the folders/sub folders

Main page will contain

- inputs to edit some information about the folder
- a dropdown to select which template to use.
  - This will influence any other file that will be created inside it.
- Button to create folder and file inside it.

Sidebar will still be based on the project.

### Local data

```js
// .config will contain information about the folder
const config = {
  description: "",
  // The template will determine which type of file is created inside the folder
  // If there is no template selected, it will create a neutral file.
  template: "character",
};
```

## Files

Any one of the files inside a project

- Screen: File
- ActiveDir: name of the file

Main page

- It will contain the content of the file, it will be formatted based on the type(template) of the file.

Sidebar

- It will be based on the the projectDir

### Local data

```js
// All files will be saved as .scrb, and it will in json format
const scrb = {
  // used by generator to populate inputs
  template: "character",
  // h1
  //h2 #3dryadmnu4id9pu67s2thakncvv
  //h3 #3y2m04cel3dryae0ci1ovz57069
  Basic: "#52nxfjtpi3y2m03f3u3y2m03f3u",
  //...
};
```

## Help

These are pages that are predefined. It will basically render markdown It will also be availabe as modals in various pages.

main page

- renders markdown in learning format. If possible, I could even embed videos
- So basically, it will show a lot of rich format

side bar

- list of available tutorials.

# Summary

| Screen       | Store         | Sidebar                | Browser                                     |
| ------------ | ------------- | ---------------------- | ------------------------------------------- |
| Welcome page | -             | input<br />recent list | project list<br />help list                 |
| Project      | activeProject | File tree              | project config<br />button(new folder/file) |
| Folder       | activeFolder  | File tree              | folder config<br />button(new folder/file)  |
| File         | activeDir     | File tree              | file editor                                 |
| Blogs        | blogId        | blog tree              | md render                                   |
