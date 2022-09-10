using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRS二
{
    class Program
    {
        static void Main(string[] args)
        {   //空白行
            Console.WriteLine();
            Console.WriteLine("*******************************************************************************************************");
            //文字
            Console.WriteLine("中国银行CRS存取一体机\t\t服务至上   用户第一");
            Console.WriteLine("*******************************************************************************************************");
            Console.WriteLine("\n");

            Console.WriteLine("请输入你的名字");
            string name = Console.ReadLine();
            Console.WriteLine("请你输入你的账号");
            string count =Console.ReadLine();
            Console.WriteLine("请输入你的密码");
            string apassword = Console.ReadLine();
            Console.WriteLine("请输入你的开户金额");
            double money = double.Parse(Console.ReadLine());
            Console.WriteLine("\n");
            Console.WriteLine("恭喜你开户成功，以下是你的开户信息：");
            Console.WriteLine("----------------------------------------------------------------------------------------------------------");
            Console.WriteLine("姓名：{0}",name);
            Console.WriteLine("账号：{0}",count);
            Console.WriteLine("余额：{0}",money);
            Console.WriteLine("----------------------------------------------------------------------------------------------------------");
        }
    }
}
