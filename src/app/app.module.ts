import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { arrayListComponent } from './shared/component/arrayList/arrayList.component';
import { studentComponent } from './shared/component/student/student.component';
import { postsCardComponent } from './shared/component/postsCard/postsCard.component';

@NgModule({
  declarations: [
    AppComponent,
    arrayListComponent,
    studentComponent,
    postsCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
