export const compose =
  <R>(...fns: Array<(a: R) => R>) =>
  (value: R) =>
    fns.reduceRight((acc, fn) => fn(acc), value)
