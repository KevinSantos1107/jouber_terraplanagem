import re

with open(r'D:\Sites\Jouber Terraplanagem\src\routes\index.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Find and fix the Route export - look for the bad pattern
bad_start = 'export const Route = createFileRoute("/")(({\n'
good_start = 'export const Route = createFileRoute("/")(\n'

# Alternative approach: use regex
pattern = r'export const Route = createFileRoute\("\/"\)\(\((\{[\s\S]*?\})\) as ReturnType<typeof createFileRoute>\);'
replacement = r'export const Route = createFileRoute("/")\1);'

new_content = re.sub(pattern, replacement, content, count=1)

if new_content == content:
    print("Pattern not found via regex, trying direct replacement...")
    # Try simple string replacement
    old = 'createFileRoute("/")(({\n'
    new = 'createFileRoute("/")(\n'
    if old in new_content:
        new_content = new_content.replace(old, new, 1)
        # Also fix the closing
        old_end = '}) as ReturnType<typeof createFileRoute>);'
        new_end = '});'
        new_content = new_content.replace(old_end, new_end, 1)
        print("Fixed via direct replacement")
    else:
        print("Could not find pattern")
        idx = new_content.find('createFileRoute')
        print(repr(new_content[idx:idx+150]))
else:
    print("Fixed via regex")

with open(r'D:\Sites\Jouber Terraplanagem\src\routes\index.tsx', 'w', encoding='utf-8') as f:
    f.write(new_content)
print("Done")
