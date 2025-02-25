import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionsComponent } from './expansions.component';

describe('ExpansionsComponent', () => {
  let component: ExpansionsComponent;
  let fixture: ComponentFixture<ExpansionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpansionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpansionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
