// add new views here and in router/index.js

import {
  // delete if not used
  mdiAccountCircle,
  mdiDesktopMac,
  // mdiGithub,
  mdiLock,
  mdiAlertCircle,
  // mdiMonitorShimmer,
  mdiSquareEditOutline,
  mdiTable,
  mdiViewList,
  mdiTelevisionGuide,
  mdiResponsive,
  // actual used mdi
  mdiRoutes,
  mdiPretzel,
  mdiTruck
} from '@mdi/js'

export default [
  'Routenplanung',
  [
    {
      to: '/',
      icon: mdiDesktopMac,
      label: 'Dashboard'
    },
    {
      to: '/routenbearbeitung',
      label: 'Routenbearbeitung',
      icon: mdiRoutes
      // updateMark: true
    }
  ],
  'Verkäufersicht',
  [
    {
      to: '/tables',
      label: 'Tables',
      icon: mdiTable,
      updateMark: true
    },
    {
      to: '/tables2',
      label: 'Tables2',
      icon: mdiTable,
      updateMark: true
    },
    {
      to: '/axiostest',
      label: 'AxiosTest',
      icon: mdiTable,
      updateMark: true
    },
    {
      to: '/testview',
      label: 'Testview',
      icon: mdiTable,
      updateMark: true
    },
    {
      to: '/forms',
      label: 'Forms',
      icon: mdiSquareEditOutline
    },
    {
      to: '/ui',
      label: 'UI',
      icon: mdiTelevisionGuide
    },
    {
      to: '/responsive',
      label: 'Responsive',
      icon: mdiResponsive
    },
    {
      to: '/profile',
      label: 'Profile',
      icon: mdiAccountCircle
    },
    {
      to: '/login',
      label: 'Login',
      icon: mdiLock
    },
    {
      to: '/error',
      label: 'Error',
      icon: mdiAlertCircle
    },
    {
      to: '/fahrzeuge',
      label: 'Fahrzeuge',
      icon: mdiTruck
    },
    {
      label: 'Submenus',
      subLabel: 'Submenus Example',
      icon: mdiViewList,
      menu: [
        {
          label: 'Sub-item One'
        },
        {
          label: 'Sub-item Two'
        }
      ]
    }
  ],
  'About',
  [
    {
      href: 'https://baeckerai.de/ueber-uns-3/',
      label: 'BäckerAI',
      icon: mdiPretzel,
      target: '_blank'
    }
  ]
]
