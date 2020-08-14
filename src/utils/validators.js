export const required = (value) => {
   if (value) {
      return undefined
   } else {
      return 'Filed is required'
   }
}

export const maxLength = (count) => (value) => {
   if (value && value.length > count) {
      return `Max length ${count} symbols`
   } else {
      return undefined
   }
}