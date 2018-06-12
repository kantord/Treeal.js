// @flow

import type {SpecimenDefinition, ExperimentDefinition, FrameworkRegisterFunction} from '../types'

const Function = (
	specimenDefintion: SpecimenDefinition,
	...experiments: Array<ExperimentDefinition>
) => {
	experiments
	const wrapItFunction = (_it: FrameworkRegisterFunction): string => {
		_it
		return '__specimen__'
	}
	const compiledSpecimen = specimenDefintion(wrapItFunction)

	if (!compiledSpecimen.__specimen__) throw new Error('Undefined specimen')
	if (typeof compiledSpecimen.__specimen__ !== 'function')
		throw new Error('Specimen is not a function')
}

export default Function
