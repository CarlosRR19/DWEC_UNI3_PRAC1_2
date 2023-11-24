const PALABRAS = [
  "BERSERK",
  "PLUTO",
  "CLIMBER",
  "SUMMIT OF THE GODS",
  "FREESIA",
  "KAIJI",
  "JUJUTSU KAISEN",
  "DRAGON BALL",
  "ONE PIECE",
  "CHAINSAWMAN",
];

export class PalabraOculta {
  constructor() {
    this._palabra = "";
    this._intentos = 0;
    this._aciertos = 0;
  }

  getPalabra() {
    return this._palabra;
  }

  getIntentos() {
    return this._intentos;
  }

  getAciertos() {
    return this._aciertos;
  }

  setPalabra() {
    return this._palabra = PALABRAS[Math.floor(Math.random() * PALABRAS.length)];
  }

  setIntentos(intentos) {
    this._intentos = intentos;
  }

  
  setAciertos(aciertos) {
    this._aciertos = aciertos;
  }
}
