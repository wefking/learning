#include<iostream>
#include<vector>
#include<stdexcept>

using namespace std;

int main()
{
    try {
        vector<int> v;
        for (int x;cin >>x;)
        {
            cout << "input: " << x << "\n";
            if (!cin)  cout << "Could read a proper value.\n";
            v.push_back(x);
        }
        cout << v.size();
        for (int i=0;i<=v.size()+2; ++i)
//            cout << "v[" << i << "]=="<<v[i] << '\n';
            cout << "v[" << i << "]=="<<v.at(i) << '\n';
    } catch (out_of_range) {
        cerr << "Oops! Range error\n";
        return 1;
    } catch (...) {
        cerr << "Exception: simething went wrong\n";
        return 2;
    }
}


