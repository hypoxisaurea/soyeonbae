import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

// The site uses root-relative routes locally. Scope generated links to the
// GitHub project path, including language links, images and Astro assets.
const base = '/soyeonbae';
const origin = 'https://hypoxisaurea.github.io';
function scope(url) {
  if (url.startsWith(origin + '/')) return origin + scope(url.slice(origin.length));
  if (!url.startsWith('/') || url.startsWith('//') || url === base || url.startsWith(base + '/')) return url;
  return base + url;
}
async function visit(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) await visit(path);
    else if (entry.name.endsWith('.html')) {
      const html = await readFile(path, 'utf8');
      await writeFile(path, html.replace(/\b(href|src|content|action)="([^"]*)"/g,
        (_, attribute, url) => `${attribute}="${scope(url)}"`));
    }
  }
}
await visit('dist');
await writeFile('dist/.nojekyll', '');
