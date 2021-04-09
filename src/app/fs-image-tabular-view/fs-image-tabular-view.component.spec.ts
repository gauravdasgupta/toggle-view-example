import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FsImageTabularViewComponent } from './fs-image-tabular-view.component';

describe('FsImageTabularViewComponent', () => {
  let component: FsImageTabularViewComponent;
  let fixture: ComponentFixture<FsImageTabularViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FsImageTabularViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FsImageTabularViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
