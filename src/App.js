import React from 'react';
import { Provider } from 'react-redux';
import { Container } from '@material-ui/core';

import { store } from './state/store';
import { NewsList } from './components/NewsList';
import { Task2 } from './Task2';

function App() {
    return (
        <Provider store={store}>
            <Container maxWidth="md">
                <NewsList />
                <Task2 />
            </Container>
        </Provider>
    );
}

export default App;
