import { BrowserWindow, BrowserWindowConstructorOptions } from 'electron';
import { isDevelopment } from './isDevelopment';

export interface WindowProps {
  url: string;
  options: BrowserWindowConstructorOptions | undefined;
  closed: () => void;
}

// 创建渲染窗口函数
export const createWindow = ({ url, options, closed }: WindowProps) => {
  // 创建一个渲染窗口
  const window = new BrowserWindow(options);

  // 判断是否为开发环境，若是则打开开发者工具
  if (isDevelopment) {
    window.webContents.openDevTools();
  }

  // 加载窗口
  window.loadURL(url);

  // 当窗口关闭后，将window置为null
  window.on('closed', closed);

  // 当devtools打开后，将焦点置为窗口
  window.webContents.on('devtools-opened', () => {
    window.focus();
    setImmediate(() => {
      window.focus();
    });
  });

  // 将窗口传出
  return window;
};
