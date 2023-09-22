javascript
document.getElementById('formulario').addEventListener('submit', function(event) {
 event.preventDefault(); // Previne o comportamento padrão do formulário

 // Coleta os dados do formulário
 const nome = document.getElementById('nome').value;
 const email = document.getElementById('email').value;
 const telefone = document.getElementById('telefone').value;

 // Cria um objeto com os dados do usuário
 const prestador = {
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
})