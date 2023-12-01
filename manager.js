const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, salary, title, manager = null) {
        super(name, salary, title, manager);
        this.employees = []; // contain Employee instances
    }

    addEmployee(employee) {
        this.employees.push(employee);
        return;
    }

    calculateBonus(multiplier) {
        return (this._totalSubSalary() + this.salary) * multiplier;
    }

    _totalSubSalary() {
        let sum = 0;

        for(let i = 0; i < this.employees.length; i++) {
            const employee = this.employees[i];

            // console.log(employee instanceof Manager);
            // this should be true because leo is an instance of
            // manager. Since manger extend from Employee, it is
            // also an instance from Employee.

            // We are getting the a call stack error bc we did not
            // slice the employees. So we end up referencing the same
            // thing everytime.
                // Since the function accepts no input, how can we
                // slice 'this.employees' array?

                    // We can reference 'employee._totalSubSalary()'
                    // It we be in 'leo' version. So 'this' would refer to
                    // 'leo''s employees.

            if (employee instanceof Manager) {
                sum += employee.salary + employee._totalSubSalary();
            } else {
                sum += employee.salary;
            }
        }

        return sum;
    }
}

module.exports = Manager;
