import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { reducers } from './state';
import * as WorkloadActions from './state/workloads/actions';
import { WorkloadService } from './state/workloads/services';

import './index.css';
import App from './App';


// demo store

const store = createStore(reducers);

store.subscribe(() => {
  console.log('store workload[0]', store.getState().workloads[0]);
});

store.dispatch(WorkloadActions.submit({ complexity: 100 }));
store.dispatch(WorkloadActions.created({ id: 0, complexity: 100, completeDate: new Date() }));
store.dispatch(WorkloadActions.cancel({ id: 0 }));
store.dispatch(WorkloadActions.updateStatus({ id: 0, status: 'SUCCESS' }));


// demo workloadService

const workloadService = new WorkloadService();

workloadService.create({ complexity: 1 })
  .then(console.log.bind(console, 'create 0'));
workloadService.cancel({ id: 0 })
  .then(console.log.bind(console, 'cancel 0'));
setTimeout(() => workloadService.checkStatus({ id: 0 })
    .then(console.log.bind(console, 'checkStatus 0')), 100);

workloadService.create({ complexity: 2 })
  .then(console.log.bind(console, 'create 1'));
workloadService.checkStatus({ id: 1 })
  .then(console.log.bind(console, 'checkStatus 1'));
setTimeout(() => workloadService.checkStatus({ id: 1 })
  .then(console.log.bind(console, 'checkStatus 1')), 200);

workloadService.create({ complexity: 2 })
  .then(console.log.bind(console, 'create 2'));
workloadService.checkStatus({ id: 2 })
  .then(console.log.bind(console, 'checkStatus 2'));
setTimeout(() => workloadService.checkStatus({ id: 2 })
    .then(console.log.bind(console, 'checkStatus 2')), 200);


ReactDOM.render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ), 
  document.getElementById('root'),
);
