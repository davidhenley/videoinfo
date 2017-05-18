const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
  const main = new BrowserWindow({});

  main.loadURL(`file://${__dirname}/index.html`);
});
