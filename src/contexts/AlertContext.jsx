import React, { createContext, useContext, useState } from 'react';
import Alert from '../components/UI/Alert';

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
    const [alert, setAlert] = useState(null);

    const showAlert = (text, callback = null) => {
        return new Promise((resolve) => {
            setAlert({
                text,
                onConfirm: () => {
                    setAlert(null);
                    if (callback) callback();
                    resolve();
                },
            });
        });
    };

    const hideAlert = () => {
        setAlert(null);
    };

    return (
        <AlertContext.Provider value={{ showAlert, hideAlert }}>
            {children}
            {alert && <Alert text={alert.text} callback={alert.onConfirm} />}
        </AlertContext.Provider>
    );
};

export const useAlert = () => {
    const context = useContext(AlertContext);
    if (!context) {
        throw new Error('useAlert must be used within an AlertProvider');
    }
    return context;
};
