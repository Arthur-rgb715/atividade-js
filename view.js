const alunos =[
    {nome: "Pablo"},
    {nome: "Antonio"},
    {nome: "Edson"}
]
const cursos =[
    {curso: "Eng civil"},
    {curso: "TI"},
    {curso: "Quimica"}
]

function layout(titulo, conteudo) {
  return `
    <!DOCTYPE html>
    <html lang="pt-br">
      <head><meta charset="UTF-8"><title>${titulo}</title></head>
      <body>
        <nav>
          <a href="/">Início</a>
          <a href="/alunos">Alunos</a>
          <a href="/cursos">Cursos</a>
          <a href="/contatos">Contatos</a>
        </nav>
        ${conteudo}
      </body>
    </html>
  `
}

export function homePage(){
    return layout ("Início", '<h1>Bem vindo a Cruzeiro do Sul</h1>')
}
export function alunosPage(){
    const linhasAlunos = alunos.map((p) => `<tr>
        <td>${p.alunos}</td>
    </tr>`).join('')
    return layout("Alunos", `
        <h1>Nome dos alunos: </h1>
        <table>
            ${linhasAlunos}
        </table>
        `)
}
export function cursosPage(){
    const linhasCursos = cursos.map((p) => `<tr>
        <td>${p.cursos}</td>
    </tr>`).join('')
    return layout("Cursos", `
        <h1>Nome dos cursos: </h1>
        <table>
            ${linhasCursos}
        </table>
        `)
}
export function contatosPage(){
    return layout ("Contato", '<h1>Contatos</h1>')
}
export function notFoundPage(){
    return layout ("Não encontrado", '<h1>Página não encontrada</h1>')
}