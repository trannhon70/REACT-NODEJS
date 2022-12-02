export const adminMenu = [
    { //quản lý người dùng
        name: 'menu.system.header', menus: [
            { name: 'CRUD user', link: '/system/user-manage' },
            { name: 'CRUD redux', link: '/system/user-redux' },
            {
                name: 'Quản lý bác sĩ', link: '/system/user-doctor',
                // subMenus: [
                //     { name: 'menu.system.system-administrator.user-manage', link: '/system/user-manage' },
                //     { name: 'menu.system.system-administrator.product-manage', link: '/system/user-redux' },
                //     // { name: 'menu.system.system-administrator.register-package-group-or-account', link: '/system/register-package-group-or-account' },
                // ]
            },
            {
                name: 'Quản lý Admin', link: '/system/user-admin',
                // subMenus: [
                //     { name: 'menu.system.system-administrator.user-manage', link: '/system/user-manage' },
                //     { name: 'menu.system.system-administrator.product-manage', link: '/system/user-redux' },
                //     // { name: 'menu.system.system-administrator.register-package-group-or-account', link: '/system/register-package-group-or-account' },
                // ]
            },
           
        ]
    },
    { //quản lý phòng khám
        name: 'Phòng khám', 
        menus: [
            { name: 'Quản lý phòng khám', link: '/system/manage-clinic' },
            
           
        ]
    },

    { //quản lý chuyên khoa
        name: 'Chuyên khoa', 
        menus: [
            { name: 'Quản lý chuyên khoa', link: '/system/manage-specialty' },
            
           
        ]
    },
    { //quản lý cẩm nang
        name: 'Cẩm nang', 
        menus: [
            { name: 'Quản lý cẩm nang', link: '/system/manage-handbook' },
            
           
        ]
    },
];