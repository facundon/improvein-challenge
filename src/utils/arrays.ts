export const getUniqueValues = <T extends any>(array: T[]) => {
   let result: T[] = []
   array.forEach(item => {
      if (result.indexOf(item) < 0) {
         result.push(item)
      }
   })
   return result
}
