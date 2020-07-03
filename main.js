const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    minHeight: 600,
    minWidth: 800,
    // TODO: Change icon
    /**
     * An icon that scales very well and clearly visible in small sizes. Preferably a pen on a paper
     */
    icon: path.join(__dirname, "./assets/books.ico"),
    webPreferences: {
      nodeIntegration: true,
    },
    title: "Tome Editor",
    devTools: false,
    show: false,
    minWidth: 800,
    minHeight: 600,
  });

  // hide menu bar
  mainWindow.setMenuBarVisibility(false);

  // and load the index.html of the app.
  mainWindow.loadFile("index.html");

  // Display app only after all the components is loaded
  mainWindow.once("ready-to-show", () => {
    mainWindow.show();
  });
}

app.whenReady().then(createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
