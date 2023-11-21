import { CanActivateFn, Router } from '@angular/router';

export const usuarioGuard: CanActivateFn = (route, state) => {

  let acceso = localStorage.getItem('login')

  const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');

  if (acceso === 'true' && usuario && usuario.rol === 'admin') {
    console.log('Acceso permitido para el usuario:', usuario.rol);
    return true;
  } else if(acceso === 'true' && usuario && usuario.rol === 'user'){
    console.log('Acceso permitido para el usuario:', usuario.rol);
    return true;
  }else{
    console.log('Acceso denegado. Usuario:', usuario);
    return false;
  }
  
};
