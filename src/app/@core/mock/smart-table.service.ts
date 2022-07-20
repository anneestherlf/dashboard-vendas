import { Injectable } from '@angular/core';
import { SmartTableData } from '../data/smart-table';

@Injectable()
export class SmartTableService extends SmartTableData {

  data = [{
    id: 1,
    firstName: 'Aline Matos da Silva',
    lastName: '58.956.853-99',
    username: 'Marcelo Alvares, 258',
    email: 'm@hotmail.com',
    age: '(33) 5589-58',
  }, {
    id: 2,
    firstName: 'Ewerton Murilo Bernardo',
    lastName: '48.958.956-98',
    username: 'Sr. do Bonfim, 85',
    email: 'evertonmurilo@gmail.com',
    age: '(18) 3696-9882',
  }, {
    id: 3,
    firstName: 'Felipe Andrade da Silva',
    lastName: '421.529.368-50',
    username: 'Av. São Cristovão, 315',
    email: 'felipe@hotmail.com',
    age: '3322-5256',
  }, {
    id: 4,
    firstName: 'Marlom de Nobrega da Silva',
    lastName: '458.582.589-9',
    username: 'Av. Marcelo Manfio, 258',
    email: 'marcelom@hotmail.com3358-9958',
    age: '3358-9958',
  }, {
    id: 5,
    firstName: 'Wellington Silva de Moraes',
    lastName: '421.529.368-50',
    username: 'Av. São Cristovão',
    email: 'wellmsilva@hotmail.com',
    age: '9758-3388',
  }, {
    id: 6,
    firstName: 'Roberta Miranda Muniz',
    lastName: '765.098.876-98',
    username: 'Boa Vista, 789',
    email: 'roberta10@gmail.com',
    age: '7654-0987',
  }, {
    id: 7,
    firstName: 'Barbara Muniz Souza',
    lastName: '654.987.765-09',
    username: 'Fernão Magalhães, 78',
    email: 'barbara@yandex.ru',
    age: '5678-0987',
  }, {
    id: 8,
    firstName: 'Sevan Borba Silva',
    lastName: '987.098.765-09',
    username: 'Bagrat Bem, 790',
    email: 'sevan@outlook.com',
    age: '98765-0987',
  }, {
    id: 9,
    firstName: 'Ruben Gomes Nascimento',
    lastName: '567.987.345-54',
    username: 'São Caetano, 87',
    email: 'ruben@gmail.com',
    age: '94312-0987',
  }, {
    id: 10,
    firstName: 'Karen Buffman Mendes',
    lastName: '786.876.098-87',
    username: 'Águia, 80',
    email: 'karen@yandex.ru',
    age: '98765-1234',
  }, {
    id: 11,
    firstName: 'José Ferreira de Campos Lima',
    lastName: '876.098.678-89',
    username: 'Jordão, 560',
    email: 'mark@gmail.com',
    age: '91234-7654',
  }, {
    id: 12,
    firstName: 'Jacobino Santos Valverde',
    lastName: '765.987.123-09',
    username: 'Av. Mariana, 320',
    email: 'jacob@yandex.ru',
    age: '90876-1234',
  }, {
    id: 13,
    firstName: 'Haiky Yushiwara',
    lastName: '345.876.234-87',
    username: 'Liberdade, 78',
    email: 'haik@outlook.com',
    age: '98765-8765',
  }, {
    id: 14,
    firstName: 'Garegina Lima Arcoverde',
    lastName: '234.456.987-34',
    username: 'Rua da verdade, 654',
    email: 'garegin@gmail.com',
    age: '97654-8765',
  }, {
    id: 15,
    firstName: 'Gregório Santos Matos',
    lastName: '544.876.544-77',
    username: 'Maria José, 890',
    email: 'gregor@yandex.ru',
    age: '91234-5678',
  }, {
    'id': 16,
    'firstName': '',
    'lastName': '',
    'username': '',
    'email': '',
    'age': '',
  }];

  getData() {
    return this.data;
  }
}
