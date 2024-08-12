const {contextBridge, ipcRenderer} = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  sendDifficulty: (difficulty) => ipcRenderer.send('set-difficulty', difficulty),
  onDifficultyChange: (callback) => ipcRenderer.on('difficulty-changed',callback)
});

contextBridge.exposeInMainWorld('electronAPI', {
  sendTown: (town) => ipcRenderer.send('set-town', town),
  onTownChange: (callback) => ipcRenderer.on('town-changed',callback)
});

contextBridge.exposeInMainWorld('electronAPI', {
  exitApp: () => ipcRenderer.send('exit-app')
});