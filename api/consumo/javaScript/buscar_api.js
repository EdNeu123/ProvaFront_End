document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('userGrid');
  const errorMsg = document.getElementById('errorMessage');

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (!response.ok) throw new Error('Resposta da API não OK: ' + response.status);
      return response.json();
    })
    .then(users => {
      users.forEach(user => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h2>${user.name || 'Sem Informação'}</h2>
            <p><strong>Email:</strong> ${user.email || 'Sem Informação'}</p>
            <p><strong>Cidade:</strong> ${user.address.city || 'Sem Informação'}</p>
          `;
        grid.appendChild(card);
      });
    })
    .catch(error => {
      console.error('Erro ao consumir a API:', error);
      errorMsg.style.display = 'block';
    });
});