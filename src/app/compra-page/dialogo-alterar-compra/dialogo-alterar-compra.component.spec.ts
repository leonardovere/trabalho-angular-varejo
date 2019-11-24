import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoAlterarCompraComponent } from './dialogo-alterar-compra.component';

describe('DialogoAlterarCompraComponent', () => {
  let component: DialogoAlterarCompraComponent;
  let fixture: ComponentFixture<DialogoAlterarCompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogoAlterarCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoAlterarCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
