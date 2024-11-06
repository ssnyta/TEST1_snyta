namespace factory
{
    class Program
    {
        static void Main(string[] args)
        {
           // Volání metody
            RunAnimalCreation();
        }

        static void RunAnimalCreation() // Metoda pro zápis zvířat
        {
            bool success = false;

            while (!success) // pokud je success false, while pokračuje
            {
                try
                {
                    Creator[] animals = new Creator[10]; // Vytvoření pole animals datového typu Creator o 10-ti prvcích

                    // cyklus pro zadávání potřebných informací ( věk, rasa, druh a zvuk )
                    for (int i = 0; i < animals.Length; i++)
                    {
                        Console.WriteLine("Rasa:");
                        string rasa = Console.ReadLine();
                        Console.WriteLine("Druh:");
                        string druh = Console.ReadLine();
                        Console.WriteLine("Věk:");
                        int vek = Int32.Parse(Console.ReadLine()); // Pokud uživatel zadá špatný formát, dostanu error. Ten se řeší v catch
                        Console.WriteLine("Zvuk:");
                        string zvuk = Console.ReadLine();
                        animals[i] = new Animal(rasa, druh, vek, zvuk); // Vytvoření instance se user inputem
                        Console.Clear();
                    }

                    // Vypsání všech vytvořených zvířat
                    foreach (Creator animal in animals)
                    {
                        Animal zvire = (Animal)animal.FactoryMethod(); // (Animal) vrací instanci v Animal datovém typu. ( ChatGPT potahal :)   )
                        Console.WriteLine($"Zvíře: {zvire.race}, Druh: {zvire.type}, Věk: {zvire.age} let, Zvuk: {zvire.MakeSomeNoise()}");
                    }

                    success = true; // Pokud nenastane žádný error, cyklus se zastaví
                }
                catch (Exception ex) // catch pro šetření errorů
                {
                    Console.WriteLine("Špatný datový typ nebo chyba v zadání. Zkuste to znovu.");
                    Console.WriteLine("Podrobnosti chyby: " + ex.Message); // Vypsání chyby ( ChatGPT znovu potahal :) ) a znovuspuštění try
                }
            }
        }
    }
}
