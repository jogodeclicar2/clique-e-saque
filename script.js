document.getElementById('sacarButton').addEventListener('click', async () => {
    const statusDiv = document.getElementById('status');
    statusDiv.textContent = 'Processando...';

    try {
        const response = await fetch('https://your-backend-url/api/sacar', { method: 'POST' });
        const data = await response.json();

        if (data.success) {
            statusDiv.textContent = 'Saque realizado com sucesso!';
        } else {
            statusDiv.textContent = 'Erro ao realizar o saque. Tente novamente.';
        }
    } catch (error) {
        console.error('Erro:', error);
        statusDiv.textContent = 'Erro na comunicação com o servidor.';
    }
});
