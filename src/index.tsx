import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { reducers } from './state';
import * as WorkloadActions from './state/workloads/actions';

import './index.css';
import App from './App';


const store = createStore(reducers);

store.subscribe(() => {
  console.log(store.getState().workloads[0]);
});

store.dispatch(WorkloadActions.submit({ complexity: 100 }));
store.dispatch(WorkloadActions.create({ workloadId: 0, complexity: 100, completeDate: new Date() }));
store.dispatch(WorkloadActions.updateStatus({ workloadId: 0, status: 'SUCCESS' }));


ReactDOM.render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ), 
  document.getElementById('root'),
);
