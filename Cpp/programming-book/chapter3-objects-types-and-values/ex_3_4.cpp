#include<iostream>

using namespace std;

int main()
{

   int val1 = 0;
   int val2 = 0;
   cout << "Please enter two integer values: ";
   cin >> val1 >> val2;
   cout << "val1 is " << val1 << ", val2 is " << val2 << '\n';
   if (val1 > val2)
     cout << "val1 " << val1 << " is larger than val2 " << val2 << '\n';
   else if (val2 > val1)
     cout << "val2 " << val2 << " is larger than val1 " << val1 << '\n';
   else
     cout << "val1 and val2 have the same value " << val1 << '\n';
   cout << "the sum of val1 and val2 is equal to " << val1 + val2 << '\n';
   cout << "the difference between val1 and val2 is equal to " << val1 - val2 << '\n';
   cout << "the product of val1 and val2 is equal to " << val1 * val2 << '\n';
   cout << "the ratio of val1 and val2 is equal to " << val1 / val2 << '\n';

}
