import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './component/home.component';
import { BoardComponent } from './component/board/board.component';
import { BoardService } from './service/rest-api/board.service';
import { HttpClientModule } from '@angular/common/http';
import { ApiValidationService } from './service/rest-api/common/api-validation.service';
import { BoardWriteComponent } from './component/board/board-write.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BoardViewComponent } from './component/board/board-view.component';
import { BoardModifyComponent } from './component/board/board-modify.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BoardComponent,
    BoardWriteComponent,
    BoardViewComponent,
    BoardModifyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    BoardService,
    ApiValidationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
