import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/interfaces';
import { UserState } from 'src/app/store/state/user.state';
import { userService } from 'src/app/user.service';

@Component({
  selector: 'app-single-user-detail',
  templateUrl: './single-user-detail.component.html',
  styleUrls: ['./single-user-detail.component.css'],
})
export class SingleUserDetailComponent implements OnInit {
  user: IUser;
  @Select(UserState.selectedUser) selectUser$: Observable<any>;
  constructor() {}

  ngOnInit(): void {
    // this.user = this.Service.onSingleView();
    this.selectUser$.subscribe((res) => {
      this.user = res;
      console.log('user>>', this.user);
    });
  }
}
