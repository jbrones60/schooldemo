export type ThemeName = 'royal-blue' | 'maroon-gold' | 'green-cream'

export interface ThemeOption {
  name: ThemeName
  label: string
  swatch: string
}

const themes: Record<ThemeName, Record<string, string>> = {
  'royal-blue': {
    '--color-primary':      '#1455d9',
    '--color-primary-dark': '#0b3a99',
    '--color-primary-soft': '#eaf1ff',
    '--color-accent':       '#f5b400',
    '--color-accent-dark':  '#d49b00',
    '--color-bg':           '#ffffff',
    '--color-bg-soft':      '#f4f7fb',
    '--color-text':         '#1f2937',
    '--color-muted':        '#6b7280',
    '--color-subtle':       '#9ca3af',
    '--color-border':       '#e5e7eb',
  },
  'maroon-gold': {
    '--color-primary':      '#800020',
    '--color-primary-dark': '#560014',
    '--color-primary-soft': '#ffe8ed',
    '--color-accent':       '#c9a84c',
    '--color-accent-dark':  '#a8883a',
    '--color-bg':           '#ffffff',
    '--color-bg-soft':      '#fdf8f0',
    '--color-text':         '#1f1a1a',
    '--color-muted':        '#7a6b6b',
    '--color-subtle':       '#9c8888',
    '--color-border':       '#ecddd5',
  },
  'green-cream': {
    '--color-primary':      '#2d6a4f',
    '--color-primary-dark': '#1b4332',
    '--color-primary-soft': '#d8f3dc',
    '--color-accent':       '#e9c46a',
    '--color-accent-dark':  '#d4a843',
    '--color-bg':           '#fffef9',
    '--color-bg-soft':      '#f5f0e8',
    '--color-text':         '#1a2e1a',
    '--color-muted':        '#6b7a6b',
    '--color-subtle':       '#8a9a8a',
    '--color-border':       '#dde5d0',
  },
}

export const themeOptions: ThemeOption[] = [
  { name: 'royal-blue',  label: 'Royal Blue',  swatch: '#1455d9' },
  { name: 'maroon-gold', label: 'Maroon Gold',  swatch: '#800020' },
  { name: 'green-cream', label: 'Green',        swatch: '#2d6a4f' },
]

const activeTheme = ref<ThemeName>('royal-blue')

export function useTheme() {
  function applyTheme(name: ThemeName) {
    if (!import.meta.client) return
    const vars = themes[name]
    const root = document.documentElement
    Object.entries(vars).forEach(([prop, val]) => {
      root.style.setProperty(prop, val)
    })
    activeTheme.value = name
  }

  return { activeTheme: readonly(activeTheme), applyTheme, themeOptions }
}
