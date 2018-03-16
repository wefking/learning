#include<std_lib_facilities.h>

using namespace std;

int main()
{
   string first_name;
   string friend_name;
   char friend_sex = 'O';
   int age = 0;
   cout << "Enter the name of the person you want to write to:\n";
   cin >> first_name;
   cout << "Please enter the age of the recipient: ";
   cin >> age;
   cout << "Please enter the name of a friend:\n";
   cin >> friend_name;
   cout << "Please enter m if your friend is male and an f if your friend in female: \n";
   cin >> friend_sex;
   cout << "Dear " << first_name << ",\n\n\tHow are you? I am fine. I miss you.\n";
   cout << "Have you seen your friend " << friend_name << " lately?\n";
   if (friend_sex == 'm')
       cout << "If you see " << friend_name << " please ask him to call me.\n";
   if (friend_sex == 'f')
       cout << "If you see " << friend_name << " please ask her to call me.\n";
       cout << "I hear you just had a birthday and you are " << age << " years old.\n";
   if (age<=0 || age>=110)
       simple_error("you are kidding!\n");      
   if (age <= 12)
       cout << "Next year you will be " << age+1 << '\n';
   if (age == 17)
       cout << "Next year you will be able to vote\n";
   if (age >70)
      cout << "I hope you are enjoying retirement.\n";
   cout << "\nYours sincerely,\n\nWilliam\n\n";
}

