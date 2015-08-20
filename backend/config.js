module.exports = {
	/*	ESTE ARCHIVO NO DEBE IR PUBLICARSE en producción x el TOKEN que contiene,
		a no ser que se quite el valor por defecto @SoyPabloSuarez*/
	TOKEN_SECRET: process.env.TOKEN_SECRET || "tokenultrasecreto",
	PORT: 3000
}
