import { useState, useContext, createContext } from 'react';
import Confirm from '../components/UI/Confirm';

const ConfirmContext = createContext();

export const ConfirmProvider = ({ children }) => {
    const [confirm, setConfirm] = useState(null);

    const showConfirm = (text) => {
        return new Promise((resolve) => {
            setConfirm({
                text,
                onConfirm: () => {
                    setConfirm(null);
                    resolve(true);
                },
                onCancel: () => {
                    setConfirm(null);
                    resolve(false);
                },
            });
        });
    };

    return (
        <ConfirmContext.Provider value={{ showConfirm }}>
            {children}
            {confirm && <Confirm text={confirm.text} onConfirm={confirm.onConfirm} onCancel={confirm.onCancel} />}
        </ConfirmContext.Provider>
    );
};

export const useConfirm = () => {
    const context = useContext(ConfirmContext);
    if (!context) {
        throw new Error('useConfirm must be used within an ConfirmProvider');
    }
    return context;
};
