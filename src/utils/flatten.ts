
export const flatten = <T>(arrayToFlatten: T[]): T[] => {
  return Array.isArray(arrayToFlatten) ?
    ([] as T[]).concat(...arrayToFlatten.map(arrayMember => (Array.isArray(arrayMember) ? flatten(arrayMember) : arrayMember))) :
    []
};
