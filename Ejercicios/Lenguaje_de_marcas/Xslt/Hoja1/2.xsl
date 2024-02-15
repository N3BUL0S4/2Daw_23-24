<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="/">
    <html>
      <head>
        <meta charset="UTF-8"/>
        <title>Lista ordenada por marca ascendente</title>
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
                <xsl:apply-templates select="//coche">
                    <xsl:sort select="marca" order="ascending"/>
                </xsl:apply-templates>
          </tr>
        </table>
      </body>
    </html>
  </xsl:template>

  <xsl:template match="coche">
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
</xsl:stylesheet>