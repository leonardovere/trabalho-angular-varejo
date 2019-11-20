import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoCompraComponent } from './dialogo-compra.component';

describe('DialogoCompraComponent', () => {
  let component: DialogoCompraComponent;
  let fixture: ComponentFixture<DialogoCompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogoCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
