import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'DASHBOARD - gráficos e análises',
    group: true,
  },
  {
    title: 'Vendas',
    icon: 'bar-chart-2-outline',
    link: '/pages/dashboard',
    home: true,
    children: [
      {
        'title':'Gerenciador de Vendas'
      }
    ]
  },
    {
      title: 'Produtos',
      icon: 'pricetags-outline',
      link: '',
      home: true,
      },
      {
        title: 'Clientes',
        icon: 'smiling-face-outline',
        link: '',
        home: true,
        children: [
          {
            'title':'Cadastro de Clientes'
          }
        ]
        },
        {
          title: 'Fornecedores',
          icon: 'people-outline',
          link: '',
          home: true,
          }

]