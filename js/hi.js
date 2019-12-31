function hi(code) {
  
  //
  // Functions
  //
  code = code.replace(
    /(\w+)\(/g,
    '<span class="hi-func">$1</span>('
  )

  //
  // Strings
  //
  code = code.replace(
    /('.[^']*'|'')/g,
    '<span class="hi-str">$1</span>'
  )

  //
  // Object properties
  //
  code = code.replace(
    /\b(\w+)\b\s*:/g,
    '<span class="hi-obj-prop">$1</span>:'
  )

  //
  // Comments
  //
  code = code.replace(/(\/\/.*)/g, function (_, value) {
    value = value.replace(/<span[^>]*>(.*)<\/span>/g, '$1')
    value = `<span class="hi-comment">${value}</span>`
    
    return value
  })

  return code
}