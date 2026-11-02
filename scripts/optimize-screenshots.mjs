import { mkdirSync } from 'node:fs'
import { resolve, basename } from 'node:path'
import { spawnSync } from 'node:child_process'
import { projects } from '../src/data/content.js'

// Run locally with the WebP cwebp encoder installed. Render uses the committed output.
for (const image of projects.flatMap((project) => project.images)) {
  const name = basename(image.src, '.webp')
  const input = resolve('assets/screenshots', `${name}.png`)
  const output = resolve('public', image.src.replace(/^\//, ''))
  mkdirSync(resolve('public/images/projects'), { recursive: true })
  const result = spawnSync('cwebp', ['-lossless', '-z', '9', input, '-o', output], { stdio: 'inherit' })
  if (result.error || result.status !== 0) {
    console.error(result.error?.message || `Could not optimize ${name}`)
    process.exit(1)
  }
}
