<?xml version="1.0" encoding="UTF-8"?>

<!--
    Document   : tri.xsl
    Created on : 12 octobre 2016, 11:05
    Author     : dommartj
    Description:
        Purpose of transformation follows.
-->

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0"
                xmlns:dic='http://xml.netbeans.org/schema/dico'>
    <xsl:output method="html" encoding="utf-8"/>
    

    <!-- TODO customize transformation rules 
         syntax recommendation http://www.w3.org/TR/xslt 
    -->
    <xsl:template match="/">
        <html>
            <head>
                <title>tri.xsl</title>
            </head>
            <body>
                <ul>
                    <xsl:apply-templates select="dic:dico/dic:mot">
                        <xsl:sort select="@niveau"/>
                        <xsl:sort select="dic:contenu"/>
                    </xsl:apply-templates> 
                    <!--
                    <xsl:apply-templates match="dic:dico/dic:mot/dic:contenu">
                        <xsl:sort select="dic:dico/dic:mot/dic:contenu/text()" order="ascending"/> 
                    </xsl:apply-templates>
                    -->
                </ul>
                    
            </body>
        </html>
    </xsl:template>
   
    <xsl:template match="dic:mot">
        <li>Niveau <xsl:value-of select="@niveau"/> : <xsl:value-of select="dic:contenu"/></li>    
    </xsl:template>

</xsl:stylesheet>
