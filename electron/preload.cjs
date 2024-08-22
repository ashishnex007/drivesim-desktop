const {contextBridge, ipcRenderer} = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  sendRightState: (state) => ipcRenderer.send('set-right-state', state),
  onRightStateChange: (callback) => ipcRenderer.on('rightChange', callback),

  sendName: (name) => ipcRenderer.send('set-name', name),
  onNameChange: (callback) => ipcRenderer.on('name-changed',callback),

  sendDifficulty: (difficulty) => ipcRenderer.send('set-difficulty', difficulty),
  onDifficultyChange: (callback) => ipcRenderer.on('difficultyChange',callback),

  sendScenario: (scenario) => ipcRenderer.send('set-scenario', scenario),
  onScenarioChange: (callback) => ipcRenderer.on('scenarioChange',callback),

  sendTown: (town) => ipcRenderer.send('set-town', town),
  onTownChange: (callback) => ipcRenderer.on('town-changed',callback),

  sendScene: (scene) => ipcRenderer.send('set-scene', scene),
  onSceneChange: (callback) => ipcRenderer.on('scene-changed',callback),

  runPractice: () => ipcRenderer.send('run-practice'),
  runPython: (level, scene, town) => ipcRenderer.send('run-python', level, scene, town),
  runPythonAdv: (level, scene, town, weather_param, num_walkers, num_vehicles_foreign, num_vehicles_Indic_TwoWheeler, num_vehicles_Indic_HeavyVehicle, num_vehicles_Indic_ThreeWheeler, num_vehicles_Indic_FourWheeler) => ipcRenderer.send('run-python-adv', level, scene, town, weather_param, num_walkers, num_vehicles_foreign, num_vehicles_Indic_TwoWheeler, num_vehicles_Indic_HeavyVehicle, num_vehicles_Indic_ThreeWheeler, num_vehicles_Indic_FourWheeler),

  exitApp: () => ipcRenderer.send('exit-app')
});