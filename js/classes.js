class javascript {

    constructor() {
        this.number = 1;
    }

    getNumber () {
        return this.number;
    }

    setNumber (number) {
        this.number = number;
    }

    isGreaterThan (n) {
        return n > this.number;
    }

    filterArrayGreaterThan (array) {
        var me = this;
        return array.filter(function (n) {
            return n > me.number;
        });
    }

}

const js = new javascript();

console.log(js.filterArrayGreaterThan([1,2,3,4,5]));