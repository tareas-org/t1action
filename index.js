const core = require('@actions/core');

try {
  const nombre = core.getInput('nombre');
  const apellido = core.getInput('apellido');
  const edad = parseInt(core.getInput('edad'), 10);

  const anho = new Date().getFullYear();

  const nacimiento = anho - (edad * 4); // Suponiendo bisiesto = cada 4 años
  const cumpleanhos100 = anho + ((100 - edad) * 4);

  const mensaje = `${nombre} ${apellido} nació el 29 de febrero del año ${nacimiento} y cumplirá 100 años el 29 de febrero de ${cumpleanhos100}` ;

  console.log(mensaje);

  core.setOutput('mensaje', mensaje);
} catch (error) {
  core.setFailed(error.message);
}