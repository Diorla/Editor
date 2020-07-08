TODO: Settings

- Change colour palette

TODO: Hook it up with store.browser.data

- This would allow me to update stuff like template, word length, full directory etc.

TODO: Complete Aside

- Generator: At the top, there will be a dropdown of all the list of generators available. This will make it easier to add data from the generator straight into their editor. Each inputs on the generator will have freeze icon to prevent changes and a copy icon to copy the content of the inputs
- Reader: It will return a flat list of all the files inside the current project. All the files will be accessible via inputs with datalist, and whenever you select a file, it will load the content of the file that is not editable. The goal of this is so that you can copy into another file or perform lookup e.g. you are writing about a character and you want to see the information about that character or you're writing a story and you want to see what should be in your next chapter. Note, if user doesn't select any file or it doesn't match any file(since users will be using inputs), we don't render any file. At the top of the reader, there will be a copy icon, in case user wants to copy the entire contents (and user may copy manually by selecting the parts that they want.)

TODO: Add more to toolbars

- Indent: increase or decrease the indentation, in case of list, it would either
- create a child list or bring it out to parent list or even remove the list
- Image: image will be saved as imageData, so no physical files needed, also there
- will be a way to change the image dimension, perhaps I will start by setting
- a standard dimension at the beginning to prevent too big an image (ht < 300px)

  TODO: Advanced tools

- This includes stuff like multiple selection and edition, like managing more than
- one cursor like I do on VsCode using alt + click

  TODO: Add search and replace

- Basic editor search and replace.
- Ctrl + F: it will open two inputs, two icons and a button. The first input will be the text that is being searched, the second inputs will serve as the replacer text. The two icons will be up and down, navigating to the next or previous matched text while the replace button will replace the matched text with the content of the second input. If the second input is empty, the button is disabled.
- Also, there will be a badge indicating the number of matches.

  TODO: Highlight keywords

- To be honest, I don't know how I will implement this feature but this is basically what it does.
- Certain keywords will be automatically be highlighted whenever you typed them in, similar to the way IDE applies different styles to different keywords. User may use it to keep track e.g. the number of characters that are present in a chapter.
- Implementation 1: At the project level, user can add keywords, I could have a simple inputs or an array of inputs, each one has its own label e.g. charaacters or locations etc. Now, any file inside this project will have the keyword highlighted, and in case of array of inputs, user can toggle which set of keywords that they want to see.
- Auto indexing: whenever a user opens a project or create a new file, all the names of the file is indexed like some store.index or store.keywords and this will automatically serves as the keywords. I could provide array of keywords by separating them based on folders. The only problem with this is that file name may not be semantic enough e.g. the name of the file may not equal the name of the item e.g. the name of a character file is "Waiter", but the name of the waiter may be John Doe, he may have the nickname JD, his uncle may call him Johny Boy etc.
- And perhaps, this feature is to far reaching?

// BUG: Editor cursor is erratic

- Whenever I call the function inside useEffect(which should enable autofocus on page load)
- It works at first, and then cursor starts jumping around on the editor
- For turning focus to the editor

//FIXME: onTab is deprecated

- So I need to fix it, by replacing it with KeybindingFn
- @param {React.KeyboardEvent<{}>} e

//TODO: Use store.form to handle different forms

- I've been passing around a lot of state management ie. setState, state, config etc
- I need to add this to the store, like load .config or .scrb content straight into
- the store.
- And with this, I can update the .config or .scrb file by using subscribe in the main
- tree.
- If possible, I could find or build a middleware that only call the subscribe function
- When there is change in form, and to improve performance, it will compare prevState
- with currentState, or I could stick with saveConfig inside useEffect
- I believe this will also speed up the app and reduce a lot of re-rendering that I'm
- doing with useEffect.
- So the store.form will have two options
- 1.  reset: state = {}
- 2.  update: state = {...state, ...action.payload}
- 3.  create: state = {...action.payload}

TODO: Make the options dynamic by parsing the template folder.

- This means the number of templates will determine the list and not the other way around
- It will also make it easily extendable by allowing the options to add new template
- on the home page.
- Adding new template will use markdown format which will in turn be parsed into html strings
- and saved into templateName.json
- So each template will have the following keys: template, content and description.
- All preloaded template will have template keys like character, stories etc because my app will
- parse them differently but user generated templates will all be parsed by editor, so no need for
- "template" key. The description will also be loaded and be presented the same way we are
- "detail.js" now.
- "content" is the part that will be rendered and updated via Editor.
- Hence the edit page logic will go like this=
- if file has template and the template is one of the special page, load special page hence load generic page.
- Also, I could change the dropdown to input with datalist (this will prevents long dropdowns), and in
- case user types in an text that is not on the template, it will show error feedback ie. input is
- red and error message. It may also prevent the creation of new documents or create new elements
- using no template (default ie. empty document)

// TODO Add map

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

  TODO: More on <Note />

- Note will be provided via the titlebar and accessible from anywhere
- in the app.
- And the default template will serve as purpose of generic no-format
- template.
- In the note, I will add "clipboard icon" to each textinput, so that user
- can just copy the content of that textfield.
- So, I will have to create a store.clipboard(string) as well as store.notes(an array)

  TODO: Add specific icon to each page

- I should reduce the icons on the titlebar and render it based on the page.
- Each page should have different icon.
- For example character.js will contain "randomise icon"

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

TODO Make help extendable

- Like templates, you can add new help file
- There will be a button at the top of the sidebar that will render an input
- If a help file is created by user, there will be a delete icon at the top of the app
- Of course, you can delete or edit default help files

TODO: Create 3 sections on the screen

- 1.  The list of all the projects.
- 2.  The list of current templates, click it will open template list
- 3.  Help: 3 or more highlighted help

