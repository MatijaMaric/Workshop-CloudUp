import * as React from 'react';

export interface IStudentProps {
    name: string;
}

export default class Student extends React.Component<IStudentProps, {}> {
    public render() {
        return <div>{this.props.name}</div>;
    }
}