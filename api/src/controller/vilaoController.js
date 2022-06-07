import {inserirVilao,consultarVilao}from './repository/vilaoRepositor.js';


server.post('/vilao',async(req,resp)=>{
    try{
    const inserirVilao =req.body
    if(!inserirVilao.nome)
        throw new error('vilão invalido!') }
        
catch{
    resp.status(400).send
    }
});

server.get('/vilao',async(req,resp)=>{
    try{
    const resposta=await consultarVilao();
    resp.send(resposta)
    }catch(err){
        resp.status(400).send({
            erro:err.messagem
        })
    }
});

export default server;
