'use strict';

const electron = require('electron');
const { ipcMain } = require('electron');
const { client } = require('electron-connect');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const nativeImage = electron.nativeImage;

const path = require('path');
// const config = require(path.join('file://', __dirname, '../assets/config.json'));
const image = nativeImage.createFromPath(path.join('file://', __dirname, 'assets/images/logo.png'));

let mainWindow = null;
const debugMode = true;
const publishName = 'Processes Of Typical Bank';

// app.setName(config.publishName);
app.setName(publishName);

function initMainListener() {
  ipcMain.on('ELECTRON_BRIDGE_HOST', (event, msg) => {
    console.log('msg received', msg);
    if (msg === 'ping') {
      event.sender.send('ELECTRON_BRIDGE_CLIENT', 'pong');
    }
  });
}

if (process.platform === 'darwin'){
  app.dock.setIcon(image);

}

function createWindow() {

  let size = electron.screen.getPrimaryDisplay().workAreaSize;

  mainWindow = new BrowserWindow({
    x: 0,
    y: 0,
    width: size.width,
    height: size.height,
    frame: true,
    resizable: true,
    // title: config.publishName,
    title: publishName,
    icon: image,
  });

  mainWindow.loadURL(path.join('file://', __dirname, '/index.html'));

  if (debugMode) {
    // Open the DevTools
    mainWindow.webContents.openDevTools();
  }

  mainWindow.on('closed', function () {
    mainWindow = null;
  });

  // initMainListener();
  //
  // client.create(mainWindow);
}

try {
  app.on('ready', createWindow);

  app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', function () {
    if (mainWindow === null) {
      createWindow();
    }
  });
}
catch (e) {
  console.log(e);
}
