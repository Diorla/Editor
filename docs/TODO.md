TODO: Settings

- Change colour palette
- Edit titlebar/menu

TODO: Aside

- Generator: At the top, there will be a dropdown of all the list of generators available. This will make it easier to add data from the generator straight into their editor. Each inputs on the generator will have freeze icon to prevent changes and a copy icon to copy the content of the inputs
- Reader: It will return a flat list of all the files inside the current project. All the files will be accessible via inputs with datalist, and whenever you select a file, it will load the content of the file that is not editable. The goal of this is so that you can copy into another file or perform lookup e.g. you are writing about a character and you want to see the information about that character or you're writing a story and you want to see what should be in your next chapter. Note, if user doesn't select any file or it doesn't match any file(since users will be using inputs), we don't render any file. At the top of the reader, there will be a copy icon, in case user wants to copy the entire contents (and user may copy manually by selecting the parts that they want.)

TODO Editor: Toolbars

- Indent: increase or decrease the indentation, in case of list, it would either
- create a child list or bring it out to parent list or even remove the list
- Image: image will be saved as imageData, so no physical files needed, also there
- will be a way to change the image dimension, perhaps I will start by setting
- a standard dimension at the beginning to prevent too big an image (ht < 300px)

TODO Editor: Advanced tools

- This includes stuff like multiple selection and edition, like managing more than
- one cursor like I do on VsCode using alt + click

TODO Editor: Add search and replace

- Basic editor search and replace.
- Ctrl + F: it will open two inputs, two icons and a button. The first input will be the text that is being searched, the second inputs will serve as the replacer text. The two icons will be up and down, navigating to the next or previous matched text while the replace button will replace the matched text with the content of the second input. If the second input is empty, the button is disabled.
- Also, there will be a badge indicating the number of matches.

TODO: Highlight keywords

- To be honest, I don't know how I will implement this feature but this is basically what it does.
- Certain keywords will be automatically be highlighted whenever you typed them in, similar to the way IDE applies different styles to different keywords. User may use it to keep track e.g. the number of characters that are present in a chapter.
- Implementation 1: At the project level, user can add keywords, I could have a simple inputs or an array of inputs, each one has its own label e.g. charaacters or locations etc. Now, any file inside this project will have the keyword highlighted, and in case of array of inputs, user can toggle which set of keywords that they want to see.
- Auto indexing: whenever a user opens a project or create a new file, all the names of the file is indexed like some store.index or store.keywords and this will automatically serves as the keywords. I could provide array of keywords by separating them based on folders. The only problem with this is that file name may not be semantic enough e.g. the name of the file may not equal the name of the item e.g. the name of a character file is "Waiter", but the name of the waiter may be John Doe, he may have the nickname JD, his uncle may call him Johny Boy etc.
- And perhaps, this feature is to far reaching?

FIXME: onTab is deprecated

- So I need to fix it, by replacing it with KeybindingFn

TODO Add map

