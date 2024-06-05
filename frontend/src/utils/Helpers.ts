import { v4 as uuid } from 'uuid';

const datalayer:any[] = []

export function gtag() {

  if(typeof window !== 'undefined'){
    window.dataLayer = window.dataLayer || [];
    if(datalayer.length < 1){
      window.dataLayer.push(...datalayer)
      datalayer.splice(0, Infinity)
    }
    window.dataLayer.push(arguments);
  }
  datalayer.push(arguments)

}

export const generateRandomId = () => {
  return String(uuid());
};

export const isActiveLink = (menuPath: string, routePath: string) => {
  if (menuPath && routePath) {
    return menuPath.replace(/\/\d+/, '') === routePath.replace(/\/\d+/, '');
  }
  return false
};
