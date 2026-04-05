<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">

<xsl:output method="html" indent="yes" encoding="UTF-8" />

<xsl:template match="/">
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Sitemap – Trovill</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #0a0a0a;
      color: #e0e0e0;
      min-height: 100vh;
      padding: 2rem;
    }

    .container {
      max-width: 960px;
      margin: 0 auto;
    }

    header {
      text-align: center;
      margin-bottom: 2.5rem;
      padding-bottom: 1.5rem;
      border-bottom: 1px solid rgba(200, 170, 110, 0.3);
    }

    h1 {
      font-size: 1.75rem;
      font-weight: 600;
      color: #c8aa6e;
      letter-spacing: 0.05em;
      margin-bottom: 0.5rem;
    }

    .subtitle {
      font-size: 0.875rem;
      color: #888;
    }

    .subtitle a {
      color: #c8aa6e;
      text-decoration: none;
    }

    .subtitle a:hover {
      text-decoration: underline;
    }

    .stats {
      display: flex;
      gap: 2rem;
      justify-content: center;
      margin-top: 1rem;
    }

    .stat {
      font-size: 0.8rem;
      color: #999;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }

    .stat strong {
      color: #c8aa6e;
      font-size: 1.25rem;
      display: block;
      margin-bottom: 0.15rem;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 2rem;
    }

    thead th {
      text-align: left;
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #888;
      padding: 0.75rem 1rem;
      border-bottom: 1px solid #222;
    }

    tbody tr {
      border-bottom: 1px solid #1a1a1a;
      transition: background 0.15s ease;
    }

    tbody tr:hover {
      background: rgba(200, 170, 110, 0.05);
    }

    td {
      padding: 0.85rem 1rem;
      font-size: 0.9rem;
    }

    td a {
      color: #e0e0e0;
      text-decoration: none;
    }

    td a:hover {
      color: #c8aa6e;
    }

    .priority {
      display: inline-block;
      width: 2.5rem;
      text-align: center;
      padding: 0.2rem 0;
      border-radius: 4px;
      font-size: 0.8rem;
      font-weight: 600;
    }

    .priority-high {
      background: rgba(200, 170, 110, 0.2);
      color: #c8aa6e;
    }

    .priority-low {
      background: rgba(255, 255, 255, 0.06);
      color: #888;
    }

    .freq {
      color: #777;
      font-size: 0.8rem;
    }

    .date {
      color: #777;
      font-size: 0.85rem;
      font-variant-numeric: tabular-nums;
    }

    .images {
      margin-top: 0.4rem;
    }

    .image-tag {
      display: inline-block;
      font-size: 0.7rem;
      padding: 0.15rem 0.5rem;
      background: rgba(200, 170, 110, 0.1);
      color: #b89a5a;
      border-radius: 3px;
      margin-right: 0.35rem;
      margin-bottom: 0.25rem;
    }

    footer {
      text-align: center;
      padding-top: 1.5rem;
      border-top: 1px solid #1a1a1a;
      font-size: 0.75rem;
      color: #555;
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <h1>Trovill Sitemap</h1>
      <p class="subtitle">XML Sitemap for <a href="https://trovill.com">trovill.com</a></p>
      <div class="stats">
        <div class="stat">
          <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)" /></strong>
          URLs
        </div>
        <div class="stat">
          <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url/image:image)" /></strong>
          Images
        </div>
      </div>
    </header>

    <table>
      <thead>
        <tr>
          <th>URL</th>
          <th>Priority</th>
          <th>Frequency</th>
          <th>Last Modified</th>
        </tr>
      </thead>
      <tbody>
        <xsl:for-each select="sitemap:urlset/sitemap:url">
          <xsl:sort select="sitemap:priority" order="descending" data-type="number" />
          <tr>
            <td>
              <a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc" /></a>
              <xsl:if test="image:image">
                <div class="images">
                  <xsl:for-each select="image:image">
                    <span class="image-tag">
                      <xsl:value-of select="image:title" />
                    </span>
                  </xsl:for-each>
                </div>
              </xsl:if>
            </td>
            <td>
              <xsl:choose>
                <xsl:when test="sitemap:priority &gt;= 0.7">
                  <span class="priority priority-high"><xsl:value-of select="sitemap:priority" /></span>
                </xsl:when>
                <xsl:otherwise>
                  <span class="priority priority-low"><xsl:value-of select="sitemap:priority" /></span>
                </xsl:otherwise>
              </xsl:choose>
            </td>
            <td class="freq"><xsl:value-of select="sitemap:changefreq" /></td>
            <td class="date"><xsl:value-of select="sitemap:lastmod" /></td>
          </tr>
        </xsl:for-each>
      </tbody>
    </table>

    <footer>
      &#169; 2026 Trovill. Generated XML Sitemap.
    </footer>
  </div>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
