let shoppingCart = [
{
    name: "apple",
    quantity: "4",
},
{
    name: "banana",
    quantity: "2",
},
{
    name: "orange",
    quantity: "5",
},
{
    name: "milk",
    quantity: "1",
},
{
    name: "bread",
    quantity: "2",
}];

const totalQuantity = shoppingCart.reduce((totalQuantity, item) => {
    return totalQuantity + item.quantity;
}, 0)

console.log(totalQuantity);

shoppingCart.push({
    name: "yougurt",
    quantity: "3",
});

const appleItem = shoppingCart.find(item =>
    item === "apple");
    if (appleItem){
        appleItemQuantity += 3
    };
    shoppingCart.push({name: "apple", quantity: "3"});

    console.log(shoppingCart);