describe("Suíte de testes de subtração", function() {

  var Calculadora = require('../../src/js/calculadora.js');

  it("Deve retornar 5 para 8 e 3", function() {
    expect(Calculadora.subtrair(8, 3)).toEqual(5);
  });

  it("Deve retornar 6 para 9 e 3 no formato texto", function() {
    expect(Calculadora.subtrair('9', '3')).toEqual(6);
  });

  it("Deve retornar 4 para 5.5 e 1.5", function() {
    expect(Calculadora.subtrair('5.5', '1.5')).toEqual(4);
  });

  it("Deve retornar 0 quando valor 1 não for numérico", function() {
    expect(Calculadora.subtrair(undefined, 10)).toEqual(0);
  });

  it("Deve retornar 0 quando valor 2 não for numérico", function() {
    expect(Calculadora.subtrair(10, undefined)).toEqual(0);
  });
});
