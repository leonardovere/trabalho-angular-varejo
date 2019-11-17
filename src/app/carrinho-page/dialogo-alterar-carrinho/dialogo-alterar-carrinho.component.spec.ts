import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoAlterarCarrinhoComponent } from './dialogo-alterar-carrinho.component';

describe('DialogoAlterarCarrinhoComponent', () => {
  let component: DialogoAlterarCarrinhoComponent;
  let fixture: ComponentFixture<DialogoAlterarCarrinhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogoAlterarCarrinhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoAlterarCarrinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
