var AMIVAL = 3.15;
var AISVAL = 2.65;
var DIVAL = 10.0;

var totalFacture = 0.0;

function afficherFacture(prenom, nom, actes)
{
    totalFacture = 0.0;
    var text = "<html>\n";
    text +=
            "    <head>\n\
            <title>Facture</title>\n\
            <link rel='stylesheet' type='text/css' href='../resources/css/style.css'/>\n\
            <meta http-equiv='content-type' content='text/html; charset=utf-8'/>\n\
         </head>\n\
         <body>\n";


    text += "<div class='facture'><b>Facture pour : </b>" + prenom + " " + nom + "<br/><br/>";


    // Trouver l'adresse du patient
    var xmlDoc = loadXMLDoc("../xml/cabinet.xml");
    var patients = xmlDoc.getElementsByTagName("patient");
    var i = 0;
    var found = false;
    var patient;
    while ((i < patients.length) && (!found)) {
        patient = patients[i];
        var localNom = patient.getElementsByTagName("nom")[0].childNodes[0].nodeValue;
        var localPrenom = patient.getElementsByTagName("prénom")[0].childNodes[0].nodeValue;
        if ((nom === localNom) && (prenom === localPrenom)) {
            found = true;
        }
        else {
            i++;
        }
    }


    if (found) {
        text += "<b>Adresse : </b>";
        // On rÃ©cupÃ¨re l'adresse du patient
        var adresse;
        adresse = patient.getElementsByTagName("adresse")[0];
        text += adresseToText(adresse);
        text += "<br/><br/>";

        var nSS = "0";
        nSS = patient.getElementsByTagName("numéro")[0].childNodes[0].nodeValue;

        text += "<b>Numéro de sécurité sociale : </b>" + nSS + "\n";
    }
    text += "<br/><br/>";



    // Tableau rÃ©capitulatif des Actes et de leur tarif
    text += "<table class='tableau-actes' border='1'  bgcolor='#CCCCCC'>";
    text += "<tr>";
    text += "<td><b> Type </b></td> <td><b> Clé </b></td> <td><b> Intitulé </b></td> <td><b> Coef </b></td> <td><b> Tarif (en €) </b></td>";
    text += "</tr>";

    var acteIds = actes.split(" ");
    for (var j = 0; j < acteIds.length; j++) {
        text += "<tr>";
        var acteId = acteIds[j];
        text += acteTable(acteId);
        text += "</tr>";
    }

     text += "<tr><td colspan='4'><b>Total</b></td><td>" + totalFacture + "</td></tr>\n";

     text +="</table></div>";


    text +=
            "    </body>\n\
    </html>\n";

    return text;
}

// Mise en forme d'un noeud adresse pour affichage en html
function adresseToText(adresse)
{

    var etage, numero;

    // We check if etage and numero are defined
    if (adresse.getElementsByTagName("étage")[0]) {
        etage = adresse.getElementsByTagName("étage")[0].childNodes[0].nodeValue;
    } else {
        etage = undefined;
    }

    if (adresse.getElementsByTagName("numéro")[0]) {
        numero = adresse.getElementsByTagName("numéro")    [0].childNodes[0].nodeValue;
    } else {
        numero = undefined;
    }

    var rue         = adresse.getElementsByTagName("rue")       [0].childNodes[0].nodeValue;
    var ville       = adresse.getElementsByTagName("ville")     [0].childNodes[0].nodeValue;
    var codePostal  = adresse.getElementsByTagName("codePostal")[0].childNodes[0].nodeValue;

    var str = "";

    if (numero) {
        str += numero + " ";
    }

    str += rue + ", " + ville + " " + codePostal;

    if (etage) {
        str += ", étage " + etage + ".";
    }

    return str;
}


function acteTable(acteId)
{
    var str = "";

    var xmlDoc = loadXMLDoc("../resources/actes.xml");
    var actes = xmlDoc.getElementsByTagName("acte");

    // Clé de l'acte (3 lettres)
    var cle;

    // Coef de l'acte (nombre)
    var coef;

    // Type id pour pouvoir récupérer la chaîne de caractères du type
    //  dans les sous-éléments de types
    var typeId;

    // Chaîne de caractÃ¨re du type
    var type = "";


    // Intitulé de l'acte
    var intitule;

    // Tarif = (lettre-clé)xcoefficient (utiliser les constantes
    // var AMIVAL = 3.15; var AISVAL = 2.65; et var DIVAL = 10.0;)
    // (cf  http://www.infirmiers.com/votre-carriere/ide-liberale/la-cotation-des-actes-ou-comment-utiliser-la-nomenclature.html)
    var tarif = 0.0;

    // Trouver l'acte qui correspond
    var i = 0;
    var found = false;
    while ((i < actes.length) && (!found)) {
        if (actes[i].getAttribute("id") == acteId){
            found = true;
        }
        i++;
    }

    if (found) {
        cle         =  actes[i].getAttribute("clé");
        coef        =  actes[i].getAttribute("coef");
        type        =  actes[i].getAttribute("type");
        intitule    =  actes[i].textContent;
        coeff_cle = 1;
        switch (cle) {
          case "AMI":
            coeff_cle = AMIVAL;
            break;
          case "AIS":
            coeff_cle = AISVAL;
            break;
          case "DI":
            coeff_cle = DIVAL;
            break;
          default:
            break;
        }
        tarif = coeff_cle * coef;
    }

    str += "<td>" + type + "</td>";
    str += "<td>" + cle + "</td>";
    str += "<td>" + intitule + "</td>";
    str += "<td>" + coef + "</td>";
    str += "<td>" + tarif + "</td>";
    totalFacture += tarif;

    return str;
}



// Fonction qui charge un document XML
function loadXMLDoc(docName)
{
    var xmlhttp;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.open("GET", docName, false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;

    return xmlDoc;
}
