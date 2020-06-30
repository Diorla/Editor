import React from "react";
import ReactDOM from "react-dom";
import App from "./scripts/App";
//TODO: Add unique context menu to different pages

//TODO: Add help menu
/**
 * I will add a help icon at the to titlebar, which will toggle store.showHelp
 * On each browser, there will be a modal/boolean page that will render based
 * on the value of store.showHelp
 * For example, store.showHelp ? <Help/> : <Project>.
 * This will enable tailored help especially for the documents e.g.
 * <Character />, <Creature /> etc.
 */

//TODO: Delete
/**
 * This will be similar to help icon above. It will check for active directory from
 * store.project in the following order and determine which one to delete
 * itemDir: Delete the document and change screen to "Folder"
 * CollectionDir: Delete the collection and change screen to "Project"
 * Project: Delete the project and go to home screen
 * Blog: Nothing to delete here
 */

//TODO: Notes
/**
 * Similar to all those above, a modal with one or more <TextField/>. I will use it
 * like a clipboard that is accessible anywhere in the program.
 * This will allow user to copy details from one document, collection or project to another.
 */

//TODO: Help and blogs
/**
 * The help and blogs on the side of the home project will be in normal .scrb files that will loaded 
 * with a readonly editor(ie. no toolbars) and will be saved inside ./help folder. 
 * I will also add blogs from other sources like contribution from our editors and users 
 * (which they can do with their app)
 * This .scrb files will contain
 * title- The title of the help or blog
 * author- The name of the writer, if it's help, it will be "Tome editor" or the name of the app
 * date- The date it was published if it's a blog
 * content- The content of the app.
 * video- At the top of the editor, there will be a conditional media loader that will play in
 * case there is video. I may use normal <video/> tag or perhaps <embed/> youtube links
 * so that users can view it on the app and other devices via youtube.
 * version- In case it's help, so only help that matches the version of the app will be loaded
 * thus excluding possibly obsolete help. So I will ensure that even if the content of help.scrb 
 * doesn't change, the version must change to match that of the app.
 */

//TODO: Add settings to title bar
/**
 * Note, stuff like settings, help and blogs will be rendered via modal or drawers, which will
 * not affect tthe workflow of the app, so when you close it, it will return you to where you 
 * are simply by hiding the modal. 
 * I will create a store.modal that will accept stuff like
 * screen: settings, help or blog
 * filename: if it's a blog or help
 * generators too will follow  the same principle but won't be modals, rather, it would it will
 * a section of the browser that is hidden and displayed, like half of it or standard size e.g.
 * 300px width
 */
ReactDOM.render(<App />, document.getElementById("app"));
