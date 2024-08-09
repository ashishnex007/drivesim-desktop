const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let leftWindow, mainWindow, rightWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1920, height: 1080, x: 1920, y: 0, fullscreen: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
      contextIsolation: true,
      enableRemoteModule: false,
      nodeIntegration: false,
    },
  });

  
  // Open left and right windows
  leftWindow = new BrowserWindow({
    width: 1920, height: 1080, x: 0, y: 0, fullscreen: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
      contextIsolation: true,
      enableRemoteModule: false,
      nodeIntegration: false,
    },
  });
  
  rightWindow = new BrowserWindow({ 
    width: 1920, height: 1080, x: 3840, y: 0, fullscreen: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
      contextIsolation: true,
      enableRemoteModule: false,
      nodeIntegration: false,
    },
  });
  
  mainWindow.loadURL('http://localhost:5173');
  leftWindow.loadURL('http://localhost:5173/left');
  rightWindow.loadURL('http://localhost:5173/right');
}

app.whenReady().then(()=> {
  createWindow();

  ipcMain.on('set-difficulty', (event, difficulty) => {
    mainWindow.webContents.send('difficulty-changed', difficulty);
    leftWindow.webContents.send('difficulty-changed', difficulty);
    rightWindow.webContents.send('difficulty-changed', difficulty);
  });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
  
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
