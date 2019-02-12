import { combineEpics, Epic, ofType } from 'redux-observable';
import { filter, map, tap, ignoreElements } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';

import { RootAction, RootState } from '../reducer';
import * as workloadsActions from './actions';


type AppEpic = Epic<RootAction, RootAction, RootState>;


// import { WorkloadService } from './services';
// const workloadService = new WorkloadService();
// workloadService.create({ complexity: 1 })
//   .then(console.log.bind(console, 'workloadService create'));


const logWorkloadSubmissions: AppEpic = (action$, state$) => (
  action$.pipe(
    filter(isActionOf(workloadsActions.submit)),
    map(action => action.payload),
    tap((payload) => console.log('Workload submitted', payload)),
    ignoreElements(),
  )
);


export const epics = combineEpics(
  logWorkloadSubmissions,
);

export default epics;