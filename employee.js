class Employee {
    constructor(name, salary, title, manager = null) {
        this.name = name;
        this.salary = salary;
        this.title = title;
        this.manager = manager;

        // manager is an instance!!!
         // Becuase its instance, it is an instance of the
         // Manager class and an instance of the Employee class
            // When we make an employee instance, we can focus on the
            // 'manager' instance and reference addEmployee to push it
            // to the employees property.

        if (this.manager) {
            this.manager.addEmployee(this);
        }
    }

    calculateBonus(multiplier) {
        return this.salary * multiplier;
    }


}

module.exports = Employee;
