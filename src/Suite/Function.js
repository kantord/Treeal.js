// @flow

import type {SpecimenDefinition, ExperimentDefinition} from '../types';

const Function = (
  specimenDefintion: SpecimenDefinition,
  ...experiments: Array<ExperimentDefinition>
) => {
  const environment = null;
  const wrapItFunction = _it => {
    return '__specimen__';
  };
  const compiledSpecimen = specimenDefintion(wrapItFunction);

  if (!compiledSpecimen.__specimen__) throw new Error('Undefined specimen');
  if (typeof compiledSpecimen.__specimen__ !== 'function')
    throw new Error('Specimen is not a function');
};

export default Function;
