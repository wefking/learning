#include<iostream>

using namespace std;

int main()
{
    string previous = " ";  //previous word; initialize to "not a word"
    string current;         //current word
    while (cin>>current){   //read string of words. Loop is ended by givin end-of-file CTRL+D
        if (previous == current)  //check if the word is the same as last
            cout << "repeated word: " << current << "\n";
            previous = current;
    }
}

