let alunos = ["Bruno", "Ana", "Carlos", "Maria"]
let idades = [20,22,42,31]

console.log("lista de alunos:", alunos)
console.table(alunos)

// for para mostrar cada aluno
for (let i = 0; i < alunos.length; i++) {
    console.log(`O aluno(a) ${alunos[i]} tem idade ${idades[i]}`)   
}

// adiciona um novo elemento no final da array
alunos.push("Livia")
idades.push(19)

console.table(alunos)

// removendo o ultimo aluno
alunos.pop()
idades.pop()

console.table(alunos)

//adicionando aluno no comeco da array

alunos.unshift("murilo")
idades.unshift("15")

console.table(alunos)