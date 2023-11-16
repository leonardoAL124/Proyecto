import { CanActivateFn } from '@angular/router';

export const visitanteGuard: CanActivateFn = (route, state) => {
  return true;
};
