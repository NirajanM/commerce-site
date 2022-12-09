export interface tItemsInCart {
    product_id: number | undefined;
    title: string | undefined;
    price: number | undefined;
    amount: number | undefined;
}

export type CartContextType = {
    addCart: (newItem: tItemsInCart[]) => void;
    removeItem: (id: number) => void;
    clearCart: () => void;
    userCart: tItemsInCart[];
    handleSignIn: (isSignedIn: boolean) => void;
    signedIn: boolean
};