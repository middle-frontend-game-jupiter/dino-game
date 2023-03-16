export function convertToCamelCase(target: any) {
  return Object.keys(target).reduce((accum, key) => {
    const keySymbols = key.split('_') as string[]

    if (keySymbols.length >= 2) {
      const camelkey = keySymbols
        .map((s, i) => {
          if (i !== 0) {
            return s[0].toUpperCase() + s.slice(1)
          }

          return s
        })
        .join('') as string
      accum[camelkey] = target[key]
    } else {
      accum[key] = target[key]
    }

    return accum
  }, {} as any)
}
