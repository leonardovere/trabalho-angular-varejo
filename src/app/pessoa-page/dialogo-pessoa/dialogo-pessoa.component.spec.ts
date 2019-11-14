import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoPessoaComponent } from './dialogo-pessoa.component';

describe('DialogoPessoaComponent', () => {
  let component: DialogoPessoaComponent;
  let fixture: ComponentFixture<DialogoPessoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogoPessoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
