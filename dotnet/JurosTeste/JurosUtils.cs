using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace WMD.Utils
{
    public class JurosUtils
    {
        /// <summary>
        /// Metodo que calcula o juros efetivo de uma operação.
        /// </summary>
        /// <param name="parcelas">Lista de duplas <valor, dias> </valor></param>
        /// <param name="valorLiquido">Valor liquido liberado da operação</param>
        /// <returns>Juros efetivo mensal</returns>
        public double calculaJurosEfetivo(List<Tuple<double, double>> parcelas, double valorLiquido)
        {
            if (parcelas.Count == 0) return 0;
            var totalParcelas = parcelas.Sum(p => p.Item1);
            if (totalParcelas < valorLiquido) return 0;

            double juros = 0;
            double passo = 0.1;
            int iteracao = 0;
            bool loop = true;
            double liquidoAprox = 0;
            while(loop){
                iteracao++;
                liquidoAprox = calculaValorLiquido(parcelas, juros);
                Console.WriteLine($"Iteracao {iteracao}:\t\t{juros}\t\t{liquidoAprox}\t\t{passo}\t\t{valorLiquido}");
                if(liquidoAprox>valorLiquido)
                {
                    juros += passo;
                }
                else
                {
                    juros -= passo;
                    passo = passo/10;
                }
                
                if(Math.Abs(valorLiquido-liquidoAprox)<0.00005){
                    loop = false;
                }
                if(iteracao>1000){
                    loop = false;
                }
            }
            return Math.Pow(juros+1,30)-1;
        }

        public double calculaValorLiquido(List<Tuple<double, double>> parcelas, double jurosDia)
        {
            double ret = 0;
            foreach(var parc in parcelas)
            {
                ret += (parc.Item1) / (Math.Pow((double)jurosDia+1, (double)parc.Item2));
            }
            return ret;
        }

    }
}
