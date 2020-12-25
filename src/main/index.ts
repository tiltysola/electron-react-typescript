import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import { format as formatUrl } from 'url';

import { isDevelopment, createWindow, WindowProps } from './utils';

// 申明主渲染窗口
let mainWindow: BrowserWindow | null = null;
let url: string | null = null;
if (isDevelopment) {
  url = `http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`;
} else {
  url = formatUrl({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file',
    slashes: true,
  });
}
const mainWindowOptions: WindowProps = {
  url,
  options: {
    width: 600,
    height: 412,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
    },
  },
  closed: () => {
    mainWindow = null;
  },
};

// 当所有窗口关闭后退出程序
app.on('window-all-closed', () => {
  // 对于macOS用户来说，点击关闭并不意味着退出程序，而是在托盘休眠
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // 对于macOS用户来说，当所有窗口关闭后，应该创建一个新的窗口
  if (mainWindow === null) {
    mainWindow = createWindow(mainWindowOptions);
  }
});

// 当Electron准备完毕后创建主窗口
app.on('ready', () => {
  mainWindow = createWindow(mainWindowOptions);
});
