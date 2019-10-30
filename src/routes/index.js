import React, { PureComponent } from 'react';
import { Switch, withRouter } from 'react-router-dom';

// import links from '../config/links';
import App from '../components/App';

class Routes extends PureComponent {
    render() {
        return (
            <App>
                <Switch>
                    {/* <Route exact path={links.home} component={Home} /> */}
                </Switch>
            </App>
        )
    }
}

export default withRouter(Routes);