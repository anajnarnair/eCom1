import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wcard } from './wcard';

describe('Wcard', () => {
  let component: Wcard;
  let fixture: ComponentFixture<Wcard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Wcard],
    }).compileComponents();

    fixture = TestBed.createComponent(Wcard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
