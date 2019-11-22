import { flatten } from './utils'

export type Watchers = GeneratorFunction | GeneratorFunction[]

export const combineWatchers = (...args: Watchers[]): Generator[] => {
  return flatten<Watchers>(args).map((watcher: GeneratorFunction) => {
    try {
      return watcher()
    } catch (e) {
      const error =  new Error('It seems that a watcher is not a function, please check if all params of combineWatchers are of type GeneratorFunction or GeneratorFunction[]');
      error.stack = e.stack;

      throw error;
    }
  })
};
