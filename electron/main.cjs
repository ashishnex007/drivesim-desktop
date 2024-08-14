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

ipcMain.on('exit-app', () => {
  app.quit();
});

app.whenReady().then(()=> {
  createWindow();

  ipcMain.on('set-difficulty', (event, difficulty) => {
    mainWindow.webContents.send('difficultyChange', difficulty);
    leftWindow.webContents.send('difficultyChange', difficulty);
    rightWindow.webContents.send('difficultyChange', difficulty);
  });

  ipcMain.on('set-scenario', (event, scenario) => {
    mainWindow.webContents.send('scenarioChange', scenario);
    leftWindow.webContents.send('scenarioChange', scenario);
    rightWindow.webContents.send('scenarioChange', scenario);
  });

  ipcMain.on('set-town', (event, town) => {
    mainWindow.webContents.send('town-changed', town);
    leftWindow.webContents.send('town-changed', town);
    rightWindow.webContents.send('town-changed', town);
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
