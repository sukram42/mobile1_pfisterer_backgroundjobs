cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-background-task.BackgroundTask",
    "file": "plugins/cordova-plugin-background-task/www/backgroundtask.js",
    "pluginId": "cordova-plugin-background-task",
    "clobbers": [
      "backgroundtask"
    ]
  },
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-background-mode.BackgroundMode",
    "file": "plugins/cordova-plugin-background-mode/www/background-mode.js",
    "pluginId": "cordova-plugin-background-mode",
    "clobbers": [
      "cordova.plugins.backgroundMode",
      "plugin.backgroundMode"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-background-task": "0.2.0",
  "cordova-plugin-device": "2.0.1",
  "cordova-plugin-background-mode": "0.7.2"
};
// BOTTOM OF METADATA
});