//TODO: Add templates creator.

- This will basically lead to page where there will list of default/created templates
- on the sidebar. At the top of the sidebar, there will be a text input to enable
- user to create a new template. The sidebar will be populated based on the files inside
- ./template folder.
- On the browser, there will be a simple editor based on the template in focus(when user
- clicks a template or create new one)
- The template editor will basically be like any other editor, and will be available as
- a dropdown whenever a user wants to create a new document.
- Note, users may be able to edit default templates, but they can't delete it.

TODO: Change root icon

- The icon at the root level, indicating the project should be something like a "collection" not a folder, and it should be different from all the folders under it.
- I could choose a book, a reel of something similar to indicate the root, and if possible, something that changes on expand and collapse. This will separate the root folder from any other folder in the project
- Suggested files: BsFiles for root folder and FaFileSignature for the files. Search "files" under react-icons. Or RiFoldersLine, one of the results from searching for "folder"

  TODO: Expand on state change

- Trigger a folder to open when new file is just added to it

//TODO: Generator

- The dice icon at the titlebar will open another panel at the side of screen.
- It will contain dropdown at the top for different possible template that
- can be auto-generated e.g. character
- Once you select a template, all the possible inputs that can be auto
- generated will be rendered with options to fill some of them.
- The inputs that have effects on other parts e.g. gender will be
- controlled (dropdown containing recognised genders) or select categories
- e.g. skintone (ie. white, offwhite, brown & black), hence black will generate
- skin colours like chocolate/ebony, while white will generate colours like porcelain/milky
- On each inputs, there will a copy icon, so that user can click them and copy them into
- their own editor.
- To make it easier, this generator inputs will retain the last inputs so that they don't
- lose information easily, and if they want to clear all inputs, a button will be provided
- for that.
- There will also be a freeze icon on each input to prevent it from being cleared in case
- the user wants to retain this information which will in turn influence any new generated
- information e.g. if all the characters are from the same country, just freeze the country.

//TODO: Add unique context menu to different pages

//TODO: Add help menu

- I will add a help icon at the to titlebar, which will toggle store.showHelp
- On each browser, there will be a modal/boolean page that will render based
- on the value of store.showHelp
- For example, store.showHelp ? <Help/> : <Project>.
- This will enable tailored help especially for the documents e.g.
- <Character />, <Creature /> etc.

//TODO: Delete

- This will be similar to help icon above. It will check for active directory from
- store.project in the following order and determine which one to delete
- itemDir: Delete the document and change screen to "Folder"
- CollectionDir: Delete the collection and change screen to "Project"
- Project: Delete the project and go to home screen
- Blog: Nothing to delete here

//TODO: Notes

- Similar to all those above, a modal with one or more <TextField/>. I will use it
- like a clipboard that is accessible anywhere in the program.
- This will allow user to copy details from one document, collection or project to another.

//TODO: Help and blogs

- The help and blogs on the side of the home project will be in normal .scrb files that will loaded
- with a readonly editor(ie. no toolbars) and will be saved inside ./help folder.
- I will also add blogs from other sources like contribution from our editors and users
- (which they can do with their app)
- This .scrb files will contain
- title- The title of the help or blog
- author- The name of the writer, if it's help, it will be "Tome editor" or the name of the app
- date- The date it was published if it's a blog
- content- The content of the app.
- video- At the top of the editor, there will be a conditional media loader that will play in
- case there is video. I may use normal <video/> tag or perhaps <embed/> youtube links
- so that users can view it on the app and other devices via youtube.
- version- In case it's help, so only help that matches the version of the app will be loaded
- thus excluding possibly obsolete help. So I will ensure that even if the content of help.scrb
- doesn't change, the version must change to match that of the app.

//TODO: Add settings to title bar

- Note, stuff like settings, help and blogs will be rendered via modal or drawers, which will
- not affect tthe workflow of the app, so when you close it, it will return you to where you
- are simply by hiding the modal.
- I will create a store.modal that will accept stuff like
- screen: settings, help or blog
- filename: if it's a blog or help
- generators too will follow the same principle but won't be modals, rather, it would it will
- a section of the browser that is hidden and displayed, like half of it or standard size e.g.
- 300px width

TODO: Change icon

- An icon that scales very well and clearly visible in small sizes. Preferably a pen on a paper

TODO: Aside

- It will contain the following
- Clipboard
- Generator
- Compare

TODO: Create clipboard

- Clipboard: I will add clipboard sign to each document, so if you click it, it would saved inside ./clipboard which maybe perused afterwards by opening the aside(click clipboard icon).
- Also, you may add new clipboard via the aside (new clippy button)
- To prevent abuse, I will limit the number of clipboards to like 10 so that users don't just avoid the app and use the clipboard all the time.
- Help(Clipboard): Clipboard should only be used to store information temporarily and be used sparsely. If you realise that you are re-using certain information alot, perhaps it's time for you to create a new template using these information.
- Also, if you want to check out information from one document to another, use the compare part except if they don't belong to the same project, then you may copy
- If possible, you copy miscellaneous information into one file. This will reduce the number of copy

TODO: Create generator

- Generator: This was the main goal of the app, auto populate values. It will only support default templates of course

TODO: Compare

- Compare: Whenever you open a project, I will add all the list of the files that are inside it(fullDir and name) as a flat list, no nesting. So user can use dropdown or input with data list to view the content of a particular document, either to copy from it or compare with what they already have.

TODO: Remake oddCalculator

- First, I would rename it to something like `random-select`
- Break each functions of oddCalculator into smaller functions so I could use something like this.

```js
import { range, gaussian, choice } from "random-select";
range(0, 100);
gaussian(items, increment); //increment is optional
choice(items, odds); // odds is optional
```
- And finally, push it npm