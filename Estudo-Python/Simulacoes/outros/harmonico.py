from time import perf_counter
import matplotlib.pyplot as plt
import matplotlib.animation as animation

# iniciand
#plt.clf()
#plt.setp(plt.gca(), autoscale_on=False, xlim=(0, 10), ylim=(0, 10))
#plt.gca().set_aspect('equal')
fig = plt.figure()
ax = fig.add_subplot(autoscale_on=False, xlim=(0, 10), ylim=(0, 10))


# desenhar peso
def criarPeso(pos):
    return plt.Rectangle((pos, 0), 1, 1)

# desenhar mola


def criarMola(inicio, fim):
    lineLentgh = (fim-inicio-1)/4

    lines = [
        plt.Line2D([0, 0.5], [0.5, 0.5]),
        plt.Line2D([0.5, 0.5+lineLentgh/2], [0.5, 0]),

        plt.Line2D([ 0.5+lineLentgh/2,  0.5+3*lineLentgh/2], [0, 1]),
        plt.Line2D([0.5+3*lineLentgh/2, 0.5+5*lineLentgh/2], [1, 0]),
        plt.Line2D([0.5+5*lineLentgh/2, 0.5+7*lineLentgh/2], [0, 1]),


        plt.Line2D([0.5+7*lineLentgh/2, fim-0.5], [1, 0.5]),
        plt.Line2D([fim-0.5, fim], [0.5, 0.5])
    ]
    return lines


#peso = criarPeso( 5)
#mola = criarMola(0,5)


# capiturando o ponto inicial
#point = plt.ginput(1, timeout=-1)
#print(point)

line = plt.plot([], [])[0]



def animate(i):
    print (i)
    line.set_data([(200-i)/50,0],[0,i/50])
    return line,


ani = animation.FuncAnimation(
    fig, animate, blit=True)
plt.show()



