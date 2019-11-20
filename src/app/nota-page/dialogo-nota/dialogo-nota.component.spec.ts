import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoNotaComponent } from './dialogo-nota.component';

describe('DialogoNotaComponent', () => {
  let component: DialogoNotaComponent;
  let fixture: ComponentFixture<DialogoNotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogoNotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
