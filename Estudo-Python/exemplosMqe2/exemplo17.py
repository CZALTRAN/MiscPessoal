
from matplotlib.pyplot import plot
from numpy import inf, log, sqrt
from plotter3d import *


def exemplo8xA():
    X = np.arange(-10, 10, .1)
    Y = np.arange(-10, 10, .1)
    X, Y = np.meshgrid(X, Y)
    Z = X + Y**2
    curvaNivel(X, Y, Z, [-1, 0, 1, 2, 3, 4])

# exemplo8xA()


def exemplo8xB():
    X = np.arange(-6, 6, .1)
    Y = np.arange(-6, 6, .1)
    X, Y = np.meshgrid(X, Y)
    Z = log(X**2 + Y**2)
    curvaNivel(X, Y, Z, [0, 1, 2, 3])
# exemplo8xB()


def exemplo8xC():
    X = np.arange(-5, 5, .1)
    Y = np.arange(-5, 5, .1)
    X, Y = np.meshgrid(X, Y)
    Z = 2*X + 3*Y
    curvaNivel(X, Y, Z, [0, 6, 80])
# exemplo8xC()


def exemplo8xD():
    X = np.arange(-5, 5, .1)
    Y = np.arange(-5, 5, .1)
    X, Y = np.meshgrid(X, Y)
    Z = X * Y
    curvaNivel(X, Y, Z, [1, 4, 80])
# exemplo8xD()


def exemplo8xE():
    X = np.arange(-5, 5, .1)
    Y = np.arange(-2, 8, .1)
    X, Y = np.meshgrid(X, Y)
    Z = Y-X**2
    curvaNivel(X, Y, Z, [2, 4, 80])


# exemplo8xE()


def exemplo8xF():
    X = np.arange(-2, 2, .1)
    Y = np.arange(-2, 2, .1)
    X, Y = np.meshgrid(X, Y)
    Z = Y**2+X**2
    curvaNivel(X, Y, Z, [0, 1, 2, 3, 4, 5])
# exemplo8xF()


def exemplo9():
    X = np.arange(0, 100, 1)
    Y = np.arange(0, 20, 1)
    X, Y = np.meshgrid(X, Y)
    Z = X*Y**2
    curvaNivel(X, Y, Z, [0, 324, 500, 750, 1000])
# exemplo9()


def exemplo10():
    K = np.arange(0, 30000, 100)
    L = np.arange(0, 2000, 100)
    K, L = np.meshgrid(K, L)
    Q = 30 * K**(1/4) * L**(3/4)
    curvaNivel(K, L, Q, [0, 37500, 37500*2, 37500*3])
# exemplo10()


def exemplo10xC():
    K = np.arange(0, 15000, 100)
    L = np.arange(0, 15, .1)
    K, L = np.meshgrid(K, L)
    Q = 30 * K**(1/4) * L**(3/4)
    curvaNivel(L, Q, K, [0, 10000])
# exemplo10xC()


def exemplo11():
    X = np.arange(0, 20000, 1)
    Y = np.arange(0, 100, 1)
    X, Y = np.meshgrid(X, Y)
    Z = 20*X + 200*Y
    curvaNivel(X, Y, Z, [0, 100_000, 200_000, 284_000, 300_000, 400_000])
# exemplo11()


def exemplo12():
    fatorNiveis = 100000
    X = np.arange(0, 12_000, 10)
    Y = np.arange(0, 1000, 1)
    X, Y = np.meshgrid(X, Y)
    Z = 100*X + 64*Y - 0.01*X**2 - 0.25*Y**2
    curvaNivel(X, Y, Z, [-1*fatorNiveis, 0*fatorNiveis, 1*fatorNiveis,
               2*fatorNiveis, 2.5*fatorNiveis, 3*fatorNiveis ])


exemplo12()
