import { expect, test } from 'claude-code/testing'

test('theme.set is accepted and the backdrop draws on desktop', async ($, on) => {
  on('ui.toast', () => ({ value: undefined }))
  on('ui.status', () => ({ value: undefined }))
  let seen: any
  on('theme.set', (_, e) => { seen = e; return { value: { isDrawn: true, requestId: 'backdrop' } } })
  on('session.start', (_, e) => ({ cwd: e.cwd }))
  await $.session.start({ cwd: '/', surface: 'desktop', isInteractive: true })
  expect(seen?.backdrop).toBeDefined()

  const ui = await $.ui.mount({
    plugin: 'admiral-office', component: 'Backdrop', requestId: 'backdrop', surface: 'desktop',
    props: { ...seen.backdrop, plugin: 'admiral-office', glass: { blur: 14, opacity: 0.82 } },
  } as any)
  const svg = await ui.find({ type: 'Svg' } as any)
  expect(svg).toBeTruthy()
  await ui.unmount()
})
