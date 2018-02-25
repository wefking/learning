#include<iostream>

using namespace std;

int main()
{
    string previous = " ";
    string current;
    int number_of_words = 0;
    while(cin>>current){
        ++number_of_words;
        if(previous == current){
            cout << "Word number " << number_of_words << " repeated: " << current << "\n";
        }
        previous = current;
    }
}

