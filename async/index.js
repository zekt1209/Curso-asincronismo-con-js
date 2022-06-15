const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true) 
        ? setTimeout(() => resolve('Do something async'), 3000) 
        : reject(new Error('Test error'))
    });
};

const doSomethingAsync2 = async () => {
    const something = await doSomethingAsync();
    console.log(something);
}

console.log('Before');
doSomethingAsync2();
console.log('After');



const anotherFunction = async () => {
    try{
        const something = await doSomethingAsync();
        console.log(something);

    }catch (error) {
        console.error(error);
    }
}

console.log('Before1');
anotherFunction();
console.log('After1');