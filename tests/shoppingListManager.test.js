const { addItem, removeItem, getItems, clearList } = require('../src/shoppingListManager');



test ('addItem should add valid items to the shopping list', () => {
    //Array with valid inputs
    const validInputs = ['Apples', 'Juice', 'Eggs'];

    //Adds each item from array validInputs
    validInputs.forEach(item => {
        addItem(item);
    });
    //Checks that each item is added to shoppingList
    validInputs.forEach(item => {
        expect(getItems()).toContain(item);
    });
});

test ('addItem should not allow non-strings to be added', () => {
    //Array with invalid inputs
    const invalidInputs = ['', '    ', 123, null, []];

    //Tries to add each item from array invalidInputs
    invalidInputs.forEach(item => {
        addItem(item);
    });
    
    //Checks that each item was not added to shoppingList
    invalidInputs.forEach(item => {
        expect(getItems()).not.toContain(item);
    });    
});

test ('addItem should trim whitespace from inputs', () => {
    addItem('    Bananas    ');
    //Checks string was trimmed of excess whitespace
    expect(getItems()).toContain('Bananas');
});

test ('removeItem should remove requested item from shopping list', () => {
    addItem('Bread');
    const shoppingList = getItems();
    //Get bread index no matter where it was added
    const breadIndex = shoppingList.indexOf('Bread');
    removeItem(breadIndex);
    expect(getItems()).not.toContain('Bread');
});

test ('removeItem should not change list if invalid index is used', () => {
    const shoppingList = getItems();
    const shoppingListLength = getItems().length; //Invalid index
    removeItem(shoppingListLength);
    removeItem(-1);
    //Checks if shoppingList is unaltered
    expect(shoppingList === getItems());
})

test ('clearList should remove all items from shopping list', () => {
    addItem('Milk');
    addItem('Bread');
    //Adds extra items but ensures list is cleared
    clearList();
    expect(getItems()).toEqual([]);
});