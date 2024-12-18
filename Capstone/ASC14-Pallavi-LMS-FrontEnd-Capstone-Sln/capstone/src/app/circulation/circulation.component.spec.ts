import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirculationComponent } from './circulation.component';

describe('CirculationComponent', () => {
  let component: CirculationComponent;
  let fixture: ComponentFixture<CirculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CirculationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CirculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
