import { combineEpics, Epic, ofType } from 'redux-observable';
import { map, tap, ignoreElements } from 'rxjs/operators';

import { Action } from '../actions';
import { State } from '../reducers';


type AppEpic = Epic<Action, Action, State>;


const logWorkloadSubmissions: AppEpic = (action$, state$) => (
  action$.pipe(
    ofType('WORKLOAD_SUBMIT'),
    map(action => action.payload),
    tap((payload) => console.log('Workload submitted', payload)),
    ignoreElements(),
  )
);


export const epics = combineEpics(
  logWorkloadSubmissions,
);

export default epics;