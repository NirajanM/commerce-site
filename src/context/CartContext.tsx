import { CartContextType } from '../@types/cart'
import { createContext } from 'react';
export const CartContext = createContext<CartContextType>(
    {
        addCart: () => { },
        removeItem: () => { },
        clearCart: () => { },
        handleSignIn: () => { },
        userCart: [],
        signedIn: false
    }
);