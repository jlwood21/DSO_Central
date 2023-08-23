from bs4 import BeautifulSoup
import glob

# Get all HTML files in the current directory
html_files = glob.glob('*.html')

for file_name in html_files:
    with open(file_name, 'r') as file:
        content = file.read()

    # Parse the HTML content
    soup = BeautifulSoup(content, 'html.parser')

    # Find all h1 tags
    h1_tags = soup.find_all('h1')

    # Iterate through h1 tags and check if they are empty or contain only whitespace
    for h1_tag in h1_tags:
        if not h1_tag.text.strip():
            # Remove the empty h1 tag
            h1_tag.decompose()

    # Write the corrected content back to the file
    with open(file_name, 'w') as file:
        file.write(str(soup))

    print(f"Corrected {file_name}")

