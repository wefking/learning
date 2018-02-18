#include<iostream>
//using namespace std;
int main()
{
  std::cout << "Please enter your first name (followed but 'enter'):\n";
  std::string first_name;
  std::cin >> first_name;
  std::cout << "Hello, " << first_name << "!\n";
  return 0;
}
