import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { GlobalStore } from './GlobalStore';
import { configure } from 'mobx';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const globalStore = new GlobalStore();

export const AppContext = createContext<GlobalStore>(globalStore);

ReactDOM.render(
    <React.StrictMode>
        <AppContext.Provider value={ globalStore }>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </AppContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

configure({
    enforceActions: 'observed',
    computedRequiresReaction: true,
    reactionRequiresObservable: true,
    observableRequiresReaction: true,
    disableErrorBoundaries: true
});
