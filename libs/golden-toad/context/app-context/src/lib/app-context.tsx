import React, {
    useReducer,
    createContext,
    useContext,
    useRef,
    //   useMemo,
    ReactNode,
} from 'react';

import { appReducer } from '@mono-universe/golden-toad/reducer/app-reducer';

const initialAppState = {
    isLoading: false,
};

type AppContextType = {
    contextName: string,
    appState: Record<string, unknown>,
    profileDrawerRef?: null
    postDrawerRef?: null
    dispatch?: () => null
}

export const AppContext = createContext<AppContextType>({
    contextName: 'Golden-toad',
    appState: initialAppState,
    profileDrawerRef: null,
    postDrawerRef: null,
    dispatch: () => null
});

export function AppContextProvider({ children }: { children: ReactNode }) {
    const [appState, dispatch] = useReducer(appReducer, initialAppState);

    // const profileDrawerRef = useRef<HTMLElement>(null);
    // const postDrawerRef = useRef<HTMLElement>(null);

    console.log('appContext');

    return (
        <AppContext.Provider
            value={{
                contextName: 'Golden-toad',
                appState,
                // profileDrawerRef,
                // postDrawerRef,
                // dispatch,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export function useAppContextDeps(): AppContextType {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error(`Components cannot be rendered outside the App component`);
    }
    return context;
}
