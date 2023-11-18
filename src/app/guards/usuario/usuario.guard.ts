import { CanActivateFn } from '@angular/router';

export const usuarioGuard: CanActivateFn = (route, state) => {

  let acceso = localStorage.getItem('login')

  if (acceso === "true") {
    return true;  
  }else{
    return false;
  }
  
};
