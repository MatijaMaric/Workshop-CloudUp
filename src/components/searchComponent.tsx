import * as React from 'react';

interface ISearchComponentProps {
    onSearch(value: string);
}

interface ISearchComponentState {
    searchValue: string;
}

export class SearchComponent extends React.Component<ISearchComponentProps, ISearchComponentState> {

    constructor(props: ISearchComponentProps) {
        super(props);
        this.state = {
            searchValue: ''
        };
    }

    private _searchValueChanged = (e: any) => {
        this.setState({
            searchValue: e.target.value
        });
    }

    private _onSearch = () => {
        this.props.onSearch(this.state.searchValue);
    }

    public render() {
        return (
            <div>
                <input value={this.state.searchValue} onChange={this._searchValueChanged} />
                <button onClick={this._onSearch}>Search</button>
            </div>
        );
    }
}