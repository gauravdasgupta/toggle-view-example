import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FsToggleTemplateComponent } from './fs-toggle-template.component';

describe('FsToggleTemplateComponent', () => {
  let component: FsToggleTemplateComponent;
  let fixture: ComponentFixture<FsToggleTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FsToggleTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FsToggleTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
