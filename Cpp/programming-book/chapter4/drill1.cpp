#include<iostream>
#include<vector>
#include<cmath>
#include<algorithm>

using namespace std;
double convert2meters(double,string);

int main()
{
  vector<double> nums_m;
  double num1=0;
  double num1_m = 0;
  string unit = "";
  vector<string> units = {"cm","m","in","ft"};
  double smallest = 0;
  double largest = 0;
  double nums_sum = 0;
  string smallestUnit = "";
  string largestUnit = "";
  while (cin>>num1>>unit)
  {
   if (find(units.begin(),units.end(),unit)!=units.end())
   {
     num1_m = convert2meters(num1,unit);
     nums_m.push_back(num1_m);
     nums_sum += num1_m;
     cout << "value " << num1 << unit << " has been converted to meters: " << num1_m << "m \n";
     if (smallest == largest && smallest == 0) 
     {
       smallest = num1_m;
       largest = num1_m;
     }
     if (num1_m < smallest) 
     {
        smallest = num1_m;
        cout << "\nthe smallest so far is: " << smallest << "m \n";
     } 
     else if (num1_m > largest)
     {
       largest = num1_m;
       cout << "\nthe largest so far is: " << largest << "m \n";
     } 
  }
  else
    cout << "\nUnit " << unit << " is not valid, value has been rejected.\n";
}
cout << "\nEntered values:\n";
for (double num : nums_m)
    cout << num << "m\n";
sort(nums_m.begin(),nums_m.end());
cout << "\nSorted entered values:\n";
for (double num : nums_m)
    cout << num << "m\n";

cout << "\nthe smallest value is: " << smallest << "m \n";
cout << "\nthe largest value is: " << largest << "m \n";

cout << "\nSum of values is: " << nums_sum << "m\n";
cout << "\nNumber of values entered: " << nums_m.size() << "\n";
}
double convert2meters(double num1, string unit)
{
  constexpr double m2cm = 100;
  constexpr double in2cm = 2.54;
  constexpr double ft2in = 12;
  if (unit=="cm")
    return num1/m2cm;
  else if (unit=="m")
    return num1;
  else if (unit=="in")
    return in2cm*num1/m2cm;
  else if (unit == "ft")
   return ft2in*in2cm*num1/m2cm;
//  cout << num1 << unit << "converted to meters equals to " << 
} 
