describe("Suíte de testes de multiplicação", function() {

    var Calculadora = require('../../src/js/calculadora.js');

    it("Deve retornar 6 para 2 e 3", function() {
      expect(Calculadora.multiplicar(2, 3)).toEqual(6);
    });

    it("Deve retornar 6 para '2' e '3' em formato texto", function() {
      expect(Calculadora.multiplicar('2', '3')).toEqual(6);
    });

    it("Deve retornar 4.5 para 1.5 e 3", function() {
      expect(Calculadora.multiplicar(1.5, 3)).toEqual(4.5);
    });

    it("Deve retornar 0 quando valor 1 não for numérico", function() {
      expect(Calculadora.multiplicar(undefined, 4)).toEqual(0);
    });

    it("Deve retornar 0 quando valor 2 não for numérico", function() {
      expect(Calculadora.multiplicar(4, undefined)).toEqual(0);
    });
});
