const faker = require('faker-br');

interface Person {
  name: string;
  lastName: string;
  email: string;
  password: string;
  company: string;
  address: string;
  state: string;
  city: string;
  zipcode: string;
  phoneNumber: string;
  cpf: string;
}

const person: Person = {
  name: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  password: 'Teste@123',
  company: faker.company.companyName(),
  address: faker.address.streetAddress(),
  state: faker.address.state(),
  city: faker.address.city(),
  zipcode: faker.address.zipCode(),
  phoneNumber: faker.phone.phoneNumber(),
  cpf: faker.br.cpf(),
};

export default person;
