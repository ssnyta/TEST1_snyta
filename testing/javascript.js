const form = document.getElementById('myForm');
        const resultParagraph = document.getElementById('result');

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const firstName = form.firstname.value;
            const city = form.city.value;

            // Funkce pro spočítání samohlásek a souhlásek
            function countVowelsAndConsonants(str) {
                const vowels = 'aeiouAEIOU';
                let vowelCount = 0;
                let consonantCount = 0;

                for (let i = 0; i < str.length; i++) {
                    if (vowels.includes(str[i])) {
                        vowelCount++;
                    } else {
                        consonantCount++;
                    }
                }

                return { vowelCount, consonantCount };
            }

            // Spočítáme samohlásky a souhlásky pro jméno a město
            const firstNameCounts = countVowelsAndConsonants(firstName);
            const cityCounts = countVowelsAndConsonants(city);

            // Sestavíme výslednou větu
            const result = `Welcome (${firstName}) from (${city}). There are ${firstNameCounts.vowelCount} vowels in your first name and ${firstNameCounts.consonantCount} consonants in your first name and there are ${cityCounts.vowelCount} vowels in your city and ${cityCounts.consonantCount} consonants in your city.`;

            resultParagraph.textContent = result;
        });