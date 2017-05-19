const { app, BrowserWindow, ipcMain } = require('electron');
const ffmpeg = require('fluent-ffmpeg');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({});
  mainWindow.loadURL(`file://${__dirname}/index.html`);
});

ipcMain.on('video:submit', (event, path) => {
  ffmpeg.ffprobe(path, (err, { format }) => {
    mainWindow.webContents.send('video:metadata', format.duration);
  });
});
