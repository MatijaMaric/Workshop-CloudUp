import * as React from 'react';
import { GiphyViewer } from './giphyViewer';

export interface IHistoryProps {
    historyItems: HistoryItem[];
}

export interface HistoryItem {
    url: string;
    input?: string;
}

export class History extends React.PureComponent<IHistoryProps, never> {
    public render() {
        return (
            <>
                {this.props.historyItems && this.props.historyItems.map((x, idx) => (
                    <div className="" key={idx}>
                        <img src={x.url} />
                        <span>{x.input}</span>
                    </div>
                ))
                }
            </>
        );
    }
}