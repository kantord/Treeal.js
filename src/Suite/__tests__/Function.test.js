// @flow

import Function from '../Function'
import type { Specimen, CompiledSpecimenDefinition } from '../../types'

describe('Function', () => {
	it('accepts correct format without any experiments', () => {
		const _it = jest.fn()
		Function((_: Specimen): CompiledSpecimenDefinition => ({
			[_(_it)]: (): mixed => (): mixed => null,
		}))
	})

	it('does not accept empty specimen definition', () => {
		expect((): mixed => Function((): CompiledSpecimenDefinition => ({}))).toThrow('Undefined specimen')
	})

	it('throws error if specimen is not a function', () => {
		const _it = jest.fn()
		expect((): mixed =>
			Function((_: Specimen): CompiledSpecimenDefinition => ({
				[_(_it)]: 'foo',
			})),
		).toThrow('Specimen is not a function')
	})
})
