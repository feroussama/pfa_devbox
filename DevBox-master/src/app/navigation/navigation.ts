export const navigation = [
    {
        'id'      : 'compte',
        'title'   : 'Compte',
        'translate': 'NAV.COMPTE',
        'type'    : 'group',
        'children': [
            {
                'id': 'compte',
                'title': 'Compte',
                'translate': 'NAV.COMPTE',
                'type': 'collapse',
                'icon': 'compte',
                'children': [
                    {
                        'id': 'registre',
                        'title': 'Registre',
                        'type': 'item',
                        'url': '/registre'
                    },
                    {
                        'id': 'login',
                        'title': 'Login',
                        'type': 'item',
                        'url': '/login'
                    }
                ]
            },
               
        ]
    },
    {

      
        'id': 'profile',
        'title': 'Profile',
        'translate': 'NAV.PROFILE',
        'type': 'group',
        'children': [
            {
                'id': 'profile',
                'title': 'Profile',
                'translate': 'NAV.PROFILE',
                'type': 'collapse',
                'icon': 'profile',
                'children': [
                    {
                        'id': 'profile',
                        'title': 'Profile',
                        'type': 'item',
                        'url': '/profile'
                    },
                     {
                        'id': 'certif',
                        'title': 'Certification Des Téchnologies',
                        'type': 'item',
                         'url': '/certif'
                    }
                ]
            },

        ]
    
    }
];
