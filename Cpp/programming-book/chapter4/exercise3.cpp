#include<iostream>
#include<vector>
#include<algorithm>

using namespace std;
int main()
{
  vector<double> distances;
  double dist = 0;
  while (cin >> dist) distances.push_back(dist);
  sort(distances.begin(),distances.end());
  cout << "The smallest distance is: " << distances[0] << "\n";
  cout << "The largest distance is: " << distances.back() << "\n";
  double  dist_sum = 0;
  for (double x : distances)  dist_sum += x;
  cout << "The mean distance is: " << dist_sum/distances.size() << "\n";
}
