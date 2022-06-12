import React from 'react';
import TimeAgo from 'react-timeago';
import { Status } from '../../state/workloads'


export interface WorkloadItemStateProps {
  id: number;
  complexity: number;
  status: Status;
  completeDate: Date;
}

export interface WorkloadItemMethodProps {
  onCancel: () => void;
}

export interface WorkloadItemProps extends 
  WorkloadItemStateProps,
  WorkloadItemMethodProps {}


const WorkloadItem: React.SFC<WorkloadItemProps> = (props) => (
  <div className="WorkloadItem">
    <div>
      <h3 className="WorkloadItem-heading">Workload #{props.id}</h3>
      <span className="WorkloadItem-subHeading">Complexity: {props.complexity}</span>
    </div>
    <div>
      {props.status === 'WORKING'
        ? (
          <>
            <span className='WorkloadItem-timeAgo'><TimeAgo date={props.completeDate} /></span>
            <button 
              className="WorkloadItem-secondaryButton Button" 
              onClick={props.onCancel}
            >
              Cancel
            </button>
          </>
        )
        : (
          <span className="WorkloadItem-statusText">{props.status.toLowerCase()}</span>
        )
      }
    </div>
  </div>
);


export { 
  WorkloadItem,
};

export default WorkloadItem;