export const EMAIL_REGEX =
   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const parameterizeArray = (
   array: string[] | number[],
   parameterName: string
) => {
   const paramsArr = array.map(val => `${parameterName}=${val}&`)
   let params = paramsArr.join("")
   params = params.slice(0, params.length - 1)
   return params
}
