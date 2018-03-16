#include<iostream>
#include<vector>
#include<cmath>

using namespace std;
void print_values(double,double);

int main()
{
  vector<double> nums;
  double num1=0;
  double num2=0;
  while (cin>>num1>>num2)
  {
   cout << num1 << '\t' << num2 << '\n';
   if (abs(num1-num2) < 0.01) 
       cout << "the numbers are almost equal.\n";
   else if (num1 < num2) 
   {
     print_values(num1,num2);
   } 
   else if (num1 > num2)
   {
     print_values(num2,num1);
   } 
   else
    cout << "The numers are the same\n";   
  }
}




void print_values(double num1, double num2)
{
     cout << "the smaller value is: " << num1 << '\n';
     cout << "the larger value is: " << num2 << '\n';

}
