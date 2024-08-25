console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem(item) {
    basket.push(item);  
    return true;        
}
console.log(`Basket should be empty: ${basket}`);
console.log(addItem('Pineapples'));
console.log(addItem('Apples'));
console.log(addItem('Berries'));
console.log(addItem('Bananas'));
console.log(`Basket is now with ${basket}`);

function listItems(){
    for(let i=0; i<basket.length; i++){
    console.log(basket[i]);
    }
}
listItems();

function empty(){
    basket.length = 0;
}

console.log('Basket before', basket);
empty();
console.log('Basket after will be an empty array:', basket);






// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
