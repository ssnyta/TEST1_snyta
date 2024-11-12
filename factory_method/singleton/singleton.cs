using System.ComponentModel;

namespace Singleton
{
    public sealed class Singleton{
        private static string name;
        private Singleton(){}
        public static Singleton VratInstanci(){
           try{return instance ;}catch{}
        }
    }
}