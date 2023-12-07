{
  // 은행 계좌 관리 시스템

  class Account {
    private balance: number;

    constructor(public accountNumber: string) {
      this.balance = 0;
    }

    deposit(amount: number): void {
      this.balance += amount;
      console.log(`Deposit: ${amount}, New Balance: ${this.balance}`);
    }

    withdraw(amount: number): void {
      if (amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdraw: ${amount}, New Balance: ${this.balance}`);
      } else {
        console.log('Not enough balance');
      }
    }

    getBalance(): void {
      console.log(`Current Balance: ${this.balance}`);
    }
  }
  const account = new Account('123');
  account.deposit(1000);
  account.withdraw(500);
  account.getBalance();

  account.withdraw(200);
  account.getBalance();

  account.withdraw(400);
  account.getBalance();
}
