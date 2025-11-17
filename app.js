import express from 'express';
import cors from 'cors';

const server = express();
server.use(express.json());
server.use(cors());


server.get('/helloword', (req, resp) => {
    resp.send({mensagem: 'Hello Word 7--7'});

})

server.get('/mensagem', (req, resp) => {
    resp.send({mensagem: 'ola eae'});
})

server.get('/v2/mensagem', (req, resp) => {
    resp.send({mensagem: 'ola ea v2'});
})

server.get('/mensagem/ocupado', (req, resp) => {
    resp.send({mensagem: 'ola estou ocupado no momento'});
})

server.get('/mensagem/ocupado/recado', (req, resp) => {
    resp.send({mensagem: 'ola, estou ocupado no momento mande recado no email ****'});
})

server.get('/calculadora/somar/:n1/:n2', (req, resp) => {
    let n1 =  Number(req.params.n1);
    let n2 = Number(req.params.n2);
    
    let somar = n1 + n2;
    resp.status(200).send({
        soma: somar
    });
})

server.get('/calculadora/subtrair/:n1/:n2', (req, resp) => {
    let n1 =  Number(req.params.n1);
    let n2 = Number(req.params.n2);
    
    let subtrair = n1 - n2;
    resp.send({ subtrair: subtrair });
})

server.get('/v2/calculadora/somar', (req, resp) => {
    let n1 = Number(req.query.n1);
    let n2 = Number(req.query.n2);
    
    let somar = n1 + n2;
    resp.send({somar: somar});
})

server.get('/mensagem/ola', (req, resp) => {
    let nome = req.query.nome ?? 'voce';

    resp.send({nome: nome});
})

server.post('/media', (req, resp) => {
    let n1 = req.body.nota1;
    let n2 = req.body.nota2;
    let n3 = req.body.nota3;

    let media = (n1 + n2 + n3) / 3;
    resp.send({media: media});
})

server.post('/dobro', (req, resp) => {
    let nums = req.body.numeros;

    let nums2 = [];
    for(let i = 0; i > nums.lenght; i++){
        nums2[i] = nums * 2;
        resp.send({ 
          dobros: nums2,
          numeros: nums
        })
    }
})

server.post('/loja/pedido', (req, resp) => {
    let total = req.body.total;
    let parcelas = req.body.parcelas;
    let cupom = req.query.cupom;

    if(parcelas > 1){
        let juros = total * 0.05;
        total += juros;
    
    }

    if (cupom == 'QUERO100'){
        total -= 100;
    }

    resp.send({total: total});    
})


server.listen(5001, () => console.log('API SUBIU NA PORTA 5001'));