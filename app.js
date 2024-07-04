document.getElementById('new-fact-button').addEventListener('click', fetchCatFact);

function fetchCatFact() {
    axios.get('https://catfact.ninja/fact')
        .then(response => {
            const fact = response.data.fact;
            const resultElement = document.getElementById('result');
            resultElement.textContent = fact;
            resultElement.style.display = 'block';
        })
        .catch(error => {
            console.error('Error fetching cat fact:', error);
        });
}
