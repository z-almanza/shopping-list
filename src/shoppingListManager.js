const shoppingList = [];

function addItem(item) {
    //Confirms item is a string and trims excess whitepsace before adding to shoppingList
    if (typeof item === 'string' && item.trim()) {
        shoppingList.push(item.trim());
    }
}

function removeItem(index) {
    //Removes item at requested index
    if (index > -1 && index < shoppingList.length) {
        shoppingList.splice(index, 1);
    }
}

function getItems() {
    //Returns shoppingList
    return shoppingList;
}

function clearList() {
    //Clears shoppingList
    shoppingList.length = 0;
}

module.exports = { addItem, removeItem, getItems, clearList };