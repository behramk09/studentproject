import { IUser } from 'src/app/interfaces';

export class AddUser {
  static readonly type = 'Add';
  constructor(public data: IUser) {}
}
export class GetUser {
  static readonly type = 'Get';
}

export class DeleteUser {
  static readonly type = 'Delete';
  constructor(public id: number) {}
}
export class UpdateStateUser {
  static readonly type = 'Update';
  constructor(public data: IUser) {}
}
export class UpdateUser {
  static readonly type = 'UpdateUser';
  constructor(public data: IUser) {}
}
export class SetSingleUser {
  static readonly type = 'Select';
  constructor(public id) {}
}
