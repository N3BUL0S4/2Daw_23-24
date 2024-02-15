<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="/">
    <html>
      <head>
        <meta charset="UTF-8"/>
        <title>Vehiculos disponibles</title>
      </head>
      <body>
        <h1  style="text-decoration: underline;">Vehiculos disponibles</h1>
        <ol>
          <xsl:apply-templates select="//coche"></xsl:apply-templates>
        </ol>
      </body>
    </html>
  </xsl:template>

  <xsl:template match="coche">
    <xsl:if test="potencia >=100">
      <li>Numero de bastidor: <xsl:value-of select="@numBastidor"></xsl:value-of></li>
      <ul>
        <li>Marca: <xsl:value-of select="marca"></xsl:value-of></li>
        <li>Modelo: <xsl:value-of select="modelo"></xsl:value-of></li>
        <li>Potencia: <xsl:value-of select="potencia "></xsl:value-of></li>
      </ul>
    </xsl:if>
  </xsl:template> 
</xsl:stylesheet>