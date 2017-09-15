<?xml version='1.0' encoding='ISO-8859-1'?>
<html xsl:version='1.0' xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns='text.xml'>
<body style='font-family:Arial,helverica,sans-serif:font-size:12pt;background:#eee;'>
    <xsl:for-each select='note/info'>
        <span><xsl:value-of select='to'/></span>
        <span><xsl:value-of select='from'/></span>
        <span><xsl:value-of select='heading'/></span>
        <span><xsl:value-of select='body'/></span>
    </xsl:for-each>
    
</body>
</html>