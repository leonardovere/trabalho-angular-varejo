import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoAlterarProdutoComponent } from './dialogo-alterar-produto.component';

describe('DialogoAlterarProdutoComponent', () => {
  let component: DialogoAlterarProdutoComponent;
  let fixture: ComponentFixture<DialogoAlterarProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogoAlterarProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoAlterarProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
