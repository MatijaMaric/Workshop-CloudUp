import * as React from 'react';

export interface INavigationProps {
    navigationItems: NavigationItem[];
    selectedId: string;

    onSelectedChanged(selectedId: string);
}

export interface NavigationItem {
    name: string;
    id: string;
}

export interface INavigationItemProps {
    item: NavigationItem;
    isSelected: boolean;
    onClicked(id: string);
}

export class Navigation extends React.PureComponent<INavigationProps, never> {

    public render() {
        return (
            <div style={{ display: 'flex' }} > 
                {
                    this.props.navigationItems && this.props.navigationItems.map((x, idx) => (
                        <NavigationItemComponent
                            item={x}
                            onClicked={this.props.onSelectedChanged}
                            key={idx}
                            isSelected={x.id === this.props.selectedId}
                        />
                    ))
                }
            </div >
        );
    }

}

export class NavigationItemComponent extends React.PureComponent<INavigationItemProps, never> {
    private onClicked = () => {
        this.props.onClicked(this.props.item.id);
    }

    public render() {
        let color = this.props.isSelected ? 'red' : 'black';
        return (
            <div onClick={this.onClicked} style={{ marginLeft: '5px', cursor: 'pointer', color: color }}>
                {this.props.item.name}
            </div>
        );
    }
}