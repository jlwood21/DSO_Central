import os
import glob

# Get all HTML files in the current directory
html_files = glob.glob('*.html')

for file_name in html_files:
    with open(file_name, 'r') as file:
        content = file.read()

    # Check if the specific title is present
    if '<div id="logo">DevSecOps Central</div>' in content:
        # Replace the specific title with <h1>
        content = content.replace('<div id="logo">DevSecOps Central</div>', '<h1>DevSecOps Central</h1>')

        with open(file_name, 'w') as file:
            file.write(content)

        print(f"Updated {file_name}")
