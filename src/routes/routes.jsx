import Home from '../resources/Home/Home';
import About from '../resources/About/About';
import Contact from '../resources/Contact/Contact';
import Login from '../resources/Login/Login';
import Register from '../resources/Register/Register';
import Item from '../resources/Item/Item';
import Info from '../resources/Info/Info';
import Test from '../resources/Test/Test';
import Sidebar from '../components/Sidebar/Sidebar';
import Contact2 from '../resources/Admin/Contact2';
import NotFound from '../resources/PageNotFound/PageNotFound';
import Product from '../resources/Product/Product';

// Admin routes
import Admin from '../resources/Admin/Admin';
import IteamAdmin from '../resources/ItemAdmin/ItemAdmin';
import AddProduct from '../resources/AddProduct/AddProduct';
import UpdateItem from '../resources/UpdateItem/UpdateItem';

// Layouts
import HeaderOnly from '../components/Layouts/HeaderOnly/HeaderOnly';
import OnlyLayout from '../components/Layouts/OnlyLayout/OnlyLayout';

// public routes
const publicRoutes = [
    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/item', component: Item },
    { path: '/info', component: Info },
    { path: '/test', component: Test },
    { path: '/login', component: Login, layout: HeaderOnly },
    { path: '/register', component: Register, layout: HeaderOnly },
    { path: '/product', component: Product },


    // Admin routes
    { path: '/admin', component: Admin, layout: Sidebar },
    { path: '/itemadmin', component: IteamAdmin, layout: Sidebar },
    { path: '/itemadmin/add', component: AddProduct, layout: Sidebar },
    { path: '/contact2', component: Contact2, layout: Sidebar },
    { path: '/updateitem/:id', component: UpdateItem, layout: Sidebar },
    { path: '/:slug', component: NotFound, layout: OnlyLayout },
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }