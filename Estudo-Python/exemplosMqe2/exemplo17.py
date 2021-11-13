
from matplotlib.pyplot import plot
from numpy import sqrt
from plotter3d import *


def exemplo8xA():
    X = np.arange(-10, 10, .1)
    Y = np.arange(-10, 10, .1)
    X, Y = np.meshgrid(X, Y)
    Z = X + Y**2
    curvaNivel(X, Y, Z, [-1,0,1,2,3,4])

exemplo8xA()