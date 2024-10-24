import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { NavigateOptions, To, useNavigate } from 'react-router-dom';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';

interface StoreProviderProps {
    children?: ReactNode
    initialState?: Partial<StateSchema>
}

export const StoreProvider = (props: StoreProviderProps) => {
    const { children, initialState } = props;

    const navigate = useNavigate();

    const store = createReduxStore(
        initialState as StateSchema,
        navigate,
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
