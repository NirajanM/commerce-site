import { createContext } from 'react'
type tCart = {
    productId: number;
    amount: number;
}

type tCartContext = {
    userCart: [tCart] | null;
    setUserCart: ([tCart]: [tCart]) => void;
}
export const CartContext = createContext<tCartContext | null>(null);