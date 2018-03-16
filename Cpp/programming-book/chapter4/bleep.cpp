#include<iostream>
#include<vector>
#include<algorithm>

using namespace std;

int main()
{
  vector<string> words;
  vector<string> disliked = {"Broccoli","Rice"};

  for (string word;cin >> word;) words.push_back(word);
  for (int i=0;i<words.size();++i)
     if (find(disliked.begin(),disliked.end(),words[i])!=disliked.end())
       cout << "BLEEP\n" ;
     else
       cout << words[i] << '\n';
}
