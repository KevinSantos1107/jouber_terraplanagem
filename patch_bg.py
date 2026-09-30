import re

css_path = 'src/style.css'
with open(css_path, 'r', encoding='utf-8') as f:
    css = f.read()

# Add !important to background layers
bg_layers_old = '''
.hero__background,
.hero__slide,
.hero__video,
.hero__video-mount,
.hero__overlay {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}
'''

bg_layers_new = '''
.hero__background,
.hero__slide,
.hero__video,
.hero__video-mount,
.hero__overlay {
  position: absolute !important;
  inset: 0 !important;
  width: 100% !important;
  height: 100% !important;
  max-height: none !important;
  object-fit: cover !important;
  pointer-events: none !important;
}
'''
css = css.replace(bg_layers_old.strip(), bg_layers_new.strip())

with open(css_path, 'w', encoding='utf-8') as f:
    f.write(css)
