console.group('Array')

const arr1 = [1,2,3,4,5,6,7,8,9,10]

const fatorial = (n) => {
    const arr = Array(n).fill(0)

    return arr.reduce ((acc, _ , cur ) => acc * (cur + 1), 1)
}

console.log(fatorial(5))

console.log('usando a propriedade map: ', arr1.map( (n) => n * 2 ) ) 
console.log('usando a propriedade filter: ', arr1.filter(n => n % 3 === 0 )) // % é o resto da divisao, entao se o resto da divisao por 3 der 0 é pq ele é um multiplo de 3, entao vai printar os multiplos de 3.


console.groupEnd()