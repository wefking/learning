#!/usr/bin/python

def maker(N):
    def action(X):
       return X ** N
    return action

f = maker(2)
print f(3)
print f(4)

g = maker(3)
print g(3)
print g(4)


def maker2(N):
    return lambda X: X ** N

h = maker2(2)
print h(3)
print h(4)

