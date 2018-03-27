#include<iostream>
#include<stdexcept>

using namespace std;

void error(string s1, string s2);

int main()
{
try {
    int i=0;
    cin >> i;
    if (!cin)  error("problem","found");
    return 0;
}
catch (exception& e) {
    cerr << "error: " << e.what() << '\n';
    return 1;
}
catch (...) {
    cerr << "Oops unknown exception!\n";
    return 2;
}

}

void error(string s1, string s2)
{
    throw runtime_error(s1+s2);
}
