import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoProdutoComponent } from './dialogo-produto.component';

describe('DialogoProdutoComponent', () => {
  let component: DialogoProdutoComponent;
  let fixture: ComponentFixture<DialogoProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogoProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
