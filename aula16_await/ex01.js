// Aula 16 
//await monta parametros pega o nucleo e executa 

const atraso = () => new Promise(resolve => setTimeout(resolve,1000));
const umPorSegundo = async() => {
    await atraso(console.log('1s'));
    await atraso(console.log('2s'));
    await atraso(console.log('3s'));
}
umPorSegundo();