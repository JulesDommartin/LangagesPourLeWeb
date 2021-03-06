<?xml version="1.0" encoding="UTF-8"?>

<!--
    Document   : infirmiere.xsl
    Created on : 19 octobre 2016, 10:17
    Author     : dommartj
    Description:
        Purpose of transformation follows.
-->

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0"
                xmlns:cab="http://www.ujf-grenoble.fr/l3miage/medical"
                xmlns:act="http://www.ujf-grenoble.fr/l3miage/actes"
                >
    <xsl:output method="html"/>

    <xsl:variable name="actes" select="document('../web/actes.xml', /)/act:ngap"/>
    
    <!-- TODO customize transformation rules 
         syntax recommendation http://www.w3.org/TR/xslt 
    -->
    <xsl:param name="destinedId" select="001"/>
    <xsl:param name="infirmier" select="//cab:infirmier[@id=$destinedId]"/>        
    <xsl:template match="/">
        <html>
            <head>
                <title>Fiche infirmière : <xsl:value-of select="$infirmier/cab:nom"/></title>
                <script type="text/javascript" src="../web/js/script.js"></script>
                <link href="../web/css/secretary.css" rel="stylesheet" type="text/css"/>
            </head>
            <body>
                <div class="infirmier">
                    <h2>Bonjour <xsl:value-of select="$infirmier/cab:prénom"/>,</h2>
                    <img class="photo-infirmiere">
                        <xsl:attribute name="src">../IHM/L3M-Projet/data/<xsl:value-of select="$infirmier/cab:photo"/>
                        </xsl:attribute>
                    </img>
                    <br/>
                    <p>Aujourd'hui, vous avez <xsl:value-of select="count(//cab:patient/cab:visite[@intervenant=$destinedId])"/> patient(s)</p> 
            
                    <div class="patients">
                        <ul>
                            <xsl:apply-templates select="//cab:patient/cab:visite[@intervenant=$destinedId]/..">
                                <xsl:sort select="//cab:visite[@date]"/>
                            </xsl:apply-templates>
                        </ul>
                    </div>
                </div>
            
            </body>
            
        </html>
    </xsl:template>

    <xsl:template match="cab:patient">
        <li>
            <div class="id-patient">
                <b>Nom : </b>
                <xsl:value-of select="cab:nom"/> , 
                <b>Prénom : </b>
                <xsl:value-of select="cab:prénom"/>
                <br/>                
                <b>Adresse : </b>
                <xsl:apply-templates select="cab:adresse"/>
                <br/>
                <b>Soins : </b>
                <ul>
                    <xsl:apply-templates select="cab:visite/cab:acte"/>
                </ul>
            </div>
            <div class="options-patient">
                <button>
                    <xsl:attribute name="onclick">openFacture("<xsl:value-of select="cab:prénom"/>", "<xsl:value-of select="cab:nom"/>", "<xsl:value-of select="cab:acte"/>") 
                    </xsl:attribute>
                    Facture
                </button>
            </div>
        </li>
    </xsl:template>
    
    <xsl:template match="cab:adresse">
        <xsl:value-of select="cab:numéro"/>,
        <xsl:value-of select="cab:rue"/>,
        <xsl:value-of select="cab:codePostal"/>,
        <xsl:value-of select="cab:ville"/>,
        <xsl:value-of select="cab:etage"/>
    </xsl:template>
    
    <xsl:template match="cab:acte">
        <xsl:variable name="idActe" select="./@id"/>
        <li>
            - <xsl:value-of select="$actes/act:actes/act:acte[@id=$idActe]"/>
        </li>
    </xsl:template>

</xsl:stylesheet>
