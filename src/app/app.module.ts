import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FsImageGalleryViewComponent } from './fs-image-gallery-view/fs-image-gallery-view.component';
import { FsImageTabularViewComponent } from './fs-image-tabular-view/fs-image-tabular-view.component';
import { FsToggleTemplateComponent } from './fs-toggle-template/fs-toggle-template.component';

@NgModule({
  declarations: [
    AppComponent,
    FsImageGalleryViewComponent,
    FsImageTabularViewComponent,
    FsToggleTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
