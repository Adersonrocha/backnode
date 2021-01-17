const Sequelize = require('sequelize')
//("nome do banco", "usuariodobranco", "Senha",{})
const sequelize = new Sequelize('locadora','root','',{
    host:"localhost",
    dialect:"mysql"
});


sequelize.authenticate().then(function(){
    console.log("Conectado com a base de Dados");
}).catch(function(erro){
    console.log("erro ao conectar com a base de dados "+ erro);
});


const usuario = sequelize.define("user",{
    firstname:{
        type: Sequelize.STRING
    },
    lastname:{
        type: Sequelize.STRING
    },
    cpf:{
        type: Sequelize.STRING
    }
});


usuario.sync({force:true});