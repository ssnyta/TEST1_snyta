using System.Configuration.Assemblies;

namespace factory
{
    abstract class Creator
    {
        public abstract Animal FactoryMethod(); // Tahhle metoda na bude vyprdávat instance pro třídu Animal
    }
    class Animal : Creator{
        public override Animal FactoryMethod()
        {
            return new Animal(this.race,this.type,this.age, this.noise);
        }
        public string race;
        public string type;
        public int age;
        public string noise;
        public Animal(string race, string type, int age, string noise)
        {
            this.race = race;
            this.type = type;
            this.age = age;
            this.noise =  noise;
        }
        public string MakeSomeNoise (){
           return "${this.noise}";
        }
    }
}

