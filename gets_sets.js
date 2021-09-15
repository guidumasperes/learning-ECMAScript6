class BankAccount {
    constructor (accountNumber, bankName, bankBalance) {
        this.accountNumber = accountNumber;
        this.bankName = bankName;
        this.bankBalance = bankBalance;
    }
    get balance() {
        return this.bankBalance;
    }
    set balance(newBankBalance) {
        this.bankBalance = newBankBalance;
    }
    get name() {
        return this.bankName;
    }
    set name(newBankName) {
        this.bankName = newBankName;
    }
}

const nubank = new BankAccount(1936491, "Nubank Pagamentos SA", 9000);

console.log(nubank);

console.log("My balance is: ", nubank.balance);
console.log("My banck name is: ", nubank.name);

nubank.balance = 8500;

console.log("My balance is: ", nubank.balance);