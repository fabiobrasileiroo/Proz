#include <stdio.h>

int main() {
    int numero = 0; // Inicialize a variável numero com 0
    do {
        printf("%d",numero);
        numero = numero + 1;
    } while (numero < 10);

    return 0;
}
