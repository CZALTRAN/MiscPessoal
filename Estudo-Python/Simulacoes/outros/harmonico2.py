from time import perf_counter
from matplotlib import patches
import matplotlib.pyplot as plt
import matplotlib.animation as animation
import numpy as np



pontoZero = 5

# iniciand
#plt.clf()
#plt.setp(plt.gca(), autoscale_on=False, xlim=(0, 10), ylim=(0, 10))
fig = plt.figure()
ax = fig.add_subplot(autoscale_on=False, xlim=(0, 20), ylim=(0, 20))
plt.gca().set_aspect('equal')


# desenhar peso
def criarPeso(pos):
    return patches.Rectangle((pos, 0), 1, 1,  fc='y')

# desenhar mola


def criarMola(inicio, fim):
    lineLentgh = (fim-inicio-1)/4

    lines = [
        plt.plot([0, 0.5], [0.5, 0.5], color='black')[0],
        plt.plot([0.5, 0.5+lineLentgh/2], [0.5, 0], color='black')[0],

        plt.plot([ 0.5+lineLentgh/2,  0.5+3*lineLentgh/2], [0, 1], color='black')[0],
        plt.plot([0.5+3*lineLentgh/2, 0.5+5*lineLentgh/2], [1, 0], color='black')[0],
        plt.plot([0.5+5*lineLentgh/2, 0.5+7*lineLentgh/2], [0, 1], color='black')[0],

        plt.plot([0.5+7*lineLentgh/2, fim-0.5], [1, 0.5], color='black')[0],
        plt.plot([fim-0.5, fim], [0.5, 0.5], color='black')[0]
    ]
    return lines

def animarMola(lines, inicio, fim):
    lineLentgh = (fim-inicio-1)/4
    lines[0].set_data([0, 0.5], [0.5, 0.5])
    lines[1].set_data([0.5, 0.5+lineLentgh/2], [0.5, 0])
    lines[2].set_data([ 0.5+lineLentgh/2,  0.5+3*lineLentgh/2], [0, 1])
    lines[3].set_data([0.5+3*lineLentgh/2, 0.5+5*lineLentgh/2], [1, 0])
    lines[4].set_data([0.5+5*lineLentgh/2, 0.5+7*lineLentgh/2], [0, 1])
    lines[5].set_data([0.5+7*lineLentgh/2, fim-0.5], [1, 0.5])
    lines[6].set_data([fim-0.5, fim], [0.5, 0.5])



peso = criarPeso( pontoZero)
mola = criarMola(0,pontoZero)
velVector = plt.plot([pontoZero, pontoZero+1], [pontoZero, pontoZero], color='red')[0]
accVector = plt.plot([pontoZero, pontoZero], [pontoZero, pontoZero+1], color='blue')[0]
velAccVector = plt.plot([pontoZero, pontoZero+1], [pontoZero, pontoZero+1], color='green')[0]
ax.add_patch(peso)

# capiturando o ponto inicial
#point = plt.ginput(1, timeout=-1)
#print(point)

xposMola = pontoZero
x0 = 3
v0 = 0
constElast = 2
massa = 2

def pos(t):
    omega = -constElast/massa
    return x0*np.cos(omega*t) + (v0/omega) * np.sin(omega*t)

def vel(t):
    omega = -constElast/massa
    return v0*np.cos(omega*t) - (x0*omega) * np.sin(omega*t)

def acc(x):
    return (-constElast*x)/massa




def animate(i):
    t = i/50
    posX = pos(t)
    animarMola(mola, 0,pontoZero+posX)
    peso.set_x(pontoZero+posX)
    velVector.set_data([pontoZero, pontoZero+(vel(t)/5)],[pontoZero, pontoZero])
    accVector.set_data([pontoZero, pontoZero],[pontoZero, pontoZero+(acc(posX)/5)])
    velAccVector.set_data([pontoZero, pontoZero+(vel(t)/5)],[pontoZero, pontoZero+(acc(posX)/5)])
    return *mola,peso,velVector, accVector, velAccVector


ani = animation.FuncAnimation(
    fig, animate, blit=True, interval=1000/50)
plt.show()



