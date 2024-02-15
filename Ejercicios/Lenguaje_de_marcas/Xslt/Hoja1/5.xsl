<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="/">
    <html>
      <head>
        <meta charset="UTF-8"/>
        <title>Lista ordenada por potencia</title>
      </head>
      <body>
        <h1>Vehiculos disponibles</h1>
        <table border="1">
            <tr>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Potencia</th>
            </tr>
            <tr>
                <xsl:apply-templates select="//coche" mode="todoscoche"></xsl:apply-templates>
          </tr>
        </table>
        <h1>Vehiculos 3 plazas o menos </h1>
        <table border="1">
          <tr>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Potencia</th>
          </tr>
          <tr>
              <xsl:apply-templates select="//coche" mode="plazascoche"></xsl:apply-templates>
        </tr>
      </table>
      </body>
    </html>
  </xsl:template>

  <xsl:template match="coche" mode="todoscoche">
    <tr>
    <td>
      <xsl:value-of select="marca"/>  
    </td>
    <td>
      <xsl:value-of select="modelo"/>  
    </td>
    <td>
      <xsl:value-of select="potencia"/>  
    </td>
    </tr>
  </xsl:template>
  <xsl:template match="coche" mode="plazascoche">
   <xsl:if test="plazas &lt; 3"> 
    <tr>
    <td>
      <xsl:value-of select="marca"/>  
    </td>
    <td>
      <xsl:value-of select="modelo"/>  
    </td>
    <td>
      <xsl:value-of select="potencia"/>  
    </td>
    </tr>
  </xsl:if>
  </xsl:template>
</xsl:stylesheet>