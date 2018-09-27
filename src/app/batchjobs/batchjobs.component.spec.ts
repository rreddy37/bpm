import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchjobsComponent } from './batchjobs.component';

describe('BatchjobsComponent', () => {
  let component: BatchjobsComponent;
  let fixture: ComponentFixture<BatchjobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchjobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
