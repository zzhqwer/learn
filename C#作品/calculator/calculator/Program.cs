using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace calculator
{
    class Program
    {
        static void Main(string[] args)
        {
            double num1, num2, num3;
            double d;
            Console.WriteLine("计算器");
            Console.WriteLine("请输入你的被除数");
            num1=double.Parse(Console.ReadLine());
            Console.WriteLine("请输入你的除数");
            num2 = double.Parse(Console.ReadLine());
            Console.WriteLine("请输入你的加数");
            num3 = double.Parse(Console.ReadLine());
            d = num1 / num2 + num3;
            Console.WriteLine("结果：{0}",d);
        
            
        }
    }
}
