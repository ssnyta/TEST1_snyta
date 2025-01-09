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

    // Funkce mi kontrolu, zda jméno či město obsahuje daný character
    const specialCharRegex = /[^a-zA-Z\sáéíóúůýčšřÁÉÍÓÚŮÝČŠŘĚěžŽŤťďĎčČ]/;
    if (specialCharRegex.test(firstName) || specialCharRegex.test(city)) {
        resultParagraph.textContent = 'Special characters are not allowed.';
        return;
    }

    // 
    const sanitizedFirstName = firstName.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const sanitizedCity = city.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    // Funkce počítá souhlásky a samohlásky
    function countVowelsAndConsonants(str) {
        const vowels = 'aeiouAEIOUáéěíóúýáäÁĚÉÍÓÚŮ';
        let vowelCount = 0;
        let consonantCount = 0;

        for (let char of str) {
            if (/[a-zA-ZáéíóúýčšřÁĚÉÍÓÚŮě]/.test(char)) {
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