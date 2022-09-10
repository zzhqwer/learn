using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace min_max
{
    class Program
    {
        static void Main(string[] args)
        {
            double a, b, c;
            Console.WriteLine("请输入你的第一个数：");
            a = double.Parse(Console.ReadLine());
            Console.WriteLine("请输入你的第二个数：");
            b = double.Parse(Console.ReadLine());
            Console.WriteLine("请输入你的第三数：");
            c = double.Parse(Console.ReadLine());
            double max, min;
            max = a > b ? a : b;
            max = max > c ? max : c;
            min = a <b ? a : b;
            min = min < c ? min : c;
            Console.WriteLine("最大值：{0},最小值：{1}",max,min);

        }
    }
}
