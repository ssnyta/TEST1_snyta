using System.ComponentModel;

namespace Singleton
{
    class Singleton
    {
        private Singleton() { }

        private static Singleton _instance;
        private static readonly object _padlock = new object();

        public int value {get; set;}

        public static Singleton VratInstanci()
        {
            lock (_padlock)
            {
                if (_instance == null)
                {
                    _instance = new Singleton();
                }
                return _instance;
            }
        }

        public string PredstavSe(){
            return $"Wussup {value}";
        }

    }
}

