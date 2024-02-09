altura_maxima = []
altura_minima = []
mulheres = 0
altura_total = 0

for i in range(15):
    sexo = str(input("digite seu sexo (M \ F): "))
    altura = float(input("informe a sua altura: ")) 

    altura_maxima.append(altura)  
    altura_minima.append(altura)  
    
    altura_total = altura_total + altura

    if sexo == 'F':
        mulheres = mulheres + 1


media = altura_total / 15

print(f"Maior altura: {max(altura_maxima)}")  
print(f'Menor altura: {min(altura_minima)}')  
print(f'Altura media: {media}')
print(f'Numero de mulheres: {mulheres}')