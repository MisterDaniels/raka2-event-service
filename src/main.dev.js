const { app, BrowserWindow, screen, net } = require('electron');
require('dotenv').config();

function createPrimaryWindow() {

    var screenDimensions = screen.getPrimaryDisplay().size;

    let win = new BrowserWindow({
        width: screenDimensions.width,
        height: screenDimensions.height,
        frame: false,
        webPreferences: {
            devTools: true
        }
    });

    win.loadFile('./views/index.html');

    win.webContents.openDevTools();

    win.show();
}

app.whenReady().then(createPrimaryWindow);