// src/tg-mock.ts
import { mockTelegramEnv, emitEvent } from '@tma.js/bridge'

if (import.meta.env.DEV) {
  const noInsets = {
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  } as const
  const themeParams = {
    accent_text_color: '#5959fa',
    bg_color: '#191833',
    bottom_bar_bg_color: '#191833',
    button_color: '#544fe9',
    button_text_color: '#ffffff',
    destructive_text_color: '#ec3942',
    header_bg_color: '#191833',
    hint_color: '#8280b8',
    link_color: '#5858fa',
    secondary_bg_color: '#292648',
    section_bg_color: '#191833',
    section_header_text_color: '#5858fa',
    section_separator_color: '#121127',
    subtitle_text_color: '#8280b8',
    text_color: '#f5f5f5',
  } as const

  mockTelegramEnv({
    launchParams: {
      tgWebAppThemeParams: themeParams,
      tgWebAppData: new URLSearchParams([
        [
          'user',
          JSON.stringify({
            id: 1,
            first_name: 'Pavel',
          }),
        ],
        ['hash', ''],
        ['signature', ''],
        ['auth_date', Date.now().toString()],
      ]),
      tgWebAppStartParam: 'debug',
      tgWebAppVersion: '8',
      tgWebAppPlatform: 'tdesktop',
    },
    onEvent(event) {
      // event here is an object { event: string; params?: any }, but
      // typed depending on the "event" prop.
      if (event.name === 'web_app_request_theme') {
        return emitEvent('theme_changed', { theme_params: themeParams })
      }
      if (event.name === 'web_app_request_viewport') {
        return emitEvent('viewport_changed', {
          height: window.innerHeight,
          width: window.innerWidth,
          is_expanded: true,
          is_state_stable: true,
        })
      }
      if (event.name === 'web_app_request_content_safe_area') {
        return emitEvent('content_safe_area_changed', noInsets)
      }
      if (event.name === 'web_app_request_safe_area') {
        return emitEvent('safe_area_changed', noInsets)
      }
    },
  })
}
