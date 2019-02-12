import { Status } from './types';

export type Action = {
  type: 'WORKLOAD_SUBMIT';
  payload: {
    complexity: number;
  };
} | {
  type: 'WORKLOAD_CREATED';
  payload: {
    id: number;
    complexity: number;
    completeDate: Date;
    status: Status;
  };
} | {
  type: 'WORKLOAD_CANCEL';
  payload: {
    id: number;
  };
} | {
  type: 'WORKLOAD_UPDATE_STATUS';
  payload: {
    id: number;
    status: Status;
  };
};

export const submit = ({ complexity }: { complexity: number }): Action => ({
  type: 'WORKLOAD_SUBMIT',
  payload: {
    complexity,
  },
});

export const created = ({ id, status, complexity, completeDate }: { id: number, status: Status, complexity: number, completeDate: Date }): Action => ({
  type: 'WORKLOAD_CREATED',
  payload: {
    id,
    status,
    completeDate, 
    complexity,
  },
});

export const cancel = ({ id }: { id: number }): Action => ({
  type: 'WORKLOAD_CANCEL',
  payload: {
    id,
  },
});

export const updateStatus = ({ id, status }: { id: number, status: Status }): Action => ({
  type: 'WORKLOAD_UPDATE_STATUS',
  payload: {
    id,
    status,
  },
});

