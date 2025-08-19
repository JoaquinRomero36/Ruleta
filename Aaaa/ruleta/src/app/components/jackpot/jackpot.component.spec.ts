import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JackpotComponent } from './jackpot.component';

describe('JackpotComponent', () => {
  let component: JackpotComponent;
  let fixture: ComponentFixture<JackpotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JackpotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JackpotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
