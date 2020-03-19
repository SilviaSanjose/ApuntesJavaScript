'''
Ejemplo de un juego basado en una aplicacion de pantallas tkinter, para mostrar
un ejemplo sobre eventos y diferentes componentes visuales.
'''
from tkinter import *
#tkinter esta disopnible por defecto en python .Otro recurso muy usado es pyQt5

x = 0
y = 0

def click_raton (evento):
    global x, y   #global para poder usar las variables definidas fuera de la funcion
    x = evento.x
    y = evento.y
    print("x: " + str(x))
    print("y: " + str(y))
    if x >=854 and x <= 1044 and y >= 201 and y <= 273:
        print("Felicidades Adivinaste un diferencia")
    elif x >= 894 and x <=1005 and y >= 283 and y <= 1005:
        print("Felicidades, Adivinaste otra diferencia ")
    else:
        print("Esa no es la diferencia")
#end click_raton

ventana = Tk()

canvas = Canvas(ventana, width = 800, height = 600)      
#creamos objeto de la clase canvas. Se le puede dar la ventana para que lo cree en la ventana

canvas.pack(expand = YES, fill = BOTH)
imagen = PhotoImage(file= "imagen.png")    #llamamos a la imagen

canvas.create_image(0,0, image = imagen, anchor = NW)    #indicamos donde se va a situar, 0,0 esquina sup.izq.

ventana.geometry("1250x400")
ventana.title("PINCHA PARA ADIVIAR LAS DIFERENCIAS EN LA DERECHA")

#Asignamos el evento a la ventana.
ventana.bind("<Button 1>", click_raton)

ventana.mainloop()