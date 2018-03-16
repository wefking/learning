#include<iostream>

using namespace std;

int main()
{
  int i = 'a';
  constexpr int lastChar = 'z';

  while (i<=lastChar)
  {
  cout << char(i) << '\t' << i << '\n';
  ++i;
  }
}
