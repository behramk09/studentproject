import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable()
export class userService {
  users = [
    {
      id: 1,
      name: 'atal',
      password: 123,
    },
    {
      id: 2,
      name: 'Behram',
      password: 321,
    },
  ];
  single;
  id = 3;
  showUser() {
    return this.users;
  }
  onSubmitt(id: any, userName: string, userPassword: any) {
    this.users.push({ id: this.id, name: userName, password: userPassword });
    //console.log('Service data', id);
    id++;
  }
  onDeleteUser(userId: any) {
    this.users.splice(
      this.users.indexOf(this.users.find((item) => item.id === userId)),
      1
    );
  }
  onSingleUser(userId: any) {
    this.single = this.users.find((item) => item.id === userId);
    console.log('single user>>>>>', this.single);
  }
  onSingleView() {
    // console.log('single call value>>>>', this.single);
    return this.single;
  }
}
