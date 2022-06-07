import { con } from './connection.js'

export async function inserirvilao (vilao){
    const comando=
    `insert into tb_vilao(id_vilao,nm_vilao,ds_maldades,bt_super_poder)
                        values(?,?,?,?)`
}
const [resposta]= await con.query (comando,[vilao.id, vilao.nome, vilao.maldades, vilao.super_poder]);
vilao.id= resposta.insertId;


export async function consultarVilao(vilao) {
    const comando= 
    `select id_vilao id,
            nm_vilao nome,
            ds_maldades maldades,
            bt_super_poder  true  `
}