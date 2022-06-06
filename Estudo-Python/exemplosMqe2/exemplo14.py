from numpy import inf, sqrt
from plotter3d import *


def exemplo2x1():
    X = np.arange(-2, 2, 0.1)
    Y = np.arange(-2, 2, 0.1)
    X, Y = np.meshgrid(X, Y)
    Z = np.sqrt(1-X**2-Y**2)

    plot3D(X, Y, Z)

#exemplo2x1()

def exemplo2x2():
    X = np.arange(-2, 2, 0.01)
    Y = np.arange(-2, 2, 0.01)
    X, Y = np.meshgrid(X, Y)
    Z = (X)/(X-Y)

    plot3D(X, Y, Z, 8)


def exemplo2x3():
    X = np.arange(-2, 2, 0.1)
    Y = np.arange(-2, 2, 0.1)
    X, Y = np.meshgrid(X, Y)
    Z = (Y)/np.sqrt(X**2+Y**2-1)

    plot3D(X, Y, Z, 1)


def exemplo3xA():
    X = np.arange(-10, 10, 0.1)
    Y = np.arange(-10, 10, 0.1)
    X, Y = np.meshgrid(X, Y)
    Z = X*Y

    plot3D(X, Y, Z, 8)


def exemplo3xB():
    X = np.arange(-2, 2, 0.01)

    Y = np.arange(-2, 2, 0.01)
    X, Y = np.meshgrid(X, Y)

    Z = (X*Y)**-1

    for i in range(len(Z)):
        for j in range(len(Z[i])):
            if(Z[i][j] > 10):
                Z[i][j] = inf
            if(Z[i][j] < -10):
                Z[i][j] = -inf

    plot3D(X, Y, Z, 8)


def exemplo3xC():
    X = np.arange(-10, 10, 0.1)
    Y = np.arange(0, 20, 0.1)
    X, Y = np.meshgrid(X, Y)
    Z = np.sqrt(Y-X**2)

    plot3D(X, Y, Z, 8)


def exemplo3xD():
    X = np.arange(-6, 6, 0.01)
    Y = np.arange(-6, 6, 0.01)
    X, Y = np.meshgrid(X, Y)
    Z = 2 / (X**2+Y**2-16)

    limitZ(Z, 0.5)
    plot3D(X, Y, Z, 8)
#exemplo3xD()


def exemplo3xE():
    X = np.arange(-8, 4, 0.05)
    Y = np.arange(-2, 10, 0.05)
    X, Y = np.meshgrid(X, Y)
    Z = X / (-2*X+Y-8)

    limitZ(Z, 10)
    plot3D(X, Y, Z, 8)


def exemplo3xF():
    X = np.arange(-4, 4, 0.05)
    Y = np.arange(-4, 4, 0.05)
    X, Y = np.meshgrid(X, Y)
    Z = X / (Y-X**2-1)

    limitZ(Z, 10)
    plot3D(X, Y, Z, 8)


def exemplo3xG():
    X = np.arange(-6, 6, 0.05)
    Y = np.arange(-6, 6, 0.05)
    X, Y = np.meshgrid(X, Y)
    Z = sqrt(25-Y**2-X**2)

    limitZ(Z, 10)
    plot3D(X, Y, Z, 4)


def exemplo3xH():
    X = np.arange(-7, 7, 0.05)
    Y = np.arange(-7, 7, 0.05)
    X, Y = np.meshgrid(X, Y)
    Z = 2/sqrt(2*X**2+18*Y**2-72)

    limitZ(Z, 2)
    plot3D(X, Y, Z, 4)


def exemplo3xI():
    X = np.arange(-6, 6, 0.05)
    Y = np.arange(-2, 10, 0.05)
    X, Y = np.meshgrid(X, Y)
    Z = -5/sqrt(-9+X**2+Y)

    limitZ(Z, 10)
    plot3D(X, Y, Z, 4)


def exemplo3xJ():
    X = np.arange(-7, 7, 0.05)
    Y = np.arange(-7, 7, 0.05)
    X, Y = np.meshgrid(X, Y)
    Z = X/sqrt(4-X-2*Y)

    limitZ(Z,10)
    plot3D(X, Y, Z, 4)

exemplo3xJ()
