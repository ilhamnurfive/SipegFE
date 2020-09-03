export default (params) => {
  let paramsSet = ''

  if (params) paramsSet = '?' + params

  return paramsSet
}