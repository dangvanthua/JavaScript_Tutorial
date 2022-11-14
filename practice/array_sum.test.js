import { calcTotalCart } from "./array_sum";

describe('calcTotalCart(cartList)', () => {

    it('should return -1 if list is empty', () => {
        expect(calcTotalCart([])).toBe(0);
        expect(calcTotalCart('')).toBe(0);
        expect(calcTotalCart({})).toBe(0);
        expect(calcTotalCart(123)).toBe(0);
    });

    it('should return 0 if list have price === 0 or quantity === 0', () => {
        const cardList = [
            { id: 1, product: { id: 1, price: 0 }, quantity: 1 },
            { id: 2, product: { id: 2, price: 200000 }, quantity: 0 }
        ];
        expect(calcTotalCart(cardList)).toBe(0);
    });

    it('should return correct total if price, quantity > 0', () => {
        const cardList = [
            { id: 1, product: { id: 1, price: 25000 }, quantity: 1 },
            { id: 2, product: { id: 2, price: 100000 }, quantity: 2 },
        ]
        expect(calcTotalCart(cardList)).toBe(225000);
    });
});