import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/adminCoponent/admin/admin.component';
import { CreateStudentComponent } from './components/adminCoponent/create-student/create-student.component';
import { ListOfUsersComponent } from './components/adminCoponent/list-of-users/list-of-users.component';
import { MainComponent } from './components/main/main.component';
import { UserReservationsComponent } from './components/user-reservations/user-reservations.component';
import { ReservationComponent } from './reservation/reservation.component';

const routes: Routes = [
  { path: 'newStudent-component', component: CreateStudentComponent },
  {
    path: 'admin-component',
    component: AdminComponent,
    children: [
      {
        path: 'createStudent',
        component: CreateStudentComponent,
      },
      {
        path: 'listOfUsers',
        component: ListOfUsersComponent,
      },
    ],
  },

  { path: 'list-of-students', component: ListOfUsersComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'userReservations', component: UserReservationsComponent },
  { path: '', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
