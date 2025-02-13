import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterAngularComponent } from './footer-angular.component';

describe('FooterAngularComponent', () => {
  let component: FooterAngularComponent;
  let fixture: ComponentFixture<FooterAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterAngularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
