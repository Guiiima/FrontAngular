import { TestBed } from '@angular/core/testing';

import { EditoraAfiliadaService } from './editora-afiliada.service';

describe('EditoraAfiliadaService', () => {
  let service: EditoraAfiliadaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditoraAfiliadaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
