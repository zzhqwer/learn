using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace @for
{
    class Program
    {
        static void Main(string[] args)
        {  /*int day=5 ,x1=1,x2;
            while (day>0)
            {
                x2 = (x1 + 1) * 2;
                x1 = x2;
                day--;
            }
            Console.WriteLine(x1);
      
            Console.WriteLine("请输入十位同学的成绩");
         
            for (double i = 1; i <=10; i++)
            {
                double AVG = 0, j;
                j = Convert.ToInt32(Console.ReadLine());
    
            }*/

            /*int day,x1=1;
            for ( day = 0; day <4; day++)
            {
                x1 = (x1 + 1) * 2;
            }
            Console.WriteLine(x1);*/



            /*int i = 1;
            string name = "张三", phone = "15000000000";
            while (i<4)
            {
                Console.WriteLine("请输入你的名字和手机号");
                string n = Console.ReadLine();
                string p = Console.ReadLine();
                if (n==name&&p==phone)
                {
                    Console.WriteLine("恭喜你输入正确");
                    break;
                }
                else
                {
                    if (i==2)
                    {
                        Console.WriteLine("请重新输入：");
                    }
                }
            }
           Console.WriteLine("输出整数1到100内，能被3整除但不能被五整除的数");
            int i,num=0;
            for (i = 1; i <101; i++)
            {
                if (i%3==0&&i%5!=0)
                {
                    Console.WriteLine(i);
                    num++;
                }
            }
            Console.WriteLine("一共有：{0}个",num);
            int i, j, x = 0;
            for ( i = 0; i < 2; i++)
            {
                x++;
                for (j = 0; j <=3; j++)
                {
                    if (j%2!=0)
                    {
                        continue;

                    }
                    x++;
                }
                x++;
            }
            Console.WriteLine(x);*/
            /*int a, b;
           for ( a = 1,b=1; a <=10; ++a)
           {
               if (b>=10)break;
               if (b%3==1)
                 {
                   b += 3;
                   continue;

                 }

           }
           Console.WriteLine(a);
            int[] age;
            age=new int[1];
            age[0] =1;
            Console.WriteLine("{0}", age[0]);

            int[] age = new int[] {1,2,3 };
            Console.WriteLine("{0},{1},{2}",age[0], age[1], age[2]);
            Console.WriteLine("请输入你要输入年龄的几位");
            int x = Convert.ToInt32(Console.ReadLine());
            int[] age=new int[x];
            for (int i = 0; i <age.Length; i++)
            {
                Console.WriteLine("第{0}位的年龄。",i+1);
                age[i]=int.Parse(Console.ReadLine());
            }
            Console.WriteLine("全部年龄的{0}，{1},{2}",age[0],age[1], age[2]);


            int[] sortArray = new int[] {3,1,6,2,4,10,2,7,8,9 };
            Console.WriteLine("初始化数组");
            foreach (int i in sortArray)
            {
                Console.Write("{0}\t",i);
            }
            int n=sortArray.Length;
            for (int i = 1; i <n; i++)
            {
                for (int j = 0; j <n-1; j++)
                {
                    if (sortArray[j] > sortArray[j+1])
                    {
                        int temp;
                        temp = sortArray[j];
                        sortArray[j] = sortArray[j + 1];
                        sortArray[j + 1] = temp;
                    }
                }
            }
            Console.WriteLine();
            foreach (int i in sortArray)
            {
                Console.Write(i);
            }

            int day, x1 = 1;
            for ( day = 1; day <5; day++)
            {
                x1 = (x1 + 1) * 2;
               
            }
            Console.WriteLine(x1);*/



            int day = 0, x = 1;
            while (day<4)
            {
                x = (x + 1) * 2;
                day++;
            }
            Console.WriteLine(x);
        }

    }
}
