import { homePage, alunosPage, cursosPage, contatosPage, notFoundPage } from "./view.js"

export function route(req, res){
    if(req.method === 'GET' && req.url === "/"){
        res.writeHead(200, {"content-type": "text/html"})
        res.end(homePage())
        return
    }
    if(req.method === 'GET' && req.url === "/alunos"){
        res.writeHead(200, {"content-type": "text/html"})
        res.end(alunosPage())
        return
    }
    if(req.method === 'GET' && req.url === "/cursos"){
        res.writeHead(200, {"content-type": "text/html"})
        res.end(cursosPage())
        return
    }
    if(req.method === 'GET' && req.url === "/contatos"){
        res.writeHead(200, {"content-type": "text/html"})
        res.end(contatosPage())
        return
    }
    res.writeHead(404, {"content-type": "text/html"})
    res.end(notFoundPage())
}