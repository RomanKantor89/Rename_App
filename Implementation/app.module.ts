import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { FilenameBuilderComponent } from './filename-builder/filename-builder.component';
import { PreviewBigComponent } from './preview-big/preview-big.component';
import { StringComponent } from './string/string.component';
import { FileDataComponent } from './file-data/file-data.component';
import { GpsInfoComponent } from './gps-info/gps-info.component';
import { DateComponent } from './date/date.component';
import { IncrementNumberComponent } from './increment-number/increment-number.component';
import { OriginalNameComponent } from './original-name/original-name.component';
import { AngeryMaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeviceDetectorModule } from 'ngx-device-detector';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    FilenameBuilderComponent,
    PreviewBigComponent,
    StringComponent,
    FileDataComponent,
    GpsInfoComponent,
    DateComponent,
    IncrementNumberComponent,
    OriginalNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    FormsModule,
    AngeryMaterialModule,
    BrowserAnimationsModule,
    DeviceDetectorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
