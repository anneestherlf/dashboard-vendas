import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'DASHBOARD - Dados simultâneos',
    group: true
  },
  {
    title: 'Vendas',
    icon: 'bar-chart-2-outline',
    link: '/pages/e-commerce',
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
      link: ''
      },
      {
        title: 'Clientes',
        icon: 'smiling-face-outline',
        link: '',
        home: true,
        children: [
          {
            'title':'Cadastro'
          },
          {
            'title':'Gráficos e análises'
          }
        ]
        },
        {
          title: 'Fornecedores',
          icon: 'people-outline',
          link: ''
          }

]