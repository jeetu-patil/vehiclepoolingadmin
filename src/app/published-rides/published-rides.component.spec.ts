import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishedRidesComponent } from './published-rides.component';

describe('PublishedRidesComponent', () => {
  let component: PublishedRidesComponent;
  let fixture: ComponentFixture<PublishedRidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishedRidesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishedRidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
