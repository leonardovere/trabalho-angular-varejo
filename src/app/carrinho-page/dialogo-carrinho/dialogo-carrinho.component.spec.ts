import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoCarrinhoComponent } from './dialogo-carrinho.component';

describe('DialogoCarrinhoComponent', () => {
  let component: DialogoCarrinhoComponent;
  let fixture: ComponentFixture<DialogoCarrinhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogoCarrinhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoCarrinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
