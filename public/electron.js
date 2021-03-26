const { app, BrowserWindow } = require('electron')

const path = require('path')
const isDev = require('electron-is-dev')

let win

function creatWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadURL(isDev ? 'http://localhost:3000' : `file://${path.resolve(__dirname, '..', 'build', 'index.html')}`, )

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', creatWindow)

app.on('window-all-closed', () => {
  if(process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if(win === null) {
    creatWindow()
  }
})