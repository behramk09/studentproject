import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { IUser } from 'src/app/interfaces';
import { AddUser, UpdateUser } from 'src/app/store/actions/user.action';
import { UserState } from 'src/app/store/state/user.state';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css'],
})
export class UserAddComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  @Select(UserState.updateduser) updateUser$: Observable<any>;
  btnName: string = 'Submit';
  name: string;
  pass: string;
  id: any = undefined;
  constructor(private route: Router, private store: Store) {}

  ngOnInit(): void {
    console.log('ngOnInIt() hoooook ................................');
    this.subscription = this.updateUser$.subscribe((res: IUser) => {
      console.log('Upppresponse  ........>>>>', res);
      if (res) {
        this.id = res.id;
        this.name = res.name;
        this.pass = res.password;
        this.btnName = 'Update';
      } else {
        this.id = null;
        this.name = null;
        this.pass = null;
        this.btnName = 'Add';
      }
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  OnsubmitData() {
    let user: IUser = {
      id: this.id,
      name: this.name,
      password: this.pass,
    };
    if (!this.id) {
      this.store.dispatch(new AddUser(user));
    } else {
      this.store.dispatch(new UpdateUser(user));
    }

    this.route.navigate(['/view']);
  }
}
