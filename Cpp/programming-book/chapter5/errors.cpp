#include<iostream>

using namespace std;
int area(int length, int width);

int main()
{

  int s1 = area(7,3);
  cout << s1;
}

int area(int length, int width)
   {
    return length*width;
}
