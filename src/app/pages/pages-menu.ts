import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'DASHBOARD - Dados simultâneos',
    group: true
  },
  {
    title: 'Vendas',
    icon: 'bar-chart-2-outline',
    link: '/pages/dashboard',
    home: true,
    children: [
      {
        'title':'Gerenciador de Vendas',
        link:'/pages/forms'
      }
    ]
  },
    {
      title: 'Produtos',
      icon: 'pricetags-outline',
      link: '/pages/charts'
      },
      {
        title: 'Clientes',
        icon: 'smiling-face-outline',
        link: '/pages/tables',
        home: true,
        children: [
          {
            'title':'Cadastro de Clientes',
            link: '/pages/tables'
          }
        ]
        },
        {
          title: 'Fornecedores',
          icon: 'people-outline',
          link: '/pages/iot-dashboard'
          }

]