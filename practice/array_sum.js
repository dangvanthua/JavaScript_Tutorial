// export function calcTotalCart(cartList) {
//     if (!Array.isArray(cartList) || cartList.length === 0) return -1;

//     let sum = 0;
//     for (let i = 0; i < cartList.length; i++) {
//         const cardItem = cartList[i];
//         const itemTotal = cardItem.product.price * cardItem.quantity;
//         sum += itemTotal;
//     }
//     return sum;
// }

export function calcTotalCart(cartList) {
    if (!Array.isArray(cartList) || cartList.length === 0) return 0;

    return cartList.reduce((sum, cartItem) => {
        const itemTotal = cartItem.product.price * cartItem.quantity;
        return sum + itemTotal;
    }, 0);
}