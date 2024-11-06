namespace factory
{

    class Program
    {
        static void Main(string[] args)
        {
            Creator []animals = new Creator[10]; // pole o n prvcích, momentálně 10-ti
            for (int i = 0; i < animals.Length; i++){
                Console.WriteLine("Rasa:");
               string rasa =  Console.ReadLine();
               Console.WriteLine("Druh:");
               string druh = Console.ReadLine();
               Console.WriteLine("Věk:");
               int vek = Int32.Parse(Console.ReadLine());
               Console.WriteLine("Zvuk:");
               string zvuk = Console.ReadLine();
               animals[i] = new Animal(rasa, druh, vek, zvuk); //Zapsání instance do pole zvířat
               Console.Clear();
            }
            foreach (Creator animal in animals)
            {
                Animal zvire = (Animal)animal.FactoryMethod(); // (Animal) vrací instanci v Animal typu
                Console.WriteLine($"Zvíře: {zvire.race}, Druh: {zvire.type}, Věk: {zvire.age} let, Zvuk: {zvire.noise}");
                
            }
        }
    }
}       