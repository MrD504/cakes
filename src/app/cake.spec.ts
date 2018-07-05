import { Cake } from './cake';

describe('Cake', () => {
  it('should create an instance', () => {
    expect(new Cake()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let cake = new Cake({
      name: 'cake',
      comment: 'a cake'
    });
    expect(cake.name).toEqual('cake');
    expect(cake.comment).toEqual('a cake');
  });
});