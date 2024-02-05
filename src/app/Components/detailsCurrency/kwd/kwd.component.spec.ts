import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KWDComponent } from './kwd.component';

describe('KWDComponent', () => {
  let component: KWDComponent;
  let fixture: ComponentFixture<KWDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KWDComponent]
    });
    fixture = TestBed.createComponent(KWDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
