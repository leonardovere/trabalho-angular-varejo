import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoAlterarNotaComponent } from './dialogo-alterar-nota.component';

describe('DialogoAlterarNotaComponent', () => {
  let component: DialogoAlterarNotaComponent;
  let fixture: ComponentFixture<DialogoAlterarNotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogoAlterarNotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoAlterarNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
