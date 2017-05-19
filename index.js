const { app, BrowserWindow, ipcMain } = require('electron');
const ffmpeg = require('fluent-ffmpeg');

app.on('ready', () => {
  const main = new BrowserWindow({});

  main.loadURL(`file://${__dirname}/index.html`);
});

ipcMain.on('video:submit', (event, path) => {
  ffmpeg.ffprobe(path, (err, { format }) => {
    console.log(`Your file is ${format.duration} seconds!`);
  });
});
