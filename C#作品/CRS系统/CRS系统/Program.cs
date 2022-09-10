using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRS系统
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine();
            Console.WriteLine("*******************************************************************");
            Console.WriteLine("中国银行CRS存取一体机\t服务至上    用户第一");
            Console.WriteLine("*******************************************************************");
            Console.WriteLine();
            Console.WriteLine("                      1.开户                           ");
            Console.WriteLine("                      2.登录                            ");
            Console.WriteLine("                      3.退出                            ");
            Console.WriteLine("------------------------------------------------------------------");
            Console.WriteLine();
            Console.WriteLine("请选择你需要操作的编号，按回车结束");
            int id = int.Parse(Console.ReadLine());
            if (id==1)
            {
                Console.WriteLine("请输入你的姓名");
                string name = Console.ReadLine();
                Console.WriteLine("请输入你的账户");
                string account = Console.ReadLine();
                Console.WriteLine("请输入你的密码，按回车键结束");
                bool flag = true;
                for (int i = 0; i < 3; i++)
                {//每次外层循环时，需要重新初始化flag的值为true
                    flag = true;
                    string password = Console.ReadLine();
                    if (password.Length != 6)
                    {
                        Console.WriteLine("你输入的密码长度不等于6");
                        flag = false;
                    }
                    else {
                        for (int j = 0; j <password.Length; j++)
                        {
                            //判断字符串中的每一个字符是否为数字类型
                            if (!char.IsNumber(password,j))
                            {
                                flag = false;
                                break;
                            }
                        }
                    }
                    if (flag)
                    {
                        Console.WriteLine("你输入的密码有效");
                        break;
                    }
                    else
                    {
                        if (i==2)
                        {
                            Console.WriteLine("超过三次");
                        }
                        else
                        {
                            Console.WriteLine("你输入的开户密码无效，请重新输入");
                        }
                    }
                }

                Console.WriteLine("请输入你的开户余额");
                double money = double.Parse(Console.ReadLine());
                Console.WriteLine();
                Console.WriteLine("-------------------------------------------------------------");
                Console.WriteLine("恭喜你开户成功，一下你的信息");
                Console.WriteLine("姓名：{0}",name);
                Console.WriteLine("账户：{0}",account);
                Console.WriteLine("余额：{0}",money);
                Console.WriteLine("密码：{0}",flag);
                Console.WriteLine("-------------------------------------------------------------");
                Console.WriteLine();
                Console.WriteLine("***************************存款**************************************");
                Console.WriteLine("请输入要存款的金额:");
                double deposit = double.Parse(Console.ReadLine());
                money = money + deposit;
                Console.WriteLine("存款成功，你的余额是：{0}",money);
                Console.WriteLine();
                Console.WriteLine("*****************************取款**************************************");
                Console.WriteLine("请输入你要取出的金额：元");
                deposit=double.Parse(Console.ReadLine());
                string mas = deposit > money ? "余额不足" : "取款成功，你的余额是：" + (money - deposit);
                money = money - deposit;
                Console.WriteLine(mas);
                Console.WriteLine();
                Console.WriteLine("*****************************转账**************************************");
                deposit = double.Parse(Console.ReadLine());
                money = money - deposit;
                Console.WriteLine("转账成功，你的余额是：{0}",money);
               

            }

        }
    }
}
