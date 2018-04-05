#include<iostream>
#include<vector>
#include<algorithm>

using namespace std;

int main()
{
  vector<double> temps; 


  for (double temp=0; cin >> temp; )
    temps.push_back(temp);

// compute mean temperature

  double sum =0;
  for (double x : temps)  sum += x;
  cout << "Average temperature is equals to: " << sum/temps.size() << '\n';



// compute median temperature
  sort(temps.begin(),temps.end());
  cout << "Median temperature: " << temps[temps.size()/2] << '\n';

}
