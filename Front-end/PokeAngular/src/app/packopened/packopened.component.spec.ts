import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackopenedComponent } from './packopened.component';

describe('PackopenedComponent', () => {
  let component: PackopenedComponent;
  let fixture: ComponentFixture<PackopenedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackopenedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackopenedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
