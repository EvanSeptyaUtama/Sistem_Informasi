import {createRouter, createWebHistory} from "vue-router";

//Halaman Company Profile
import DashboardLayout from '../components/DashboardLayout.vue'
import Dashboard from '../views/Dashboard.vue'
import TentangKami from '../views/TentangKami.vue'
import InformasiAkademik from '../views/InformasiAkademik.vue'
import Sejarah from '../views/TKpage/Sejarah.vue'
import Identitas from '../views/TKpage/Identitas.vue'
import Organisasi from '../views/TKpage/Organisasi.vue'
import KontakKomite from '../views/TKpage/KontakKomite.vue'

//Halaman PMB
import PSBLayout from '../components/PSBLayout.vue'
import DashboardPSB from '../views/PSB/DashboardPSB.vue'
import KontakPSB from '../views/PSB/KontakPSB.vue' 
import InformasiPSB from '../views/PSB/InformasiPSB.vue' 

//Halaman Absen
import AbsenLayout from '../components/AbsenLayout.vue'
import HalamanUtamaAbsen from '../views/ABSENSI/HalamanUtamaAbsen.vue'
import InputAbsen from '../views/ABSENSI/InputAbsen.vue'
// import HalamanInputAbsenGuru from '../views/ABSENSI/INPUT_ABSEN/HalamanInputAbsenGuru.vue'
import HalamanInputAbsenGuru from '../views/HalamanInputAbsenGuru.vue'
import HalamanInputAbsenSiswa from '../views/HalamanInputAbsenSiswa.vue'
//Halaman LoginAbsen
import LoginAbsen from '../components/LoginAbsen.vue'
import DashboardLoginAbsen from '../views/LOGINABSEN/DashboardLoginAbsen.vue'

//Halaman Admin
import AdminLayout from '../components/AdminLayout.vue'
import DashboardAdmin from '../views/ADMIN/DashboardAdmin.vue'
import Inbox from '../views/ADMIN/Inbox.vue'
import Kanban from '../views/ADMIN/Kanban.vue'
import PenggunaSuperAdmin from '../views/ADMIN/pengguna/PenggunaSuperAdmin.vue'
import PenggunaAdmin from '../views/ADMIN/pengguna/PenggunaAdmin.vue'


//Halaman Coba-coba
import CobaLayout from '../components/CobaLayout.vue'
import DashboardCoba from '../views/DashboardCoba.vue'

//Halaman Coba-coba
import SidebarCoba from '../components/SidebarCoba.vue'
import SidebarCobaLayout from '../views/SidebarCobaLayout.vue'

const routes = [
    //Profil Instansi
    {
        path: '/',
        redirect:'/dashboard' ,
        component: DashboardLayout,
        children: [
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: Dashboard
            },
            {
                path: '/tentangkami',
                redirect: '/sejarah',
                component: TentangKami,
                children: [
                    {
                        path: '/sejarah',
                        name: 'Sejarah',
                        component: Sejarah
                    },
                    {
                        path: '/identitas',
                        name: 'Identitas',
                        component: Identitas
                    },
                    {
                        path: '/organisasi',
                        name: 'Organisasi',
                        component: Organisasi
                    },
                    {
                        path: '/kontakkomite',
                        name: 'KontakKomite',
                        component: KontakKomite
                    }
                ]
            },
            {
                path: '/informasiakademik',
                name: 'InformasiAkademik',
                component: InformasiAkademik
            }
        ]
    },
    //Halaman PPDB
    {
        path: '/pendaftaranmahasiswabaru',
        redirect: '/dashboardpsb',
        component: PSBLayout,
        children: [
            {
                path: '/dashboardpsb',
                name: 'DashboardPSB',
                component: DashboardPSB
            },
            {
                path: '/KontakPSB',
                name: 'KontakPSB',
                component: KontakPSB
            },
            {
                path: '/Informasi',
                name: 'InformasiPSB',
                component: InformasiPSB
            }
        ]
    },
    //Halaman Absen
    {
        
        path: '/absen',
        redirect: '/halamanutamaabsen',
        component: AbsenLayout,
        children: [
         
            {
                path: '/halamanutamaabsen',
                name: 'HalamanUtamaAbsen',
                component: HalamanUtamaAbsen
            },  
            {
                path: '/inputabsen',
                name: 'InputAbsen',
                component: InputAbsen,
                // children: [
                //     {
                //         path: '/halamaninputabsenguru',
                //         name: 'HalamanInputAbsenGuru',
                //         component: HalamanInputAbsenGuru
                //     }
                // ]
            },
        ]
    },
    //Halaman Input Absen Guru
    {
        path: '/halamaninputabsenguru',
        name: 'HalamanInputAbsenGuru',
        component: HalamanInputAbsenGuru,
    },
    //Halaman Input Absen Siswa
    {
        path: '/halamaninputabsensiswa',
        name: 'HalamanInputAbsenSiswa',
        component: HalamanInputAbsenSiswa,
    },
    
    //Halaman Admin
    {
        path: '/adminlayout',
        redirect: '/admin',
        component: AdminLayout,
        children: [
            {
                path: '/admin',
                name: 'DashboardAdmin',
                component: DashboardAdmin
            },
            {
                path: '/kanban',
                name: 'Kanban',
                component: Kanban
            },
            {
                path: '/inbox',
                name: 'Inbox',
                component: Inbox
            },
            {
                path: '/penggunasuperadmin',
                name: 'PenggunaSuperAdmin',
                component: PenggunaSuperAdmin
            },
            {
                path: '/penggunaadmin',
                name: 'PenggunaAdmin',
                component: PenggunaAdmin
            }
        ]
    },
    //Login Absen
    {
        path: '/loginabsenlayout',
        redirect: '/loginabsen',
        component: LoginAbsen,
        children: [
            {
                path: '/loginabsen',
                name: 'DashboardLoginAbsen',
                component: DashboardLoginAbsen
            }, 
        ]
    },
    //Halaman coba-coba
    {
        path: '/cobalayout',
        redirect: '/dashboardcoba',
        component: CobaLayout,
        children: [
            {
                path: '/dashboardcoba',
                name: 'DashboardCoba',
                component: DashboardCoba
            }, 
        ]
    },
     //Halaman coba-coba
     {
        path: '/sidebarcoba',
        redirect: '/sidebarcobalayout',
        component: SidebarCoba,
        children: [
            {
                path: '/sidebarcobalayout',
                name: 'SidebarCobaLayout',
                component: SidebarCobaLayout
            }, 
        ]
    },
   
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;