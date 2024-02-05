import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EGPComponent } from './egp.component';

describe('EGPComponent', () => {
  let component: EGPComponent;
  let fixture: ComponentFixture<EGPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EGPComponent]
    });
    fixture = TestBed.createComponent(EGPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
