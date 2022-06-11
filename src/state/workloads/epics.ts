import { WorkloadService } from './services';
import { combineEpics, Epic } from 'redux-observable';
import { filter, map, tap, ignoreElements, switchMap, mergeMap, delayWhen, delay } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';

import { RootAction, RootState } from '../reducer';
import * as workloadsActions from './actions';
import { from, timer } from 'rxjs';

type AppEpic = Epic<RootAction, RootAction, RootState>;

const workloadService = new WorkloadService()

const logWorkloadSubmissions: AppEpic = (action$, state$) => (
  action$.pipe(
    filter(isActionOf(workloadsActions.submit)),
    map(action => action.payload),
    tap((payload) => console.log('Workload submitted', payload)),
    ignoreElements(),
  )
);

const submitWorkload: AppEpic = (action$, state$) => (
  action$.pipe(
    filter(isActionOf(workloadsActions.submit)),
    mergeMap(({ payload }) => from(workloadService.create(payload)).pipe(
      map((res: any) => workloadsActions.created(res)),
    ))
  )
);

const cancelWorkload: AppEpic = (action$, state$) => (
  action$.pipe(
    filter(isActionOf(workloadsActions.cancel)),
    switchMap(({ payload }) => from(workloadService.cancel(payload)).pipe(
      map((res: any) => workloadsActions.updateStatus(res)),
    ))
  )
);

const updateWorkload: AppEpic = action$ => (
  action$.pipe(
    filter(isActionOf(workloadsActions.created)),
    delayWhen(action => timer(action.payload.complexity * 1000)),
    switchMap(action => from(workloadService.checkStatus(action.payload))),
    map(res => workloadsActions.updateStatus(res))
  )
);

export const epics = combineEpics(
  logWorkloadSubmissions,
  submitWorkload,
  cancelWorkload,
  updateWorkload
);

export default epics;
