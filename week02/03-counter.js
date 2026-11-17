function createCounter(start = 0) {
    let count = start;

    return {
        increment() {
            return ++count;
        },
        decrement() {
            return --count;
        },
        reset() {
            count = start;
            return count;
        },
        value() {
            return count;
        },
    };
}

const c = createCounter(5);
console.log(c.increment()); // 6
console.log(c.increment()); // 7
console.log(c.decrement()); // 6
console.log(c.reset());     // 5
console.log(c.value());     // 5
console.log(c.count);       // undefined
