// Implementacion de promesas en funciones

const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('Whooops!');
        }
    });
};

// Promesas con un setTimeOut definido

somethingWillHappen()
.then(response => console.log(response))
.catch(err => console.log(err));

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('True');
            }, 2000)
        } else {
            const error = new Error('Whoop!');
            reject(error);
        }
    });
};

somethingWillHappen2()
.then(response => console.log(response))
.then(() => console.log('Hola Mundo!'))
.catch(err => console.error(err));



// Anidar multiples promesas para su ejecucion

Promise.all([somethingWillHappen(), somethingWillHappen2()])
.then(response => {
    console.log('Array of results', response);
})
.catch(err => {
    console.error(err);
});