import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidearComponent } from './sidear.component';

describe('SidearComponent', () => {
  let component: SidearComponent;
  let fixture: ComponentFixture<SidearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
