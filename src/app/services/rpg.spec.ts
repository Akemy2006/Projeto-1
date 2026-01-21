import { TestBed } from '@angular/core/testing';

import { Rpg } from './rpg';

describe('Rpg', () => {
  let service: Rpg;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Rpg);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
