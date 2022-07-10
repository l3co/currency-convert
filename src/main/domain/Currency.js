class Currency {

    constructor(userID, to, from, value) {
        this.userID = userID;
        this.to = to;
        this.from = from;
        this.value = value;
        this.tax = 0;
        this.result = 0;
        this.date = null;
    }

    setTax(tax) {
        this.tax = tax;
    }

    setResult(result) {
        this.result = result;
    }

    setDate(date) {
        this.date = date;
    }

    validate() {
        if (this.value <= 0) {
            // TODO custom error
            throw new Error('Invalid value, we could accept negative numbers');
        }
    }
}

module.exports = Currency