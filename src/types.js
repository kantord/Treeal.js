// @flow

export type Specimen = mixed
export type Experiment = mixed
export type FrameworkRegisterFunction = mixed => mixed
export type FrameworkRegisterFunctionWrapper = FrameworkRegisterFunction => string
export type SpecimenDefinition = (FrameworkRegisterFunctionWrapper) => {
  __specimen__: mixed
}
export type ExperimentDefinition = (Experiment) => Experiment
