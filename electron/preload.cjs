const {contextBridge, ipcRenderer} = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  sendDifficulty: (difficulty) => ipcRenderer.send('set-difficulty', difficulty),
  onDifficultyChange: (callback) => ipcRenderer.on('difficultyChange',callback),

  sendScenario: (scenario) => ipcRenderer.send('set-scenario', scenario),
  onScenarioChange: (callback) => ipcRenderer.on('scenarioChange',callback),

  sendTown: (town) => ipcRenderer.send('set-town', town),
  onTownChange: (callback) => ipcRenderer.on('town-changed',callback),

  exitApp: () => ipcRenderer.send('exit-app')
});