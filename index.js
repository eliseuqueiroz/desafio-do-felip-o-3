// desafio do felipão numero 3
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo.toLowerCase();
    }
  
    atacar() {
      let ataque;
  
      switch (this.tipo) {
        case "mago":
          ataque = "magia";
          break;
        case "guerreiro":
          ataque = "espada";
          break;
        case "monge":
          ataque = "artes marciais";
          break;
        case "ninja":
          ataque = "shuriken";
          break;
        default:
          ataque = "um ataque indefinido";
      }
  
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  const heroi1 = new Heroi("Arthas", 30, "guerreiro");
  const heroi2 = new Heroi("Merlin", 150, "mago");
  const heroi3 = new Heroi("Shifu", 60, "monge");
  const heroi4 = new Heroi("Ryu", 25, "ninja");
  
  heroi1.atacar();
  heroi2.atacar();
  heroi3.atacar();
  heroi4.atacar();
  