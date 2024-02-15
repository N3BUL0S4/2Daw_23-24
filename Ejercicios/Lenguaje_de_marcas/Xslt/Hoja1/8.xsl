<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="/">
    <html>
      <head>
        <meta charset="UTF-8"/>
        <title>Lista ordenada por potencia</title>
      </head>
      <body>
        <table border="1">
          <tr>
            <h1>Vehiculos disponibles</h1>
            <table border="1">
              <tr>
                  <th>Codigo</th>
                  <th>Cargo</th>
                  <th>Nombre</th>
                  <th>Apellidos</th>
                  <th>Cuenta Banco</th>
              </tr>
           
                  <xsl:apply-templates select="//vecino">
                  <xsl:sort select="@codVecino" data-type="number" order="ascending"/>
                  </xsl:apply-templates>
            
          </table>
        </tr>
      </table>
      </body>
    </html>
  </xsl:template>

  <xsl:template match="vecinos">
    <xsl:if test="@cargo != '' ">
      <tr>
        <td>
          <xsl:value-of select="@codVecino"/>
        </td>
        <td>
          <xsl:value-of select="@cargo"/>
        </td>
        <td>
          <xsl:value-of select="nombre"/>
        </td>
        <td>
          <xsl:value-of select="apellidos"/>
        </td>
        <td>
          <xsl:value-of select="CCC"/>
        </td>
      </tr>
    </xsl:if>
  </xsl:template>

</xsl:stylesheet>