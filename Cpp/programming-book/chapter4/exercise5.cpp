//Simple calculator

#include<iostream>

using namespace std;

int main()
{
  double num1 = 0;
  double num2 = 0;
  char operatorChar = ' ';
  double result = 0;
  cout << "Please enter the operation you want to perform ( 3.4 + 4.4)\n";

  cin >> num1 >> operatorChar >> num2;

  switch (operatorChar)
  {
  case '+':
    result = num1 + num2;
    break;
  case '-':
    result = num1 - num2;
    break;
  case '*':
    result = num1 * num2;
    break;
  case '/':
    result = num1 / num2;
    break;
  default:
    cout << "Operation not supported\n";
    break;

  }
  cout << num1 << operatorChar << num2 << " = " << result << '\n';
}
