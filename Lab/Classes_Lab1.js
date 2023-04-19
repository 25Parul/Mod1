// // Create a JavaScript class that models a simple bank account. 
// The account should have methods for depositing and withdrawing money, as well as checking the current balance. 
// It should also keep track of the account holder's name and account number.

// // The class should have a constructor method that takes in the account holder's name and creates a unique account number for the account. 
// The account number should be generated automatically and should be different for each instance of the class.

// // The class should also have a method for printing out the account details, including the account holder's name, account number, and current balance.

// // Once you have created your bank account class, create an instance of the class and test its methods to make sure they are working correctly. 
// You could also consider adding additional functionality, such as a method for calculating interest or transferring funds between accounts.


class BankAccount {
    static accountCounter = 0;

    constructor(name, balance) {
        this.name = name;
        this.accountNumber = (++BankAccount.accountCounter).toString().padStart(10, 98203456);
        // The padStart method takes two arguments: first: total length of the resulting string, second: character to use for padding.
        this.balance = balance;

    }
    // Methods for depositing

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount} into account. New balance is ${this.balance}.`);
      }

      withdraw(amount) {
        if (amount <= this.balance) {
          this.balance -= amount;
          console.log(`Withdrew ${amount} from account. New balance is ${this.balance}.`);
        } else {
          console.log(`Insufficient funds. Current balance is ${this.balance}.`);
        }
      }

      getBalance() {
        console.log(`Current balance is ${this.balance}.`);
      }

 
// Method for printing out the account details, including the account holder's name, account number, and current balance.

    accDetails() {
         let accountDetails= {
            Account_Holder_Name: this.name,
            Account_Number: this.accountNumber,
            Balance: this.balance
        }

        console.log(accountDetails)

    }

}


const BankAccount1 = new BankAccount("Mike", 8706);
const BankAccount2 = new BankAccount("Phoebe", 7689);
const BankAccount3 = new BankAccount("Georgia", 98009);
const BankAccount4 = new BankAccount("Noah", 36);
const BankAccount5 = new BankAccount("Oliver", 2983754);
const BankAccount6 = new BankAccount("Sophia", 76554);
const BankAccount7 = new BankAccount("Mia", 1293);
const BankAccount8 = new BankAccount("Lily", 9876543);
const BankAccount9 = new BankAccount("Elizabeth", 0);
const BankAccount10 = new BankAccount("Damon", 1526);

BankAccount1.getBalance()
BankAccount4.withdraw(2000)
BankAccount5.accDetails()
BankAccount2.deposit(5000)
BankAccount1.accDetails()
BankAccount2.accDetails()
BankAccount3.accDetails()
BankAccount4.accDetails()
BankAccount10.accDetails()
BankAccount8.accDetails()

