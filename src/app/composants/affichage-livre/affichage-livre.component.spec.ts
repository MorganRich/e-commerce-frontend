import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageLivreComponent } from './affichage-livre.component';

describe('AffichageLivreComponent', () => {
  let component: AffichageLivreComponent;
  let fixture: ComponentFixture<AffichageLivreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichageLivreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichageLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
