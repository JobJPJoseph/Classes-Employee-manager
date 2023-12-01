const Employee = require('./employee');
const Manager = require('./manager');

const hobbes = new Manager('Hobbes', 1000000, 'Founder');
const calvin = new Manager('calvin', 130000, 'Director', hobbes);
const susie = new Manager('Susie', 100000, 'TA Manager', calvin);
const lily = new Employee('Lily', 90000, 'TA', susie);
const clifford = new Employee('Clifford', 90000, 'TA', susie);

const personel = [hobbes, calvin, susie, lily, clifford];

for (let i = 0; i < personel.length; i++) {
    const employee = personel[i];

    console.log(employee.calculateBonus(0.05));
}
