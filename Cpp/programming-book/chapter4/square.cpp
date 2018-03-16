#include<iostream>

using namespace std;

int square_sum(int);

int main()
{

   int num = 0;
   int sqr = 0;

   cout << "Please enter the number you want to calculate the square of: \n";
   cin >> num;
   cout << "The square of " << num << " is: " << square_sum(num) << "\n";

}


int square_sum(int num)
{
  int square_num = 0;
  for (int i=1; i<=num; ++i)
      square_num+=num;
  return square_num;
}   
