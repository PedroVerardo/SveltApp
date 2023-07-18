function calcula_multa(valPacote, mesesUtilizados){
    var valMensal = valPacote/12
    var valUtilizado = mesesUtilizados*valMensal
    var extorno = valPacote - valUtilizado
    var multa = extorno/5

    alert("Valor Mensal: " +  valMensal.toFixed(2) + "\n"  + "Valor utilizado do plano: "+ valUtilizado.toFixed(2) + "\n" + "Extorno: " + extorno.toFixed(2) + "\n" + "Multa: " + multa.toFixed(2))
}