import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReservationComponent } from './reservation/reservation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './components/adminCoponent/admin/admin.component';
import { CreateStudentComponent } from './components/adminCoponent/create-student/create-student.component';
import { CommonTabsComponent } from './components/common/common-tabs/common-tabs.component';
import { ListOfUsersComponent } from './components/adminCoponent/list-of-users/list-of-users.component';
import { MainComponent } from './components/main/main.component';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { NavBarComponent } from './components/common/nav-bar/nav-bar.component';
import { UserPanelComponent } from './components/user-panel/user-panel.component';
import { UserReservationsComponent } from './components/user-reservations/user-reservations.component';
import { ListOfReservationsComponent } from './components/adminCoponent/list-of-reservations/list-of-reservations.component';
import { NotificationComponent } from './components/common/notification/notification.component';
@NgModule({
  declarations: [
    AppComponent,
    ReservationComponent,
    AdminComponent,
    CreateStudentComponent,
    CommonTabsComponent,
    ListOfUsersComponent,
    MainComponent,
    NavBarComponent,
    UserPanelComponent,
    UserReservationsComponent,
    ListOfReservationsComponent,
    NotificationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    NgbModule,
    HttpClientModule,
    NgxBootstrapIconsModule.pick(allIcons),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
