using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Student
{
    class Program
    {
        static void Main(string[] args)
        {
            //s使用多个一位数组分别储存学生信息（姓名、学号、年龄），并用循环遍历方式输出（使用for和foreach两种循环方式输出）
            Console.WriteLine("请输入你要储存几个学生信息");
            int a = int.Parse(Console.ReadLine());

            //姓名数组
            string[] names = new string[a];

            //学号数组
            string[] snos = new string[a];

            //年龄数组
            int[] age=new int[a];
            for (int i = 0; i < names.Length; i++)
            {
                Console.WriteLine("请输入第{0}位的姓名、学号和年龄",i+1);
                Console.Write("姓名：");
                names[i] = Console.ReadLine();
                Console.Write("学号：");
                snos[i] = Console.ReadLine();
                Console.Write("年龄：");
                age[i] = Convert.ToInt32(Console.ReadLine());
            }
            Console.WriteLine();

            Console.WriteLine("下列是学生所输出的姓名");
            foreach (string item in names)
            {
                Console.WriteLine("姓名：{0}",item);
            }

        }
    }
}
