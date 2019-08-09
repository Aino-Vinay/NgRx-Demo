import {Action} from '@ngrx/store';

export enum CustomerActionTypes {
  Add = 'Add',
  Remove = '[Customer Component] Remove'
}

export class ActionEx implements Action {
  readonly type;
  payload: any;
}

export class CustomerAdd implements ActionEx {
  readonly type = 'Add'
  constructor(public payload: any) {
  }
}
export class CustomerDelete implements ActionEx {
  readonly type = 'Delete';
  constructor(public payload: any) {
  }
}
export class CustomerUpdate implements ActionEx {
  readonly type = 'Update';
  constructor(public payload: any) {
  }
}

