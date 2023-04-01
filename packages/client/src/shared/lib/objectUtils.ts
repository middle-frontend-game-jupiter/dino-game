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

export function toSnakeCase(chars: string) {
  return chars
    .split('')
    .map((char, i) => {
      if(i !== 0 && char === char.toUpperCase()) {
        char = `_${char.toLocaleLowerCase()}`
      }

      return char 
    })
    .join('');
}

export function convertToSnakeCase(target: any) {
  return Object.keys(target)
    .reduce((acc, key) => {
      const newKey = toSnakeCase(key)

      acc[newKey] = target[key]

      return acc
    }, {} as any)
}

export function omit<T extends object, K extends keyof T>(
  data: T,
  ...props: K[]
): Omit<T, K>  {
  if (!data || !Array.isArray(props) || !props.length) {
    return data;
  }
  return props.reduce((acc, prop) => {
    const { [prop as keyof object]: prop1, ...rest } = acc;
    return rest;
  }, data);
};