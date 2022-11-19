export const prototypeRoutes = {
  id: 'prototypes',
  name: 'Prototypes',
  path: 'prototypes',
  subPages: [
    {
      id: 'prototypeA',
      name: 'Button + UX sound',
      // path: 'button-with-ux-sound',
      path: '',
      index: true,
      subPages: [],
    },
    {
      id: 'prototypeB',
      name: 'Button + Modal + UX sound',
      path: 'prototypeB',
      subPages: [
        {
          id: 'prototypeX',
          name: 'Prototype X',
          path: ':prototypeX', // dynamic route
          subPages: [],
        },
      ],
    },
    {
      id: 'prototypeShoe',
      name: '3D-Shoero-Gravity*',
      path: 'prototypeShoe',
      subPages: [],
    },
  ],
}
