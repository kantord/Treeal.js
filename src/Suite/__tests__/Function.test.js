import Function from '../Function';
import type Speciment from '../../types';

describe('Function', () => {
  it('accepts correct format without any experiments', () => {
    const _it = jest.fn();
    Function((_: Specimen) => ({
      [_(it)]: (environment: Environment) => () => null,
    }));
  });

  it('does not accept empty specimen definition', () => {
    const _it = jest.fn();
    expect(() => Function((_: Specimen) => ({}))).toThrow('Undefined specimen');
  });
});
