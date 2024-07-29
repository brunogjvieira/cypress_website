const faker = require('faker-br')

interface Person {
  name: string;
  lastName: string;
  email: string;
  password: string;
  company: string;
  address: string;
  addressDetails: string;
  state: string;
  city: string;
  zipcode: string;
  phoneNumber: string;
  cpf: string;
  lorem: string;
  wrongEmailFormat: string;
  cardName : string;
  cardNumber : string;
  cardCvc: string;
  cardExpirationYear : string;
  cardExpirationMonth : string;
}

const generatePerson = (): Person => {
  return {
    name: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: 'Teste@123',
    company: faker.company.companyName(),
    address: faker.address.streetAddress(),
    addressDetails: 'casa',
    state: faker.address.state(),
    city: faker.address.city(),
    zipcode: faker.address.zipCode(),
    phoneNumber: faker.phone.phoneNumber(),
    cpf: faker.br.cpf(),
    lorem: faker.lorem.word(1),
    wrongEmailFormat: 'wrongEmailFormat',
    cardName : faker.finance.accountName(),
    cardNumber : faker.finance.creditCardNumber(),
    cardCvc: faker.finance.creditCardCVV(),
    cardExpirationYear : faker.date.past().getFullYear().toString(),
    cardExpirationMonth : '10'
  }
}

export default generatePerson;