import type { Register, ThemeSetArgs } from 'claude-code'

import { makeColors } from './make-colors.js'
import { SCENE } from './scene.js'

// 提督室: 昼は海図の紙と紺のインク、夜は紺の海と真鍮の金。
const { theme, problems } = makeColors({
  label: 'Admiral Office',
  roles: { accent: '#1f4f8f', danger: '#b8322a', success: '#3f7d4e', warning: '#b07a1c', pro: '#7a4f8c' },
  light: {
    gray: {
      anchors: {
        'surface-0': '#e9e2cf',
        'surface-1': '#f1ebdb',
        'surface-2': '#f8f3e6',
        'text-primary': '#14223a',
        'text-secondary': '#33435e',
        'text-muted': '#56627a',
      },
    },
  },
  dark: {
    roles: { accent: '#d4a843' },
    gray: {
      anchors: {
        'surface-0': '#0b1426',
        'surface-1': '#111c33',
        'surface-2': '#16233d',
        'surface-3': '#1b2945',
        'text-primary': '#efe6cf',
        'text-secondary': '#cbbf9f',
        'text-muted': '#a39a82',
      },
    },
  },
})

const SCENE_NAME = 'admiral-office-sea'

const LOOK: ThemeSetArgs = {
  colors: theme,
  backdrop: { scene: SCENE_NAME, glass: { blur: 14, opacity: 0.72 } },
}

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    const unpainted = problems.find(line => line.startsWith("Desktop won't paint"))

    if (unpainted !== undefined) {
      $.ui.toast(unpainted)
    }
    const set = await $.theme.set(LOOK)

    if (!set.isDrawn) {
      $.ui.status(set.reason)
    }

    return next(e)
  })

  on('ui.render', { component: 'Backdrop' }, ($, e, next) => {
    if (e.props.scene !== SCENE_NAME || (e.surface !== 'desktop' && e.surface !== 'mobile')) {
      return next(e)
    }
    const { Svg } = $.ui.resolve(e)

    return <Svg source={SCENE} alt="月下の海を進む艦隊と、海図の上でゆっくり回る羅針盤" isInteractive />
  })
}
