#include<iostream>
using namespace std;
int main()
{
  int count;
  cin >> count;
  string name;
  cin >> name;

  int c2=count+2;
  string s2=name+" Jr. ";
  
  int c3=count-2;
  string s3=name+" Jr. ";

  cout << "c2 is " << c2 << ", s2 is " << ", c3 is " << c3 << ", s3 is " << s3 << "\n";
}
