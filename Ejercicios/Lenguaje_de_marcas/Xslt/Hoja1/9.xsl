<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="/">
    <html>
      <head>
        <meta charset="UTF-8"/>
        <title>Lista ordenada por potencia</title>
      </head>
      <body>
        <h1 style="text-decoration: underline;">Datos de los Vecinos</h1>
        <ul>
            <xsl:apply-templates select="//vecino">
            <xsl:sort select="apellidos/apellido1" data-type="text" order="ascending"/>
            <xsl:sort select="apellidos/apellido2" data-type="text" order="ascending"/>
            </xsl:apply-templates>
        </ul>
      </body>
    </html>
  </xsl:template>

  <xsl:template match="vecino">
        <li>
          <xsl:value-of select="@codVecino"/>-<xsl:value-of select="nombre"/> <xsl:value-of select="apellidos"/>        
        </li>
  </xsl:template>

</xsl:stylesheet>