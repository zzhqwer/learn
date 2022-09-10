using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("\n");
            Console.WriteLine("*********************************************************");
            Console.WriteLine("中国银行CRS存取一体机\t 用户第一\t服务之上");
            Console.WriteLine("*********************************************************");
            //空行
            Console.WriteLine();
            Console.WriteLine("                           1.开户                        ");
            Console.WriteLine("                           2.登录                        ");
            Console.WriteLine("                           3.退出                        ");
            Console.WriteLine("请选择你要进行的操作");
            //将字符串改为值类型
            int i = Convert.ToInt32(Console.ReadLine());
            if (i == 1)
            {
                Console.WriteLine("请输入你的名字");
                string name = Console.ReadLine();
                Console.WriteLine("请输入你的开户账号");
                string accont = Console.ReadLine();
                Console.WriteLine("请输入你的密码");
                string password = Console.ReadLine();
                Console.WriteLine("请在次输入你的密码");
                string password1 = Console.ReadLine();
                while (password!=password1)
                {
                    Console.WriteLine("两次输入的不一致，请重新输入：");
                    password1 = Console.ReadLine();//实现循环
                }
                Console.WriteLine("请输入你的开户金额");
                double money = double.Parse(Console.ReadLine());
                Console.WriteLine();
                Console.WriteLine("恭喜你开户成功下面是你的开户信息");
                Console.WriteLine("----------------------------------------------------");
                Console.WriteLine("姓名:{0},账号：{1}，开户金额：{2}", name, accont, money);
                Console.WriteLine("----------------------------------------------------");
                Console.WriteLine();


                Console.WriteLine("**************************存款***************************");
                Console.WriteLine("请输入你要存款的金额");
                double deposit= double.Parse(Console.ReadLine());
                money += deposit;
                Console.WriteLine("你现在的余额是：{0}元",money);


                Console.WriteLine("**************************取款***************************");
                Console.WriteLine("请输入你要取款的金额");
                deposit =double.Parse(Console.ReadLine());
                string s = money>=deposit ? "取款成功,你的余额是:" +(money - deposit) :"你的余额不足，取款失败";
                Console.WriteLine("你现在的余额是：{0}",s);


                Console.WriteLine("**************************转款***************************");
                Console.WriteLine("请输入你要转款的金额");
                  money = money - deposit;
                deposit = Convert.ToDouble(Console.ReadLine());
                string a = deposit >=money ? "余额不足，转款失败" : "转款成功你的余额是：" + (money - deposit);
                Console.WriteLine(a);
            }

            else if (i == 2)
            {
                Console.WriteLine("-----------------------------------------");
                Console.WriteLine("               1.余额查询                ");
                Console.WriteLine("               2.存款                    ");
                Console.WriteLine("               3.取款                    ");
                Console.WriteLine("               4.转账                    ");
                Console.WriteLine("               5.修改密码                ");
                Console.WriteLine("               6.退出                    ");
                Console.WriteLine("-----------------------------------------");
                Console.WriteLine();
                Console.WriteLine("请输入你需要进行的业务");
                //操作选项
                double money = 10;
                int code=Convert.ToInt32(Console.ReadLine());
                Console.WriteLine();
                //用switch语句进行业务操作的选择
                switch (code)
                {
                    case 1:
                        Console.WriteLine("查询成功你的余额是：{0}",money);
                        break;
                    case 2:
                        Console.WriteLine("开始用存款的方法存款...");
                        Console.WriteLine("操作成功，你现在的余额是：{0}", money);
                        break;
                    case 3:
                        Console.WriteLine("开始用取款的方法取款...");
                        Console.WriteLine("操作成功，你现在的余额是：{0}", money);
                        break;
                    case 4:
                        Console.WriteLine("开始用转账的方法转账...");
                        Console.WriteLine("操作成功，你现在的余额是：{0}", money);
                        break;
                    case 5:
                        Console.WriteLine("恭喜你已经成功的修改了密码，请牢记新密码！！！");
                        break;
                    case 6:
                        return;
                    default:
                        break;
                }

            }


            else if (i == 3)
            {
                Console.WriteLine("你选择了退出功能");
            }
            else
            {
                Console.WriteLine("没有此项功能");
            }
        }
    }
}
