#include<iostream>
#include<vector>

using namespace std;
void print_values(int,int);

int main()
{
  vector<int> nums;
  int num1=0;
  int num2=0;
  while (cin>>num1>>num2)
  {
   cout << num1 << '\t' << num2 << '\n';
   if (num1 < num2) 
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



void print_values(int num1, int num2)
{
     cout << "the smaller value is: " << num1 << '\n';
     cout << "the larger value is: " << num2 << '\n';

}
