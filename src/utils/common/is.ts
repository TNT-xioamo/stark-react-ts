export function isNull(val: null) {
  return val === null
}

export function isUndef(val: void) {
  return typeof val === 'undefined'
}

export function isNullOrUndef(val: any) {
  return isNull(val) || isUndef(val)
}