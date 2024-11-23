import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RcViewerComponent } from './rc-viewer.component';

describe('RcViewerComponent', () => {
  let component: RcViewerComponent;
  let fixture: ComponentFixture<RcViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RcViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RcViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
