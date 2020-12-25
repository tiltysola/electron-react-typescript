import { remote } from 'electron';

export const close = () => {
  const winContent = remote.getCurrentWindow();
  winContent.close();
};

export const minimize = () => {
  const winContent = remote.getCurrentWindow();
  winContent.minimize();
};
