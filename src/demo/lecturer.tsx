import * as React from 'react';

export interface ILecturerProps {
    name: string;
    onExamStart();
}

export default class Lecturer extends React.Component<ILecturerProps, {}> {
    public render() {
        return (
            <div>
                Lecturer:{this.props.name}
                <button onClick={this.props.onExamStart}> Start Exam </button>
            </div>
        );
    }
}