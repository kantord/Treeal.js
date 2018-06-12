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
    expect(() => Function((_: Specimen) => ({}))).toThrow('Undefined specimen');
  });

  it('throws error if specimen is not a function', () => {
    const _it = jest.fn();
    expect(() =>
      Function((_: Specimen) => ({
        [_(_it)]: 'foo',
      })),
    ).toThrow('Specimen is not a function');
  });
});
