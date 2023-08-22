import os

# List of HTML files to update
html_files = [
    'about.html',
    'index.html',
    'blog.html',
    'application-security-case-studies.html',
    'best-practices.html',
    'blog1.html',
    'blog2.html',
    'blog3.html',
    'blog4.html',
    'blog5.html',
    'case-studies.html',
    'cloud-security.html',
    'code-analysis.html',
    'compliance-management.html',
    'contact.html',
    'iac-security-case-studies.html',
    'incident-response.html',
    'pipeline-security-case-studies.html',
    'security-analytics.html',
    'security-automation.html',
    'security-configuration-management.html',
    'threat-modeling.html',
    'tools.html',
    'vulnerability-scanning.html'
]

for file_name in html_files:
    with open(file_name, 'r') as file:
        content = file.read()

    # Replace <div id="logo"> with <h1>
    content = content.replace('<div id="logo">', '<h1>')

    # Replace </div> with </h1> after the title
    content = content.replace('</div>', '</h1>', 1)

    with open(file_name, 'w') as file:
        file.write(content)

    print(f"Updated {file_name}")
