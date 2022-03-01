import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserViewComponent } from './User/user-view/user-view.component';
import { UserAddComponent } from './User/user-add/user-add.component';
import { SingleUserDetailComponent } from './User/single-user-detail/single-user-detail.component';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserState } from './store/state/user.state';

const appRoutes: Routes = [
  { path: '', component: UserViewComponent },
  { path: 'add', component: UserAddComponent },
  { path: 'view', component: UserViewComponent },
  { path: 'single', component: SingleUserDetailComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    UserViewComponent,
    UserAddComponent,
    SingleUserDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgxsModule.forRoot([UserState]),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
