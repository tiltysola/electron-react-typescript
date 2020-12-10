import { shell } from 'electron';

export const openExternal = (url: string) => {
  shell.openExternal(url);
};
