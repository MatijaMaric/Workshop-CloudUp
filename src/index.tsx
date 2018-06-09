import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { getRandomGiphy } from './util/giphy.service';
import { SearchComponent } from './components/searchComponent';
import { GiphyViewer } from './components/giphyViewer';
import { Navigation, NavigationItem } from './components/navigation';
import { History, HistoryItem } from './components/history';

interface IIndexState {
    gifSource: string;
    selectedNavigationItem: string;
    historyItems: HistoryItem[];
}

class Index extends React.Component<{}, IIndexState> {

    constructor() {
        super({});
        this.state = {
            gifSource: '',
            selectedNavigationItem: 'search',
            historyItems: []
        };
    }

    private searchGiphy = (query?: string) => {
        getRandomGiphy(query).then(gifSource => {
            this.setState({
                gifSource: gifSource
            });
        });
    }

    private navigationItems: NavigationItem[] = [
        {
            name: 'Search',
            id: 'search'
        },
        {
            name: 'History',
            id: 'history'
        }
    ]

    private _onNavigationItemSelected = (selectedId: string) => {
        this.setState({
            selectedNavigationItem: selectedId
        });
    }

    private _onSave = () => {
        const historyItem: HistoryItem = {
            url: this.state.gifSource
        };

        const items = [...this.state.historyItems, historyItem];

        this.setState({
            historyItems: items
        });
    }

    public render(): JSX.Element {
        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <Navigation
                    navigationItems={this.navigationItems}
                    selectedId={this.state.selectedNavigationItem}
                    onSelectedChanged={this._onNavigationItemSelected}
                />

                {this.state.selectedNavigationItem === 'search' &&
                    <>
                        <SearchComponent onSearch={this.searchGiphy} />
                        <GiphyViewer
                            gifSource={this.state.gifSource}
                            onSave={this._onSave}
                        />
                    </>
                }
                {this.state.selectedNavigationItem === 'history' &&
                    <>
                        <History
                            historyItems={this.state.historyItems}
                        />
                    </>
                }
            </div>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));
