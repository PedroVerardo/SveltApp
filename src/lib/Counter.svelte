<script>
  var valPacote = 0;
  var mesesUtilizados = 0;
  var valMensal = valPacote/12
  var valUtilizado = mesesUtilizados*valMensal
  var extorno = valPacote - mesesUtilizados*valMensal
  var multa = extorno/5

</script>
  <h1>Calculadora de multa</h1>

<div id="dynamic">
   Valor do pacote:
  <input id="valPacote" type="text" bind:value={valPacote}>
</div>
<div id="fix">
  Valor mensal: 
  <strong>{(valPacote/12).toFixed(2)}</strong>
</div>
<div id="dynamic">
  Meses de uso:
<input id="mesesDeUso"type="text" bind:value={mesesUtilizados}>
</div>
<div id="fix">
  Valor utilizado no plano:
  <strong>{(mesesUtilizados*valPacote/12).toFixed(2)}</strong>
</div>
<div id="fix">
  Extorno:
  <span><strong>{(valPacote - mesesUtilizados*valPacote/12).toFixed(2)}</strong></span>
</div>
<div id="multa">
  <h2>Multa:  {((valPacote - mesesUtilizados*valPacote/12)/5).toFixed(2)}</h2>
  
</div>



<style>
  
  
  h1 {
    margin-top: 0px;
    padding: 20px;
    border-radius: 25px;
    background-color: rgb(70, 68, 68);
    margin-bottom: 40px;
    border-left: 7px solid rgba(0, 0, 0, 1);
    border-bottom:7px solid rgba(0, 0, 0, 1);

  }
  #dynamic{
    
    margin-bottom: 25px;
    text-align: left;
  }
  div{
    font-size:larger;
  }

  #fix{
    
    margin-bottom: 25px;
    text-align: left;
  }

  #fix span{
    text-align: right;
  }
  h2{
    color: red;
  }


</style>
