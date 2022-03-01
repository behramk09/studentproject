import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import {
  AddUser,
  DeleteUser,
  SetSingleUser,
  UpdateStateUser,
  UpdateUser,
} from '../actions/user.action';

@State({
  name: 'User',
  defaults: {
    user: [
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
    ],
    selectedUser: null,
    updateduser: null,
  },
})
@Injectable()
export class UserState {
  @Selector()
  static getUserList(state) {
    return state.user;
  }
  @Selector()
  static selectedUser(state) {
    return state.selectedUser;
  }

  @Selector()
  static updateduser(state) {
    console.log('return user >>> ', state.updateduser);
    return state.updateduser;
  }
  //   @Action(GetUser)
  //   getUsers({ getState, setState }: StateContext<any>) {}

  @Action(SetSingleUser)
  getSelectedUser({ getState, setState }: StateContext<any>, { id }) {
    const state = getState();
    const userlist = state.user;
    const index = userlist.findIndex((item) => item.id === id);

    setState({
      ...state,
      selectedUser: userlist[index],
    });
  }
  @Action(AddUser)
  addUserData({ getState, patchState }: StateContext<any>, { data }) {
    const state = getState();
    if (!data.id) {
      let length = state.user.length;
      data.id = ++length;
    }
    patchState({
      user: [...state.user, data],
    });
  }

  // Mutation
  @Action(DeleteUser)
  deleteUserData({ getState, setState }: StateContext<any>, { id }) {
    const state = getState();
    let users = state.user;
    users.splice(users.indexOf(users.find((item) => item.id === id)), 1);
  }

  @Action(UpdateStateUser)
  updateuser({ getState, patchState }: StateContext<any>, { data }) {
    const state = getState();
    console.log('whatssssssssssssssssssssss  hereeeeeeeeeeeeeeee', data);
    patchState({
      updateduser: data,
    });
  }

  @Action(UpdateUser)
  updateStateUser({ getState, patchState }: StateContext<any>, { data }) {
    console.log('for update state user >>>>>>>>>>>>>>>>>>>>>>>>>>>', data);
    const state = getState().user;
    const userList = state;
    const index = userList.findIndex((item) => item.id === data.id);
    console.log('index > ', index);
    userList[index] = data;
    console.log(userList);
    patchState({
      user: userList,
      updateduser: null,
    });
  }
}
