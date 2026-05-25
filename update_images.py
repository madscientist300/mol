import re
import os

file_path = r"c:\Users\Sohan\Desktop\CF1\questions_molecular_basis.js"
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Questions that just need an image added
image_questions = {
    530: "ID 530.jpg",
    609: "ID 609.jpg",
    642: "id 642.jpg",
    672: "ID 672.jpg",
    698: "ID 698.jpg",
    793: "ID 793.jpg",
    794: "ID 794.jpg",
    815: "ID 815.jpg",
    816: "ID 816.jpg",
    832: "ID 832.jpg",
    842: "ID 842.jpg"
}

for q_id, img_name in image_questions.items():
    # Regex to find: id: <q_id>, ... \n        hots: true,
    # and insert image: "images/mol_basis/<img_name>",
    pattern = r"(id:\s*" + str(q_id) + r"\s*,.*?hots:\s*true\s*,)"
    replacement = r'\1\n        image: "images/mol_basis/' + img_name + r'",'
    content = re.sub(pattern, replacement, content, flags=re.DOTALL)

# For 558, replace options
pattern_558 = r"(id:\s*558\s*,.*?options:\s*\[).*?(\]\s*,)"
replacement_558 = r'\1\n            "images/mol_basis/ID 558 OPTION 1.jpg",\n            "images/mol_basis/ID 558 OPTION 2.jpg",\n            "images/mol_basis/ID 558 OPTION 3.jpg",\n            "images/mol_basis/ID 558 OPTION 4.jpg"\n        \2'
content = re.sub(pattern_558, replacement_558, content, flags=re.DOTALL)

# For 821, replace options
pattern_821 = r"(id:\s*821\s*,.*?options:\s*\[).*?(\]\s*,)"
replacement_821 = r'\1\n            "images/mol_basis/ID 821 OPTION 1.jpg",\n            "images/mol_basis/ID 821 OPTION 2.jpg",\n            "images/mol_basis/ID 821 OPTION 3.jpg",\n            "images/mol_basis/ID 821 OPTION 4.jpg"\n        \2'
content = re.sub(pattern_821, replacement_821, content, flags=re.DOTALL)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Replacement done!")
