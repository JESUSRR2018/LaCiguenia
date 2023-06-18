import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterEndpageComponent } from './footer-endpage.component';

describe('FooterEndpageComponent', () => {
  let component: FooterEndpageComponent;
  let fixture: ComponentFixture<FooterEndpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterEndpageComponent]
    });
    fixture = TestBed.createComponent(FooterEndpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
