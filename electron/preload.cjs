const {contextBridge, ipcRenderer} = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  sendDifficulty: (difficulty) => ipcRenderer.send('set-difficulty', difficulty),
  onDifficultyChange: (callback) => ipcRenderer.on('difficulty-changed',callback)
});
  