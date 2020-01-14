const world = () => {
    console.log('hello world');
};

const hello = function () {


    world();

    hello.test = function () {
        console.log('test');
    };
};

const small = () => 'test';


console.log(hello.test);
