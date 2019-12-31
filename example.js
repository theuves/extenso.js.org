extenso('42')
// → 'quarenta e dois'

extenso('42', { mode: 'currency' })
// → 'quarenta e dois reais'

extenso('42')
// → 'quarenta e dois negativo'

extenso('42', { negative: 'formal' })
// → 'quarenta e dois negativo'

extenso('42', { negative: 'informal' })
// → 'menos quarenta e dois'

extenso('16', { locale: 'pt' })
// → 'dezasseis'

extenso('42', { mode: 'currency', currency: { type: 'BRL' } })
// → 'quarenta e dois reais'

extenso('42', { mode: 'currency', currency: { type: 'EUR' } })
// → 'quarenta e dois euros'

extenso('42', { number: { gender: 'f' } })
// → 'quarenta e duas'

extenso('3.14')
// → 'três inteiros e quatorze centésimos'

extenso('3.14', { number: { decimal: 'informal' } })
// → 'três vírgula quatorze'