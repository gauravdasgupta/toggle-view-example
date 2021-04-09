import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FsImageGalleryViewComponent } from './fs-image-gallery-view.component';

describe('FsImageGalleryViewComponent', () => {
  let component: FsImageGalleryViewComponent;
  let fixture: ComponentFixture<FsImageGalleryViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FsImageGalleryViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FsImageGalleryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
