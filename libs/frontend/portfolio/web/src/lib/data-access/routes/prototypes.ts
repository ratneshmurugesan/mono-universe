export const prototypeRoutes = {
  id: 'prototypes',
  name: 'Prototypes',
  path: 'prototypes',
  subPages: [
    {
      id: 'prototypeA',
      name: 'Prototype A',
      path: 'prototypeA',
      subPages: [
        {
          id: 'prototypeAX',
          name: 'Prototype AX',
          path: ':prototypeAX', // dynamic route
          subPages: [],
        },
      ],
    },
    {
      id: 'prototypeB',
      name: 'Prototype B',
      path: 'prototypeB',
      subPages: [],
    },
  ],
}
