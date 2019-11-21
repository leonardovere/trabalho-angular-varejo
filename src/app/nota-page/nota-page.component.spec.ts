import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaPageComponent } from './nota-page.component';

describe('NotaPageComponent', () => {
  let component: NotaPageComponent;
  let fixture: ComponentFixture<NotaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
