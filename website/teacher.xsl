<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<!-- TODO: Auto-generated template -->
	<html>
            <body>
                <h1 align="center">School Management System</h1>
                <div class='School' style="float:center;">
                    <h2 align="center">List of Teachers</h2>
                    <table border="2" align="center">
                        <tr bgcolor="#9acd32">
                            <th style="text-align:left">Teacher_ID</th>
                            <th style="text-align:left">Teacher_Name</th>
                            <th style="text-align:left">Subject</th>
                            <th style="text-align:left">Class</th>
                            <th style="text-align:left">Salary</th>
                        </tr>
                        <xsl:for-each select="SCHOOL/TEACHER_DETAILS">
                            <tr>
                                <td>
                                    <xsl:value-of select="Teacher_ID"/>
                                </td>
                                <td>
                                    <xsl:value-of select="Teacher_Name"/>
                                </td>
                                <td>
                                    <xsl:value-of select="Subject"/>
                                </td>
                                <td>
                                    <xsl:value-of select="Class"/>
                                </td>
                                <td>
                                    <xsl:value-of select="Salary"/>
                                </td>
                            </tr>
                        </xsl:for-each>
                    </table>
                </div>

            </body>
        </html>
	
	
	</xsl:template>
</xsl:stylesheet>