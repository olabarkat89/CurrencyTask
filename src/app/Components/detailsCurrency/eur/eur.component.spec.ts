import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EURComponent } from './eur.component';

describe('EURComponent', () => {
  let component: EURComponent;
  let fixture: ComponentFixture<EURComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EURComponent]
    });
    fixture = TestBed.createComponent(EURComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
