const {contextBridge, ipcRenderer} = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  sendRightState: (state) => ipcRenderer.send('set-right-state', state),
  onRightStateChange: (callback) => ipcRenderer.on('rightChange', callback),

  sendDifficulty: (difficulty) => ipcRenderer.send('set-difficulty', difficulty),
  onDifficultyChange: (callback) => ipcRenderer.on('difficultyChange',callback),

  sendScenario: (scenario) => ipcRenderer.send('set-scenario', scenario),
  onScenarioChange: (callback) => ipcRenderer.on('scenarioChange',callback),

  sendTown: (town) => ipcRenderer.send('set-town', town),
  onTownChange: (callback) => ipcRenderer.on('town-changed',callback),

  runPython: (level, scene, town) => ipcRenderer.send('run-python', level, scene, town),

  exitApp: () => ipcRenderer.send('exit-app')
});