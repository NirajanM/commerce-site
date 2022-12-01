export interface ICart {
    productId: number;
    amount: number;
}

export type CartContextType = {
    addCart: (newItem: Icart) => void;
    removeItem: (id: number) => void;
    clearCart: () => void;
    userCart: ICart[];
};