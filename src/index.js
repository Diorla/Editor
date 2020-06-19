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
ReactDOM.render(<App />, document.getElementById("app"));