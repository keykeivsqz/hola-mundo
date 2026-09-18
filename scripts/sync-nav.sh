#!/bin/bash
# Aplica partials/nav.html a todas las páginas del sitio.
set -e
TEMPLATE="partials/nav.html"

update_nav() {
  local file="$1"
  local base="$2"
  local tmp
  tmp=$(mktemp)
  sed "s#{{BASE}}#${base}#g" "$TEMPLATE" > "$tmp"
  sed -i "/<nav>/,/<\/nav>/d" "$file"
  sed -i "/<body[^>]*>/r $tmp" "$file"
  rm "$tmp"
  echo "✔ Nav actualizado en $file"
}

update_nav "index.html" ""
update_nav "trayectoria/index.html" "../"
update_nav "blog/index.html" "../"
for f in servicios/*.html; do
  update_nav "$f" "../"
done
