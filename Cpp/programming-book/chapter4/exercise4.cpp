#include<iostream>

using namespace std;

int main()
{
  int max = 100;
  int min = 0;
  int middle = 50;
  int delta = 111;
  char answer = 'n';

  cout << "Please think a number between 1 and 100\n" ;
  while (delta != 0 && answer != 'c')
  {
  cout << "If the number you are thinking is " << middle << " enter 'c' if it is less than it enter 'y' otherwise enter 'n'.\n";
  cin >> answer;
  if  (answer == 'y') 
   {
    max = middle;
    delta = (max -min)/2;
    middle = middle - delta;
    }
  else if (answer == 'n')  
   {
    min = middle;
    delta = (max -min)/2;
    middle = middle + delta;
   }
  else
    cout << "You have entered an invalid answer.\n";
  cout << "min: " << min << ", max: " << max << ", middle: " << middle << ", delta: " << delta << '\n';
  }
  cout << "The number you were thinking is " << middle << '\n';
}
