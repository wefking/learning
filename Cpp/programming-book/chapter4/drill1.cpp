#include<iostream>
#include<vector>
#include<cmath>

using namespace std;
void print_values(double,double);

int main()
{
  vector<double> nums;
  double num1=0;
  double smallest = 0;
  double largest = 0;

  while (cin>>num1)
  {
   if (smallest == largest && smallest == 0) 
   {
     smallest = num1;
     largest = num1;
   }
   if (num1 < smallest) 
   {
   smallest = num1;
   } 
   else if (num1 > largest)
   {
     largest = num1;
   } 
   print_values(smallest,largest);
  }
}




void print_values(double smallest, double largest)
{
     cout << "the smalleist so far is: " << smallest << '\n';
     cout << "the largest so far is: " << largest << '\n';

}
