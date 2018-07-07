import * as faker from 'faker';
import { Cake } from './cake';

export function mockCakeFactory(): Cake { 
  return { 
    id: faker.random.uuid(), 
    name: faker.name.firstName(), 
    comment: faker.name.text(),
    imageUrl: faker.name.text(),
    yumFactor: faker.random.number()
  }
}