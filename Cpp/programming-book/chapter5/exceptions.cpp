#include<iostream>

using namespace std;

constexpr int frame_width = 2;
int area(int, int);
int framed_area(int, int);
class Bad_area {};

int main()
{
    try {
        int x = -1;
        int y = 2;
        int z = 4;

        int area1 = area(x,y);
        int area2 = framed_area(1,z);
        int area3 = framed_area(y,z);
        double ratio = area1/area3;
    }
    catch (Bad_area) {
        cout << "Oops! bad arguments to area()\n";
    }
}

int area(int length, int width)
{
    if (length<=0 || width<=0) throw Bad_area{};
    return length*width;
}


int framed_area(int x, int y)
{
    return area(x-frame_width,y-frame_width);
}
