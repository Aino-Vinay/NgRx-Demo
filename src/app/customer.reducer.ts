import {ActionEx, CustomerActionTypes} from './customer.actions';
import { ApprovedPopUpDialog } from './customers-view/customers-view.component';
export const initialState = [];
export function CustomerReducer(state = initialState, action: ActionEx) {
  switch (action.type) {
   
    case 'Add':
        state.push(action.payload);
        console.log(state);
      return state;

      case 'Update':
        var i=ApprovedPopUpDialog.i;
        state[i-1]=action.payload;
        console.log(state);
       return state;

    case 'Delete':
      console.log(action.payload);
      state.splice(action.payload,1);
      return  state;
      
    default:
      return state;
  }
}