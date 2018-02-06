import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import configure from './store';
import EpisodesList from './EpisodesList';

const store = configure();

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <EpisodesList/>
            </Provider>
        );
    }
};
