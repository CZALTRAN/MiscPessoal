from numpy import inf, sqrt
from plotter3d import *
import matplotlib.pyplot as plt


def exemplo4():
    X = [1,  2,  4, -1, 1, 0, 3]
    Y = [2, -3, -3,  2, 3, 4, 0]
    Z = [3,  1,  2, -3, 0, 3, 4]
    plotPontos3D(X, Y, Z)
#exemplo4()


def exemplo5():
    X = np.array([1, 0, -6])
    Y = np.array([1, 3,  6])
    Z = (2*X+Y)/Y
    plotPontos3D(X, Y, Z)
# exemplo5()


def exemplo6x1():
    X = np.arange(-5, 5, 1)
    Y = np.arange(-5, 5, 1)
    X, Y = np.meshgrid(X, Y)
    Z = (2*X+4*Y-8)/-3
    plot3D(X, Y, Z)
#exemplo6x1()


def exemplo6x2():
    X = np.arange(-10, 10, .1)
    Y = np.arange(-10, 10, .1)
    X, Y = np.meshgrid(X, Y)
    Z = sqrt((4*X**2 - Y**2 - 100)/-25)
    # limitZ(Y,10)
    plot3D(X, Y, Z, 8, True)
#exemplo6x2()


def exemplo6x3():
    X = np.arange(-3, 3, .05)
    Y = np.arange(-3, 3, .05)
    X, Y = np.meshgrid(X, Y)
    Z = sqrt((9-X**2 - Y**2))
    # limitZ(Y,10)
    plot3D(X, Y, Z, 8, True)
#exemplo6x3()


def exemplo7xA():
    X = np.arange(-3, 3, 1)
    Y = np.arange(-3, 3, 1)
    X, Y = np.meshgrid(X, Y)
    Z = X + Y + 1
    plot3D(X, Y, Z, 1)
exemplo7xA()


def exemplo7xB():
    X = np.arange(-5, 5, .1)
    Y = np.arange(-5, 5, .1)
    X, Y = np.meshgrid(X, Y)
    Z = X**2 + Y**2
    plot3D(X, Y, Z, 8)
exemplo7xB()

def exemplo7xC():
    X = np.arange(-10, 10, .1)
    Y = np.arange(-10, 10, .1)
    X, Y = np.meshgrid(X, Y)
    Z = sqrt(X**2 + 25 - Y**2)
    plot3D(X, Y, Z, 8, True)
exemplo7xC()

def exemplo7xD():
    X = np.arange(-6, 6, .1)
    Y = np.arange(-6, 6, .1)
    X, Y = np.meshgrid(X, Y)
    Z = sqrt(36 - X**2 - Y**2)
    plot3D(X, Y, Z, 8, True)
exemplo7xD()


plt.show()