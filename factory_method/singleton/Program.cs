namespace Singleton{
    class Program{
        static void Main(string[] args){
            Singleton singleton = Singleton.VratInstanci();
            Singleton singleton1 = Singleton.VratInstanci();
            singleton.value = 2;

            Console.WriteLine(singleton1.PredstavSe());
            Console.WriteLine(singleton.PredstavSe());

            if (singleton == singleton1){
                Console.WriteLine("ano");
            } else {
                Console.WriteLine("ne");
            }

        }
    }
}