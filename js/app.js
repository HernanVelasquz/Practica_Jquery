function optenerParesInpares(){
    //FIXME: ---------------------------------
    var cantidadPares = 0;
    var cantidadInpares = 0;
    var cantidadCeros = 0;
    var result = 0;
    var i = 0;
    //FIXME: ----------------------------------
    var numero = [4];

    var numero4D =parseInt( document.getElementById('numero4D').value);
    if (numero4D <= 100){
        alert("La cantidad ingresada tiene que ser mayor a 100 ;)");
    }else{
        //FIXME: ------------------------------
         while(numero4D>0){
             numero[i] = numero4D%10;
             numero4D = parseInt(numero4D/10);

             //FIXME: método para identificar el número separado anteriormente
             if(numero[i] == 0){
                 cantidadCeros ++;
            }else if(numero[i]%2 == 0){
                cantidadPares ++;            
            }else{
                cantidadInpares ++;
            }
             i++;
         } 
         
    }

    document.getElementById('pares').value = cantidadPares;
    document.getElementById('inpares').value = cantidadInpares;
    document.getElementById('ceros').value = cantidadCeros;
}