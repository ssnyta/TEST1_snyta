const form = document.getElementById('myForm');
const resultParagraph = document.getElementById('result');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const firstName = form.firstname.value.trim();
    const city = form.city.value.trim();

    if (!firstName || !city) {
        resultParagraph.textContent = 'Please fill out all fields.';
        return;
    }

    // Validate for special characters
    const specialCharRegex = /[^a-zA-Z\sáéíóúýčšř]/;
    if (specialCharRegex.test(firstName) || specialCharRegex.test(city)) {
        resultParagraph.textContent = 'Special characters are not allowed.';
        return;
    }

    // Validate for XSS prevention
    const sanitizedFirstName = firstName.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const sanitizedCity = city.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    // Function to count vowels and consonants
    function countVowelsAndConsonants(str) {
        const vowels = 'aeiouAEIOUáéíóúýáä';
        let vowelCount = 0;
        let consonantCount = 0;

        for (let char of str) {
            if (/[a-zA-Záéíóúýčšř]/.test(char)) {
                if (vowels.includes(char)) {
                    vowelCount++;
                } else {
                    consonantCount++;
                }
            }
        }

        return { vowelCount, consonantCount };
    }

    const firstNameCounts = countVowelsAndConsonants(sanitizedFirstName);
    const cityCounts = countVowelsAndConsonants(sanitizedCity);

    const result = `Welcome (${sanitizedFirstName}) from (${sanitizedCity}). There are ${firstNameCounts.vowelCount} vowels in your first name and ${firstNameCounts.consonantCount} consonants in your first name. There are ${cityCounts.vowelCount} vowels in your city and ${cityCounts.consonantCount} consonants in your city.`;
    resultParagraph.textContent = result;
});