import * as React from 'react';

interface IGiphyViewerProps {
    gifSource: string;
    onSave();
}

interface IGiphyViewerState {
    isFavorite: boolean;
}

export class GiphyViewer extends React.Component<IGiphyViewerProps, IGiphyViewerState> {

    public render() {
        return (
            <div>
                <img src={this.props.gifSource} />
                <button onClick={this.props.onSave}>Save</button>
            </div>);
    }

}