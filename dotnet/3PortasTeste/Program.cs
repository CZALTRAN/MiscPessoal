using System;

namespace _3PortasTeste
{
    class Result
    {
        public bool troca { get; set; }
        public bool sucesso { get; set; }

    }

    class Jogada
    {
        private static Random random = new Random();
        public bool[] portas;
        private int primeiraEscolha;
        private bool trocouPorta;
        public Jogada()
        {
            portas = new bool[] {false,false,false};
            int portaCorreta = random.Next(0, 3);
            portas[portaCorreta] = true;
        }

        public void escolhePorta(int porta){
            this.primeiraEscolha = porta;
        }


        

    }
    class Program
    {
        static void Main(string[] args)
        {

        }



    }
}
