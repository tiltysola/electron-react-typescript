import { remote } from 'electron';

export const close = () => {
  const winContent = remote.getCurrentWindow();
  winContent.close();
};
