import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppErrorHandler } from './common/app-error-handler';
import { CakeService } from './services/cake.service';
import { CakeListComponent } from './cake-list/cake-list.component';
import { CakeEditComponent } from './cake-edit/cake-edit.component';
import { CakeShowComponent } from './cake-show/cake-show.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', redirectTo: '/cakes', pathMatch: 'full' },
  { path: 'cakes', component: CakeListComponent},
  { path: 'cakes/new', component: CakeEditComponent},
  { path: 'cakes/:id', component: CakeShowComponent},
  { path: 'cakes/:id/edit', component: CakeEditComponent},
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    CakeListComponent,
    CakeEditComponent,
    CakeShowComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ServiceWorkerModule.register('/cakes/ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    CakeService,
    { provide: ErrorHandler, useClass: AppErrorHandler },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
