from typing import Sequence
import matplotlib.pyplot as plt
import matplotlib.colors as colors
import numpy as np


def plot3D(X, Y, Z, proporcao=1, espelharZ = False):

    fig = plt.figure()
    ax = fig.gca(projection='3d')

    ax.set_xlabel('X ')
    ax.set_ylabel('Y ')
    ax.set_zlabel('Z ')
    np.floor
    colortuple = (colors.to_rgba('#FFFF4488'), colors.to_rgb('#4444FF88'))
    colorsArray = np.empty([len(X), len(Y)], dtype=tuple)
    for y in range(len(Y)):
        for x in range(len(X)):
            colorsArray[x, y] = colortuple[int(
                np.ceil(x/proporcao) + np.ceil(y/proporcao)) % len(colortuple)]

    surf = ax.plot_surface(X, Y, Z, facecolors=colorsArray, linewidth=0)
    if(espelharZ):
        surf = ax.plot_surface(X, Y, -Z, facecolors=colorsArray, linewidth=0)
    #surf = ax.plot_wireframe(X, Y, Z, linewidth=1)

    # ax.w_zaxis.set_major_locator(LinearLocator(6))
    plt.show()

def limitZ(Z, limit = 10):
    for i in range(len(Z)):
        for j in range(len(Z[i])):
            if(Z[i][j]>limit):
                Z[i][j] = np.inf
            if(Z[i][j]<-limit):
                Z[i][j] = -np.inf


def plotPontos3D(X,Y,Z):
    fig = plt.figure()
    ax = fig.add_subplot(projection='3d')
    ax.scatter(X, Y, Z, marker='o')
    ax.set_xlabel('X')
    ax.set_ylabel('Y')
    ax.set_zlabel('Z')

    plt.show()


def curvaNivel(X,Y,Z,levels):
    fig = plt.figure()
    ax = fig.add_subplot()
    curva = ax.contourf(X,Y,Z,levels)
    fig.colorbar(curva)
    plt.show()


