import { Status } from './types';

export type Action = {
  type: 'WORKLOAD_SUBMIT';
  payload: {
    complexity: number;
  };
} | {
  type: 'WORKLOAD_CREATE';
  payload: {
    workloadId: number;
    complexity: number;
    completeDate: Date;
  };
} | {
  type: 'WORKLOAD_CANCEL';
  payload: {
    workloadId: number;
  };
} | {
  type: 'WORKLOAD_CHECK_STATUS';
  payload: {
    workloadId: number;
  };
} | {
  type: 'WORKLOAD_UPDATE_STATUS';
  payload: {
    workloadId: number;
    status: Status;
  };
};

export const submit = ({ complexity }: { complexity: number }): Action => ({
  type: 'WORKLOAD_SUBMIT',
  payload: {
    complexity,
  },
});

export const create = ({ workloadId, complexity, completeDate }: { workloadId: number, complexity: number, completeDate: Date }): Action => ({
  type: 'WORKLOAD_CREATE',
  payload: {
    workloadId,
    completeDate, 
    complexity,
  },
});

export const cancel = ({ workloadId }: { workloadId: number }): Action => ({
  type: 'WORKLOAD_CANCEL',
  payload: {
    workloadId,
  },
});

export const checkStatus = ({ workloadId }: { workloadId: number }): Action => ({
  type: 'WORKLOAD_CHECK_STATUS',
  payload: {
    workloadId,
  },
});

export const updateStatus = ({ workloadId, status }: { workloadId: number, status: Status }): Action => ({
  type: 'WORKLOAD_UPDATE_STATUS',
  payload: {
    workloadId,
    status,
  },
});

