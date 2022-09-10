using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRS
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine();
            Console.WriteLine("****************************************************************");
            Console.WriteLine("中国银行CRS存取款一体机\t用户第一  服务至上");
            Console.WriteLine("****************************************************************");
            Console.WriteLine("");
            Console.WriteLine( "               1.开户                      "                                        );
            Console.WriteLine( "               2.登录                                     "                                        );
            Console.WriteLine( "               3.退出                   "                                        );
            Console.WriteLine("-------------------------------------------------------------------\n");
            Console.WriteLine("请你选择你需要操作的编号，按回车结束");
            Console.WriteLine("请输入你的名字");
            string name =(Console.ReadLine());
            Console.WriteLine("请输入开户账号");
            int counet = int.Parse(Console.ReadLine());
            Console.WriteLine("请输入你的密码");
            byte apassword = byte.Parse(Console.ReadLine());
            Console.WriteLine("请输入你的开户金额");
            double money = double.Parse(Console.ReadLine());
            Console.WriteLine("---------------------------------------------------------------------");
            Console.WriteLine("姓名：{0}",name);
            Console.WriteLine("账号：{0}",counet);
            Console.WriteLine("余额：{0}",money);
            Console.WriteLine("---------------------------------------------------------------------");


        }
    }
}
