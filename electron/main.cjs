const { app, BrowserWindow, ipcMain } = require('electron');
const { exec, execFile } = require('child_process');
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

  ipcMain.on('set-right-state', (event, state) => {
    mainWindow.webContents.send('rightChange', state);
    rightWindow.webContents.send('rightChange', state);
  });

  ipcMain.on('set-name', (event, name) => {
    mainWindow.webContents.send('name-changed', name);
    rightWindow.webContents.send('name-changed', name);
  });

  ipcMain.on('set-difficulty', (event, difficulty) => {
    mainWindow.webContents.send('difficultyChange', difficulty);
    rightWindow.webContents.send('difficultyChange', difficulty);
  });

  ipcMain.on('set-scenario', (event, scenario) => {
    mainWindow.webContents.send('scenarioChange', scenario);
    rightWindow.webContents.send('scenarioChange', scenario);
  });

  ipcMain.on('set-scene', (event, scene) => {
    mainWindow.webContents.send('scene-changed', scene);
    rightWindow.webContents.send('scene-changed', scene);
  });

  ipcMain.on('set-town', (event, town) => {
    mainWindow.webContents.send('town-changed', town);
    rightWindow.webContents.send('town-changed', town);
  });

  ipcMain.on('run-practice', (event) => {
    const pythonScriptPath = path.join(__dirname, '../../runnex.py');

    const args = ["easy", 1, 2];

    execFile('python3', [pythonScriptPath, ...args], (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing Python script: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`Python stderr: ${stderr}`);
        return;
      }
      console.log(`Python stdout: ${stdout}`);
    });
  });

  ipcMain.on('run-python', (event,level, scene, town) => {
    console.log(`recieved in electron as level = ${level}, scene = ${scene}, town = ${town}`)
    const pythonScriptPath = path.join(__dirname, '../../runnex.py');

    const args = [level, scene, town];

    execFile('python3', [pythonScriptPath, ...args], (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing Python script: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`Python stderr: ${stderr}`);
        return;
      }
      console.log(`Python stdout: ${stdout}`);
    });
  });

  ipcMain.on('run-python-adv', (event,level, scene, town, weather_param, num_walkers, num_vehicles_foreign, num_vehicles_Indic_TwoWheeler, num_vehicles_Indic_HeavyVehicle, num_vehicles_Indic_ThreeWheeler, num_vehicles_Indic_FourWheeler) => {
    console.log(`recieved in electron as level = ${level}, scene = ${scene}, town = ${town}, weather_param = ${weather_param}, num_walkers = ${num_walkers}, num_vehicles_foreign = ${num_vehicles_foreign}, num_vehicles_Indic_TwoWheeler = ${num_vehicles_Indic_TwoWheeler}, num_vehicles_Indic_HeavyVehicle = ${num_vehicles_Indic_HeavyVehicle}, num_vehicles_Indic_ThreeWheeler = ${num_vehicles_Indic_ThreeWheeler}, num_vehicles_Indic_FourWheeler = ${num_vehicles_Indic_FourWheeler}`)
    const pythonScriptPath = path.join(__dirname, '../../runnex.py');

    const args = [level, scene, town, weather_param, num_walkers, num_vehicles_foreign, num_vehicles_Indic_TwoWheeler, num_vehicles_Indic_HeavyVehicle, num_vehicles_Indic_ThreeWheeler, num_vehicles_Indic_FourWheeler];

    execFile('python3', [pythonScriptPath, ...args], (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing Python script: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`Python stderr: ${stderr}`);
        return;
      }
      console.log(`Python stdout: ${stdout}`);
    });
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
