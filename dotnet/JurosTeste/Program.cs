using System;
using System.Collections.Generic;
using WMD.Utils;
namespace JurosTeste
{
    class Program
    {
        static void Main(string[] args)
        {
            JurosUtils ju = new JurosUtils();
            Console.WriteLine("Iniciando teste 0 ------------------------------");
            double juroDia = Math.Exp(Math.Log(1.06)/30)-1;
            List<Tuple<double, double>> parcelas = new List<Tuple<double, double>>();
            parcelas.Add(new Tuple<double, double>(1000,30));
            parcelas.Add(new Tuple<double, double>(1000,60));
            Console.WriteLine("  Juros teste 0:" + 0);
            Console.WriteLine("Liquido teste 0:" + ju.calculaValorLiquido(parcelas, 0));
            Console.WriteLine($"  Juros teste 1:{(juroDia)*100}");
            Console.WriteLine("Liquido teste 1:" + ju.calculaValorLiquido(parcelas, juroDia));
            Console.WriteLine("-------------------------------------------------");
            
            var jEfetivo = ju.calculaJurosEfetivo(parcelas, 1833.40);
            Console.WriteLine($"Efetivo teste 1:{jEfetivo}");
            Console.WriteLine("-------------------------------------------------");
            jEfetivo = ju.calculaJurosEfetivo(parcelas, 1783.40);
            Console.WriteLine($"Efetivo teste 2:{jEfetivo}");
            Console.WriteLine("-------------------------------------------------");
            
            List<Tuple<double, double>> parcelas2 = new List<Tuple<double, double>>();
            parcelas2.Add(new Tuple<double, double>(1564.93, 30));
            parcelas2.Add(new Tuple<double, double>(1564.93, 60));
            parcelas2.Add(new Tuple<double, double>(1564.93, 90));
            parcelas2.Add(new Tuple<double, double>(1564.93, 120));
            parcelas2.Add(new Tuple<double, double>(1564.93, 150));

            jEfetivo = ju.calculaJurosEfetivo(parcelas2, 6421.51);
            Console.WriteLine($"Efetivo teste 3:{jEfetivo}");
            Console.WriteLine("-------------------------------------------------");

            List<Tuple<double, double>> parcelas3 = new List<Tuple<double, double>>();
            jEfetivo = ju.calculaJurosEfetivo(parcelas3, 6421.51);
            Console.WriteLine($"Efetivo teste 3:{jEfetivo}");
            Console.WriteLine("-------------------------------------------------");

            
            jEfetivo = ju.calculaJurosEfetivo(parcelas2, 146421.51);
            Console.WriteLine($"Efetivo teste 3:{jEfetivo}");
            Console.WriteLine("-------------------------------------------------");
            
        }
    }
}
