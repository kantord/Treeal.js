// @flow

export type Experiment = mixed
export type FrameworkRegisterFunction = mixed => mixed
export type FrameworkRegisterFunctionWrapper = FrameworkRegisterFunction => string
export type CompiledSpecimenDefinition = {
  __specimen__?: mixed
}
export type SpecimenDefinition = (FrameworkRegisterFunctionWrapper) => CompiledSpecimenDefinition
export type Specimen = FrameworkRegisterFunctionWrapper
export type ExperimentDefinition = (Experiment) => Experiment
