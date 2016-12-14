import React, {Component} from 'react';

class AppShell extends Component {
    render() {
        return (
            <div className="app-shell">
                {this.props.children}
            </div>
        );
    }
}

export default AppShell;