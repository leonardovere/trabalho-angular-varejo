import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoImagemComponent } from './dialogo-imagem.component';

describe('DialogoImagemComponent', () => {
  let component: DialogoImagemComponent;
  let fixture: ComponentFixture<DialogoImagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogoImagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoImagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
