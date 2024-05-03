import { v4 as uuid } from 'uuid';


export const generateRandomId = () => {
  return String(uuid());
};

export const isActiveLink = (menuPath: string, routePath: string) => {
  if (menuPath && routePath) {
    return menuPath.replace(/\/\d+/, '') === routePath.replace(/\/\d+/, '');
  }
  return false
};
