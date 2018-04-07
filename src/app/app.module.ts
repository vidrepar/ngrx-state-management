import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { TalksAndFiltersComponent } from './talks-and-filters/talks-and-filters.component';
import { TalkDetailsComponent } from './talk-details/talk-details.component';
import {BackendService} from './backend.service';
import {WatchService} from './watch.service';

@NgModule({
  declarations: [
    AppComponent,
    TalksAndFiltersComponent,
    TalkDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'talks', component: TalksAndFiltersComponent },
      { path: 'talks/:id', component: TalkDetailsComponent },
    ])
  ],
  providers: [
    BackendService,
    WatchService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
