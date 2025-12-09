#!/usr/bin/env python3
"""
Calculadora simple en Python
Soporta operaciones básicas y avanzadas
"""

import math


def sumar(a, b):
    """Suma dos números"""
    return a + b


def restar(a, b):
    """Resta dos números"""
    return a - b


def multiplicar(a, b):
    """Multiplica dos números"""
    return a * b


def dividir(a, b):
    """Divide dos números"""
    if b == 0:
        return "Error: División por cero"
    return a / b


def potencia(a, b):
    """Eleva a a la potencia b"""
    return a ** b


def raiz_cuadrada(a):
    """Calcula la raíz cuadrada de un número"""
    if a < 0:
        return "Error: No se puede calcular raíz cuadrada de número negativo"
    return math.sqrt(a)


def modulo(a, b):
    """Calcula el módulo (resto) de a dividido por b"""
    if b == 0:
        return "Error: División por cero"
    return a % b


def mostrar_menu():
    """Muestra el menú de opciones"""
    print("\n" + "="*50)
    print("          CALCULADORA EN PYTHON")
    print("="*50)
    print("1.  Sumar")
    print("2.  Restar")
    print("3.  Multiplicar")
    print("4.  Dividir")
    print("5.  Potencia")
    print("6.  Raíz cuadrada")
    print("7.  Módulo (resto)")
    print("8.  Salir")
    print("="*50)


def obtener_numero(mensaje):
    """Obtiene un número del usuario con validación"""
    while True:
        try:
            return float(input(mensaje))
        except ValueError:
            print("Error: Por favor ingresa un número válido")


def calculadora():
    """Función principal de la calculadora"""
    while True:
        mostrar_menu()

        opcion = input("\nSelecciona una opción (1-8): ")

        if opcion == "8":
            print("\n¡Gracias por usar la calculadora! Hasta luego.")
            break

        if opcion not in ["1", "2", "3", "4", "5", "6", "7"]:
            print("\nOpción inválida. Por favor selecciona una opción del 1 al 8.")
            continue

        if opcion == "6":
            num = obtener_numero("Ingresa el número: ")
            resultado = raiz_cuadrada(num)
            print(f"\n√{num} = {resultado}")
        else:
            num1 = obtener_numero("Ingresa el primer número: ")
            num2 = obtener_numero("Ingresa el segundo número: ")

            if opcion == "1":
                resultado = sumar(num1, num2)
                print(f"\n{num1} + {num2} = {resultado}")
            elif opcion == "2":
                resultado = restar(num1, num2)
                print(f"\n{num1} - {num2} = {resultado}")
            elif opcion == "3":
                resultado = multiplicar(num1, num2)
                print(f"\n{num1} × {num2} = {resultado}")
            elif opcion == "4":
                resultado = dividir(num1, num2)
                print(f"\n{num1} ÷ {num2} = {resultado}")
            elif opcion == "5":
                resultado = potencia(num1, num2)
                print(f"\n{num1}^{num2} = {resultado}")
            elif opcion == "7":
                resultado = modulo(num1, num2)
                print(f"\n{num1} mod {num2} = {resultado}")

        input("\nPresiona Enter para continuar...")


if __name__ == "__main__":
    try:
        calculadora()
    except KeyboardInterrupt:
        print("\n\nPrograma interrumpido por el usuario. ¡Hasta luego!")
    except Exception as e:
        print(f"\nOcurrió un error inesperado: {e}")
