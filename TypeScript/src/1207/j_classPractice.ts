{
  // ! 직원 관리 시스템
  class Employee {
    constructor(
      public name: string,
      public id: number,
    ) {
      this.name = name;
      this.id = id;
    }

    displayInfo(): void {
      console.log(`Name: ${this.name}, ID: ${this.id}`);
    }
  }

  class Manager extends Employee {
    private subordinates: Employee[] = [];

    constructor(name: string, id: number) {
      super(name, id);
    }

    addSubordinate(employee: Employee): void {
      this.subordinates.push(employee);
    }

    listSubordinates(): void {
      console.log(`Manager: ${this.name}`);
      this.subordinates.forEach((v) => v.displayInfo());
    }
  }

  const manager = new Manager('kja', 1);
  const emp1 = new Employee('ldk', 2);
  const emp2 = new Employee('ljg', 3);
  manager.addSubordinate(emp1);
  manager.addSubordinate(emp2);

  manager.listSubordinates();
}
