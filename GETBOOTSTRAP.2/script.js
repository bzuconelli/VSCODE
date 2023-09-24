javascript
document.getElementById('formulario').addEventListener('submit', function(event) {
 event.preventDefault(); // Previne o comportamento padrão do formulário

 // Coleta os dados do formulário
 let nome = document.getElementById('nome').value;
 let cpf = document.getElementById('cpf').value;
 let cnpj  = document.getElementById('cnpj').value;
 let servico = document.getElementById('servico')
 let cidade = document.getElementById('cidade').value;
 let bairro = document.getElementById('bairro').value;
 let rua = document.getElementById('rua')
 let numero= document.getElementById('numero').value;
})

 // Cria um objeto com os dados do usuário
 let prestador = {
    nome: nome,
    email: email,
    telefone: telefone
 };

 // Salva os dados do usuário no banco de dados
 fetch('https://650a304bf6553137159c7d16.mockapi.io/prestadores', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(prestador)
 })
 .then(response => response.json())
 .then(data => {
    console.log('Prestador de serviço cadastrado com sucesso:', data);
    // Exibe um modal de confirmação ou redireciona para outra página
 })
