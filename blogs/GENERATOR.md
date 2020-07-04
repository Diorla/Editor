# Managing memory
[header](#header)
There will be 3 different type of memory

- State
- Persistent
- File

## State

These are memory that will exist while using the app. Users will lose it if/when they close the app. I will use `redux` to manage the current state of the app, this includes

- Root directory of the folder we are working on
- The folders and files inside it
- The identification (full dir name and base name) and contents of the active file
  - If possible, I may extend this to tabs
- If the current content of the active file is different from the one last saved
  - I could simply add a boolean value like (isChanged) whenever someone start typing.
  - And onBlur, I would compare the value of the fields and the initial value, if it is different, `isChanged=true`
  - Whenever user saves their file, `isChanged=false`
- `isChanged` will be important whenever a user wants to close active file(or navigate away from it).
  - It will show a blocking alert, asking them to save or discard or changes.

## Persistent

These is basically a backup for the state in case the user closes the app and perhaps are still working on some projects or have some files unsaved. Hence, I will routinely backup the the states.

- I will use `localforage` for this, which will back up inside `indexeddb` or `localstorage` depending on the system.
- It will essentially back up the entire state e.g. `localforage.setItem("tmp", store.getState())`.
- I will back up data at keypoints of the app, where I know data has changed, but not always to prevent negative effect on the data.
- Such keypoints includes
  - Selecting or creating new project
  - Selecting or creating new folder/file
  - `onBlur` function on an input is triggered, and the initialValue of that field is different from the currentValue (this will also trigger the `isChanged` section if it's the first time)
- So whenever an app is closed, the data will be saved inside the localforage
- And when a user reopens the app, we first check the localforage for `tmp`, and if it's not empty, we repopulate the store with the data.
  - So that the app will look just like it was when user closed the app
- I could also use `localforage` to store other app data like users preferences e.g. `prefered theme`, `username`, `personal profile` etc.
  - And the good news is that all this will only create minimal memories (probably less than 1mb) so there is little or no risk of auto deletion of the app data, except of course if user used an external app like `avast` to wipe the data
  - And this won't be our fault.
# header
## File

These are the more permanent content of the app. They are actual `.scrb` files that are saved on the system. Their content will be updated whenever a user click the save icon or `ctrl s`.

# Snippets

## Shorts

```js
// Ctrl S
globalShortcut.register("CommandOrControl+S", () => {
  const { file, content } = store.getState();
  jsonfile.writeFile(file, content);
  console.log("file saved");
});
```

# More

> These are things that is to be added.

- Make `data` link to external json files
