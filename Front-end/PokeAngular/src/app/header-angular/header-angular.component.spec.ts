import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAngularComponent } from './header-angular.component';

describe('HeaderAngularComponent', () => {
  let component: HeaderAngularComponent;
  let fixture: ComponentFixture<HeaderAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderAngularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
