import Home from '../resources/Home/Home';
import About from '../resources/About/About';
import Contact from '../resources/Contact/Contact';
import Login from '../resources/Login/Login';
import Register from '../resources/Register/Register';
import Item from '../resources/Item/Item';
import Info from '../resources/Info/Info';
import Test from '../resources/Test/Test';
import Sidebar from '../components/Sidebar/Sidebar';
import Product from '../resources/Product/Product';
import Repair from '../resources/Repair/Repair';
import ContactUser from '../resources/ContactUser/ContactUser';

// Admin routes
import Admin from '../resources/Admin/Admin';
import IteamAdmin from '../resources/ItemAdmin/ItemAdmin';
import AddProduct from '../resources/AddProduct/AddProduct';
import UpdateItem from '../resources/UpdateItem/UpdateItem';
import AdminRepairList from '../resources/AdminRepairList/AdminRepairList';
import ContactAdmin from '../resources/ContactAdmin/ContactAdmin';
import Dashboard from '../resources/Dashboard/Dashboard';
import InfoAdmin from '../resources/InfoAdmin/InfoAdmin';
import EditInfoAdmin from '../resources/EditInfoAdmin/EditInfoAdmin';
// Shared routes
import EditInfo from '../resources/EditInfo/EditInfo';
import RepairList from '../resources/RepairList/RepairList';
import RepairEdit from '../resources/RepairEdit/RepairEdit';
import RegisterFormRepair from '../resources/RegisterFormRepair/RegisterFormRepair';
import RepairInfo from '../resources/RepairInfo/RepairInfo';

// Error
import NotFound from '../resources/PageNotFound/PageNotFound';
import AccessDenied from '../resources/AccessDenied/AccessDenied';

// Layouts
import HeaderOnly from '../components/Layouts/HeaderOnly/HeaderOnly';
import OnlyLayout from '../components/Layouts/OnlyLayout/OnlyLayout';
import SidebarUser from '../components/SidebarUser/SidebarUser';

// public routes
const publicRoutes = [
    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/item', component: Item },
    { path: '/info', component: Info, layout: SidebarUser },
    { path: '/test', component: Test },
    { path: '/login', component: Login, layout: HeaderOnly },
    { path: '/register', component: Register, layout: HeaderOnly },
    { path: '/product', component: Product },
    { path: '/repair', component: Repair, layout: OnlyLayout },
    { path: '/repairupdate/:id', component: RepairEdit, layout: OnlyLayout },

    // Shared
    { path: '/editinfo', component: EditInfo, layout: SidebarUser },
    { path: '/userrepair', component: RepairList, layout: SidebarUser },
    { path: '/contactuser', component: ContactUser, layout: SidebarUser },
    { path: '/approve/:id', component: RegisterFormRepair, layout: OnlyLayout },
    { path: '/repairinfo/:id', component: RepairInfo, layout: OnlyLayout },
    // Admin routes
    { path: '/admin', component: Admin, layout: Sidebar },
    { path: '/itemadmin', component: IteamAdmin, layout: Sidebar },
    { path: '/itemadmin/add', component: AddProduct, layout: Sidebar },
    { path: '/updateitem/:id', component: UpdateItem, layout: Sidebar },
    { path: '/repairadmin', component: AdminRepairList, layout: Sidebar },
    { path: '/contactadmin', component: ContactAdmin, layout: Sidebar },
    { path: '/dashboard', component: Dashboard, layout: Sidebar },
    { path: '/infoadmin', component: InfoAdmin, layout: Sidebar },
    { path: '/editadmin', component: EditInfoAdmin, layout: Sidebar },

    { path: '/denied', component: AccessDenied, layout: OnlyLayout },
    { path: '/:slug', component: NotFound, layout: OnlyLayout },
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }