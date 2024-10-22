import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ErrorBoundary } from 'app/providers/ErrorBoundaries';
import 'app/styles/index.scss';
import { StoreProvider } from 'app/providers/StoreProvider';
import App from './app/App';
import ThemeProvider from './app/providers/ThemeProvider/ui/ThemeProvider';
import 'shared/config/i18n/i18n';

createRoot(document.getElementById('root')).render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>,
);
