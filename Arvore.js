// Classe que representa um nó da árvore
class No {
    constructor(valor) {
        this.valor = valor;
        this.esquerda = null;
        this.direita = null;
    }
}

// Classe que representa a árvore
class Arvore {
    constructor() {
        this.raiz = null;
    }

    // Monta a árvore conforme a imagem
    montarArvoreExemplo() {
        this.raiz = new No("A");
        this.raiz.esquerda = new No("B");
        this.raiz.direita = new No("C");

        this.raiz.esquerda.esquerda = new No("D");
        this.raiz.esquerda.direita = new No("E");

        this.raiz.direita.direita = new No("F");
    }

    // Exibe os valores da árvore em ordem (esquerda, raiz, direita)
    exibirEmOrdem(no = this.raiz) {
        if (no !== null) {
            this.exibirEmOrdem(no.esquerda);
            console.log(no.valor);
            this.exibirEmOrdem(no.direita);
        }
    }
}

// Código de teste
const arvore = new Arvore();
arvore.montarArvoreExemplo();

console.log("Exibindo a árvore em ordem:");
arvore.exibirEmOrdem(); // Esperado: D B E A C F
