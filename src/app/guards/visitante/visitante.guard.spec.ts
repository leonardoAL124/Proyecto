import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { visitanteGuard } from './visitante.guard';

describe('visitanteGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => visitanteGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
