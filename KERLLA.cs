using System;
using System.IO;

class Program
{
    static void Main()
    {
        // Criar um arquivo e escrever nele
        using (StreamWriter arquivo = File.CreateText("exemplo.txt"))
        {
            arquivo.WriteLine("Olá, mundo!");
            arquivo.WriteLine("Esta é uma linha de exemplo.");
        }

        // Ler do arquivo e imprimir na tela
        using (StreamReader arquivo = File.OpenText("exemplo.txt"))
        {
            string linha;
            while ((linha = arquivo.ReadLine()) != null)
            {
                Console.WriteLine(linha);
            }
        }

        Console.ReadLine();
    }
}
