import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/interfaces';
import {
  DeleteUser,
  GetUser,
  SetSingleUser,
  UpdateStateUser,
  UpdateUser,
} from 'src/app/store/actions/user.action';
import { UserState } from 'src/app/store/state/user.state';
import { userService } from 'src/app/user.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css'],
})
export class UserViewComponent implements OnInit {
  users = [];
  stateUser = [];

  @Select(UserState.getUserList) $stateUser: Observable<any>;
  id: any;
  name: any;
  pass: any;

  constructor(private route: Router, private store: Store) {}

  ngOnInit() {
    // this.store.dispatch(new GetUser());
    // this.$stateUser.subscribe((res) => {
    //   console.log('state user data>> responce >>> ', res);
    //   this.users = res;
    // });
  }
  onAddUser() {
    this.route.navigate(['add']);
  }

  ondelete(userId: number) {
    this.store.dispatch(new DeleteUser(userId));
    this.route.navigate(['view']);
  }
  onSingleUser(id: any) {
    this.store.dispatch(new SetSingleUser(id));
    this.route.navigate(['/single']);
  }
  onUpdate(userId: number, username: string, userpass: string) {
    let user: IUser = {
      id: userId,
      name: username,
      password: userpass,
    };
    this.store.dispatch(new UpdateStateUser(user));
    // this.store.dispatch(new UpdateUser(user));
    this.route.navigate(['add']);
  }
}
