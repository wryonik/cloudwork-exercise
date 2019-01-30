import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Action, State } from '../../state';
import { cancel } from '../../state/workloads/actions';
import { WorkloadItem, WorkloadItemStateProps } from '../WorkloadItem';


export interface WorkloadListStateProps {
  workloads: WorkloadItemStateProps[];
}

export interface WorkloadListDispatchProps {
  cancelWorkload: (id: number) => void;
}

export interface WorkloadListProps extends 
  WorkloadListStateProps,
  WorkloadListDispatchProps {}


const WorkloadList: React.SFC<WorkloadListProps> = ({ workloads, cancelWorkload }) => (
  !workloads.length 
    ? (
      <span>No workloads to display</span>
    )
  : (
    <ol>
      {workloads.map((workload) => (
        <li key={workload.id}>
          <WorkloadItem {...workload} onCancel={() => cancelWorkload(workload.id)} />
        </li>
      ))}
    </ol>
  )
);


const mapStateToProps = (state: State): WorkloadListStateProps => ({
  workloads: Object.values(state.workloads),
});

const mapDispatchToProps = (dispatch: Dispatch<Action>): WorkloadListDispatchProps => ({
  cancelWorkload: (id: number) => dispatch(cancel({ id })),
}) 

const WorkloadListContainer = connect(mapStateToProps, mapDispatchToProps)(WorkloadList);


export {
  WorkloadList,
  WorkloadListContainer,
};

export default WorkloadList;
