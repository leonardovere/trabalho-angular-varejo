import { ImagemPageComponent } from "./imagem-page.component";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { async } from 'q';

describe('ImagemPageComponent', () => {
    let component: ImagemPageComponent;
    let fixture: ComponentFixture<ImagemPageComponent>;
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ ImagemPageComponent ]
      })
      .compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(ImagemPageComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });