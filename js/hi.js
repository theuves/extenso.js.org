/**
 * Relaçar sintaxe de código JavaScript.
 *
 * Essa função não é complete sendo criada especialmente para o
 * caso de uso do site <extenso.js.org> podendo haver
 * várias falhas se usado para outros fins.
 *
 * @author Matheus Alves
 * @license MIT
 */
function hi(code) {

  // functions
  code = code.replace(
    /(\w+)\(/g,
    '<span class="hi-func">$1</span>('
  )

  // strings
  code = code.replace(
    /('.[^']*'|'')/g,
    '<span class="hi-str">$1</span>'
  )

  // object properties
  code = code.replace(
    /\b(\w+)\b\s*:/g,
    '<span class="hi-obj-prop">$1</span>:'
  )

  // comments
  code = code.replace(/(\/\/.*)/g, function (_, value) {

    // remove definições de outros tipos de dados
    // anteriores para que elas não sobreponham a definição
    // do cometário que deve ser prioridade
    value = value.replace(/<span[^>]*>(.*)<\/span>/g, '$1')

    // define coment
    value = `<span class="hi-comment">${value}</span>`
    
    return value
  })

  return code
}