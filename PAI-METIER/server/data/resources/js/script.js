function openFacture(prenom, nom, actes) {
   var width  = 600;
   var height = 400;
   var left, top;
   if(window.innerWidth) {
       left = (window.innerWidth-width)/2;
       top = (window.innerHeight-height)/2;
   }
   else {
       left = (document.body.clientWidth-width)/2;
       top = (document.body.clientHeight-height)/2;
   }
   var factureWindow = window.open('','facture','menubar=yes, scrollbars=yes, top='+top+', left='+left+', width='+width+', height='+height+'');
   factureText = afficherFacture(prenom, nom, actes);
   factureWindow.document.write(factureText);
}