- This will be a pretty advanced feature. I will add the ability to draw or generate geographic map.
- This map will have all the features of a standard map like distance calculation, zooming, calculate time it will take to move from one place to another
- Calculating time will depend mostly on travelling mode, which I will in turn use to calculate against the distance e.g. walking will be different from flying.
- I will of course provide default travelling mode, which will include but not limited to
- walking, running, cycling, horse ride, trains, car/bike, plane
- Perhaps, users may also add their own unique travelling mode and define the speed of such mode.
- Hint on how I will create this map.
- A blank canvas (yep, using html canvas), squares and objects.
- The objects will be placed on the the squares and they will include everything from trees, ocean, lake, houses, roads, train tracks, airport etc.
- Of course, the app will have to recognise different routes(roads, tracks, sideways etc) in order to be able to determine accessibility (e.g. if you're trying to calculate the time to trave between two points on a train, then you need to place it on a continous train track). So flying speed will be calculated based on two airports (airport A to B)
- As your map grows, we will give you the size and the perspective in real life e.g. Size: 10km-square, about the size of Abuja, Lagos, Ibadan, Benin republic.
- The locations will be close approximate of course e.g. above I assume, Abuja is like 9.8, Lagos is like 10.1, Ibadan is like 10.18, Benin is like 10.04. So I will set the range(e.g. +- 0.2) and pre add the list of cities, countries, continents and planets.
- This map will be flat, regardless of the size or intention.

TODO: Complete Blogs
TODO: Create modal help

- Whenever a user clicks the help button from home page, we will lead the user to an editor like help with all the blogs on the sidebar and the browser rendering them
- But whenever the user is doing something else, like managing a project or templates, I should prevent navigating away to blogs.
- Instead, I should create a modal that will show help that relates specifically to what the person is doing.
- E.g. if a person is on project configuration, I will render help regarding "how to create collections and subcollections", "what exactly is a project?" etc.
- So when the user close the modal, they will still be on the page they were before.
- Hence, I will have to divide the blogs into
- Introduction: general and homepage
- Shortcuts: General
- Projects: Including how to make the best use of the app
- Collections and subcollections
- Documents
- Templates
- Generators

TODO: Change root icon

- The icon at the root level, indicating the project should be something like a "collection" not a folder, and it should be different from all the folders under it.
- I could choose a book, a reel of something similar to indicate the root, and if possible, something that changes on expand and collapse. This will separate the root folder from any other folder in the project
- Suggested files: BsFiles for root folder and FaFileSignature for the files. Search "files" under react-icons. Or RiFoldersLine, one of the results from searching for "folder"

TODO: Expand on state change

- Trigger a folder to open when new file is just added to it

TODO: Complete Generator

- It will contain dropdown at the top for different possible template that can be auto-generated e.g. character
- Once you select a template, all the possible inputs that can be auto
- generated will be rendered with options to fill some of them.
- The inputs that have effects on other parts e.g. gender will be
- controlled (dropdown containing recognised genders) or select categories
- e.g. skintone (ie. white, offwhite, brown & black), hence black will generate
- skin colours like chocolate/ebony, while white will generate colours like porcelain/milky
- On each inputs, there will a copy icon, so that user can click them and copy them into
- their own editor.
- To make it easier, this generator inputs will retain the last inputs so that they don't lose information easily, and if they want to clear all inputs, a button will be provided for that.
- There will also be a freeze icon on each input to prevent it from being cleared in case the user wants to retain this information which will in turn influence any new generated information e.g. if all the characters are from the same country, just freeze the country.

TODO: Add unique context menu to different pages

TODO: Change icon

- An icon that scales very well and clearly visible in small sizes. Preferably a pen on a paper

TODO: Create clipboard

- Clipboard: I will add clipboard sign to each document, so if you click it, it would saved inside ./clipboard which maybe perused afterwards by opening the aside(click clipboard icon).
- Also, you may add new clipboard via the aside (new clippy button)
- To prevent abuse, I will limit the number of clipboards to like 10 so that users don't just avoid the app and use the clipboard all the time.
- Help(Clipboard): Clipboard should only be used to store information temporarily and be used sparsely. If you realise that you are re-using certain information alot, perhaps it's time for you to create a new template using these information.
- Also, if you want to check out information from one document to another, use the compare part except if they don't belong to the same project, then you may copy
- If possible, you copy miscellaneous information into one file. This will reduce the number of copy

TODO: Create generator

- Generator: This was the main goal of the app, auto populate values. It will only support default templates of course

TODO: Create menu

- I see the icons is becoming too much
- Hence, I will need to create a menu, at the right hand side
- I may add it to settings where user may select certain number of icons that can appear on the titlebar and the rest will appear on the menu

```jsx
<div className="titlebar">
{
  menulist.map((item, key)=> {
    if(titlebar.includes(item)) return <span>{item}</span>
  })
}
</div>
<div className="menu">
{
  menulist.map((item, key)=> {
    if(!titlebar.includes(item)) return <span>{item}</span>
  })
}
</div>
```

TODO Create tabs

- This will work as the primary navigation of a page
- So whenever I click a file on sidebar, it will send it or add it to store.tabs. Something like this

```js
tabs = [
  {
    route: "document",
    dir: "./projects/aether/characters/kehinde.scrb",
    name: "kehinde",
    active: true,
  },
  {
    route: "blogs",
    dir: "changelog.md",
    active: false
  },
];
```

- So browser can also be changed from the tabs by clicking the appropriate tab(using index);
```js
browser = {
  route: tabs[0].route,
  dir: tab[0].dir,
  name: tab[0].name, // Or simply use basename(dir, ext)
  data: {}, // Read the file
}