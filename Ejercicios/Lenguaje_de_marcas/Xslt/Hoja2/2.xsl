<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="/">
    <html>
      <head>
        <meta charset="UTF-8"/>
        <title>Lista ordenada por potencia</title>
      </head>
      <body>
        <h1 style="text-decoration: underline;">Datos Agenda</h1>
        <table>
            <tr>
                <td>
                    CATEGORIA
                </td>
                <td>
                    NOMBRE
                </td>
                <td>
                    CIUDAD
                </td>
                <td>
                    Tipo Zona
                </td>
            </tr>
            <xsl:apply-templates select="//ficha">
            </xsl:apply-templates>
        </table>
      </body>
    </html>
  </xsl:template>

  <xsl:template match="ficha">
    <xsl:if test="@zona= 'La flota'">
        <tr style="bacgraund-color: yellow;">
            <td>
               <xsl:value-of select="@categoria"/>
            </td>
            <td>
                <xsl:value-of select="nombre"/> 
            </td>
            <td>
               <xsl:value-of select="direccion/ciudad"/>
            </td>
            <td>
                Zona Residencial
            </td>  
        </tr>  
    </xsl:if>
    <xsl:if test="@categoria= 'agente_comercial'">
        <tr style="bacgraund-color: green;">
            <td>
               <xsl:value-of select="@categoria"/>
            </td>
            <td>
                <xsl:value-of select="nombre"/> 
            </td>
            <td>
               <xsl:value-of select="direccion/ciudad"/>
            </td>
            <td>
               <xsl:value-of select="@zona"/>
            </td>
        </tr>    
    </xsl:if>    
    <xsl:if test="@categoria= 'empresa'">
        <tr>
            <td>
               <xsl:value-of select="@categoria"/>
            </td>
            <td>
                <xsl:value-of select="nombre"/> 
            </td>
            <td>
               <xsl:value-of select="direccion/ciudad"/>
            </td>
            <td>
               <xsl:value-of select="@zona"/>
            </td>
        </tr>    
    </xsl:if>
    <xsl:if test="@categoria= 'particular'">
        <tr style="bacgraund-color: yellow;">
            <td>
               <xsl:value-of select="@categoria"/>
            </td>
            <td>
                <xsl:value-of select="nombre"/> 
            </td>
            <td>
               <xsl:value-of select="direccion/ciudad"/>
            </td>
            <td>
               <xsl:value-of select="@zona"/>
            </td>
        </tr>
    </xsl:if>
  </xsl:template>
</xsl:stylesheet>