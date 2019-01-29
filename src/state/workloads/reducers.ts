import { Action } from './actions';
import { Status } from './types';

interface Entry<id extends number> {
  id: id;
  completeDate: Date;
  status: Status;
}

export type Store = { 
  [id in number]: Entry<id>;
};
  

const initialState: Store = {};

export const reducer = (state: Store = initialState, action: Action): Store => {
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
