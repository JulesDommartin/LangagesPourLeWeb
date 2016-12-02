function openFacture(prenom, nom, actes) {
   var width  = 1000;
   var height = 1000;
   if(window.innerWidth) {
       var left = (window.innerWidth-width)/2;
       var top = (window.innerHeight-height)/2;
   }
   else {
       var left = (document.body.clientWidth-width)/2;
       var top = (document.body.clientHeight-height)/2;
   }
   var factureWindow = window.open('','facture','menubar=yes, scrollbars=yes, top='+top+', left='+left+', width='+width+', height='+height+'');
   factureText = afficherFacture(prenom, nom, actes);
   factureWindow.document.write(factureText);
}