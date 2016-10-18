<?xml version="1.0" encoding="UTF-8"?>

<!--
    Document   : profile.xsl
    Created on : 12 octobre 2016, 12:42
    Author     : dommartj
    Description:
        Purpose of transformation follows.
-->

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0"
                xmlns:pro="http://xml.netbeans.org/Schema/profile">
    <xsl:output method="html"/>

    <!-- TODO customize transformation rules 
         syntax recommendation http://www.w3.org/TR/xslt 
    -->
    <xsl:template match="/">
        <html>
            <head>
                <title><xsl:value-of select="//pro:name"/> profile</title>
            </head>
            <body>
                <xsl:apply-templates select="//pro:name"/>
                <img>
                    <xsl:attribute name="src">
                       <xsl:value-of select="//pro:avatar"/> 
                    </xsl:attribute>
                </img>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="pro:name">
        <h2>
            <xsl:value-of select="."/>
        </h2>
    </xsl:template>

</xsl:stylesheet>
