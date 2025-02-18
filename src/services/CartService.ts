import { ref } from 'vue';

interface CartItem {
    id: number;
    name: string;
    price: number;
}

const cart = ref<CartItem[]>([]);

export function useCart() {
    const addToCart = (item: CartItem) => {
        cart.value.push(item);
    };

    const getCart = (): CartItem[] => {
        return cart.value;
    };

    const removeFromCart = (itemId: number) => {
        cart.value = cart.value.filter(item => item.id !== itemId);
    };

    return {
        addToCart,
        getCart,
        removeFromCart
    };
}
