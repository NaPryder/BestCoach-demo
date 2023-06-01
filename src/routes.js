export const routes = [
  {
    id: 1,
    to: '',
    text: 'For Mentor',
    isHome: true,
    element: import('./pages/Mentor/Mentor'),
  },
  {
    id: 2,
    to: '/client',
    text: 'For Mentee',
    element: import('./pages/Mentee/Mentee'),
  },
  {
    id: 3,
    to: '/corporate',
    text: 'Corporate',
    element: import('./pages/Corporate/Corporate'),
  },
  // {
  //   id: 4,
  //   to: '/news',
  //   text: 'News & Community',
  // },
]
