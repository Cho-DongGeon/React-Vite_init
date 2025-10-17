import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { AlertProvider } from './contexts/AlertContext';
import { ConfirmProvider } from './contexts/ConfirmContext';
import './App.css';

export default function App() {
    return (
        <ConfirmProvider>
            <AlertProvider>
                <RouterProvider router={router} />
            </AlertProvider>
        </ConfirmProvider>
    );
}
