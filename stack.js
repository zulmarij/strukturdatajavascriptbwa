function createStack() {
    let array = [];

    return {
        push: function (item) {
            array.push(item);
        },
        pop: function () {
            array.pop();
        },
        peek: function () {
            return array[array.length - 1];
        },
        size: function () {
            return array.length;
        }
    }
}

const bookStack = createStack();

bookStack.push("The Effective Engineer");
bookStack.push("The Pragmatic Programmer");
bookStack.push("Start With Why");

console.log(bookStack.peek());
console.log(bookStack);
bookStack.pop();
bookStack.pop();
console.log(bookStack.peek());
console.log(bookStack.size());