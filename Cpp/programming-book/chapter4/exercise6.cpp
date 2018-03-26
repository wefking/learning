#include<iostream>
#include<vector>

using namespace std;

int main()
{
  vector<string> numString = {"zero", "one", "two", "three", "four", "five", "six", "seven", "eigth", "nine"};
  int inNum = 0;
  bool isNum = false;
  string inString = " ";
    
  while (true)
  {
  if (cin >> inNum)
    isNum = true;
  else
  {
    cin.clear();
    cin >> inString;
    isNum = false;
  }
  
  
  if (isNum && inNum >= 0 && inNum <= 9)
  cout << numString[inNum] << '\n';
  else
  {
  for (int x = 0; x <=9 ;++x)
    {
    if ( numString[x] == inString)
      {
      cout << x << '\n';
      break;
      }
      
     if (x == 9)  cout << "Number not valid\n";
    }
  }
 }
}

