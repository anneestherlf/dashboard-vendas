import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Vendas',
    icon: 'bar-chart-2-outline',
    link: '/pages/dashboard',
    home: true,
    children: [
      {
        'title':'Gerenciador',
        link:''
      },
      {
        'title':'Gráficos e análises'
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