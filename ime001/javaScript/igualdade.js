console.groupCollapsed('Igualdade') // collapsed é para nao abrir direto as informações

console.log('com ==', '2'  == 2)
console.log('com ===', '2'  === 2)

const hello = 'hello'
console.log('strings ==' , 'hello' == hello)
console.log('strings ===' , 'hello' === hello)

const obj1 = {
    a : 1
}

console.log('objeto == ', {a : '1'} == obj1) // false pq assim não dá tem que ser igual faz no JAVA

console.groupEnd()