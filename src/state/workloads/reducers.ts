import { Action } from './actions';
import { Status } from './types';

interface Entry<Id extends number> {
  id: Id;
  completeDate: Date;
  status: Status;
}

export type State = { 
  [Id in number]: Entry<Id>;
};
  

const initialState: State = {};

export const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'WORKLOAD_CREATED':            
      return { 
        [action.payload.id]: {
          id: action.payload.id,
          completeDate: action.payload.completeDate,
          status: 'WORKING',
        },
      };

      case 'WORKLOAD_CANCEL': 
        return {
          [action.payload.id]: {
            ...state[action.payload.id],
            status: 'CANCELED',
          },
        }
      
      case 'WORKLOAD_UPDATE_STATUS': 
        return {
          [action.payload.id]: {
            ...state[action.payload.id],
            status: action.payload.status,
          },
        }

      default:
        return state;
  }
}
