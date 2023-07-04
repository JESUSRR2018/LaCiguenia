import { TestBed } from '@angular/core/testing';

import { ValidacionLoginService } from './validacion-login.service';

describe('ValidacionLoginService', () => {
  let service: ValidacionLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidacionLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
