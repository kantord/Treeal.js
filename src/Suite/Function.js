// @flow

import type {SpecimenDefinition, ExperimentDefinition} from '../types';

const Function = (
  specimenDefintion: SpecimenDefinition,
  ...experiments: Array<ExperimentDefinition>
) => {
  const specimen = specimenDefintion(() => '__specimen__')

  if (!specimen.__specimen__) throw new Error('Undefined specimen')
};

export default Function
