import json
import re

with open('index.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

css_lines = lines[8:727]
with open('style.css', 'w', encoding='utf-8') as f:
    f.writelines(css_lines)

html_body_lines = lines[730:839]

# Extract the JSON array
js_start = 844 # const allQuestions = [
js_end = 1714 # The cutoff point

json_lines = lines[js_start:js_end]
# Fix the cutoff line to make sure it's valid JSON
last_line = json_lines[-1].strip()
if last_line.endswith(','):
    last_line = last_line[:-1]
json_lines[-1] = last_line + '\n]'

json_str = "".join(json_lines)

# It's currently JS object format, need to convert to strict JSON for safety or just leave it as a JS file that defines it.
# Actually, keeping it as a JS file would bypass cross-origin issues with fetch() if they run it locally without a web server!
# GitHub pages handles it, but for local workflow, a JS file is better.
# Let's save it as questions.js
with open('questions.js', 'w', encoding='utf-8') as f:
    f.write('const allQuestions = [\n')
    f.write(json_str.split('[\n', 1)[1])

new_html = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Molecular Basis of Inheritance - NEET MCQ Quiz</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
""" + "".join(html_body_lines) + """
    <script src="questions.js"></script>
    <script src="app.js"></script>
</body>
</html>
"""

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(new_html)

print("Refactored successfully")
