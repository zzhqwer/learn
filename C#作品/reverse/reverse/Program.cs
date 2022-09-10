using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace reverse
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("请输入一个字符串：");
            string str = Console.ReadLine();
            string reverse = "";
            for (int  i= str.Length-1;i>=0; i--)
            {
                reverse += str[i];

            }
            Console.WriteLine(reverse);
            Console.ReadLine();

            double m;
            m = 1 > 0 && 42 < 234 > 3;
        }
    }
}
