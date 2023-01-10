// Write your solution here!

// splice= destructive
// slice = non destructive
// ...array = non destructively

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(catName) {
    return cats.push(catName);
}

function destructivelyPrependCat(catName) {
    return cats.splice(0,0,catName);
}

function appendCat(catName) {
    return [...cats, catName];
}

function prependCat(catName) {
    return [catName,...cats];
    }

function destructivelyRemoveLastCat() { 
    return cats.splice(-1,1)
}

function destructivelyRemoveFirstCat() {
    return cats.splice(0,1)
}

function removeLastCat() {
    return cats.slice(0,(cats.length -1))
}

function removeFirstCat() {
    return cats.slice(1,cats.length)
}