import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AuthProvider from './pages/Context/AuthProvider';
import Home from './pages/Home/Home';
import { ContactUs } from './pages/Home/Home/ContactUs/ContactUS';
import AddProducts from './pages/Home/Home/Dashboard/AdminDashboard/AddProducts';
import Dashboard from './pages/Home/Home/Dashboard/Dashboard';
import MyOrders from './pages/Home/Home/Dashboard/MyOrders';
import Payment from './pages/Home/Home/Dashboard/Payment';
import SendReviews from './pages/Home/Home/Dashboard/SendReviews';
import Explores from './pages/Home/Home/Explores/Explores';
import InteriorDesigns from './pages/Home/Home/InteriorDesigns/InteriorDesigns';
import Login from './pages/Home/Home/Login/Login/Login';
import Register from './pages/Home/Home/Login/Register/Register';
import MeetBenefits from './pages/Home/Home/MeetBenefits/MeetBenefits';
import NotFound from './pages/Home/Home/NotFound/NotFound';
import Products from './pages/Home/Home/Products/Products';
import PurchaseProducts from './pages/Home/Home/PurchaseProducts/PurchaseProducts';
import Reviews from './pages/Home/Home/Reviews/Reviews';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Services from './pages/Home/Home/Services/Services';


function App() {
   return (
      <div className="App" style={{backgroundColor:'D9D9D9'}} >
         <AuthProvider>
            <BrowserRouter>
               <Switch>
                  <Route exact path='/'>
                     <Home></Home>
                  </Route>
                  <Route exact path='/home'>
                     <Home></Home>
                  </Route>
                  <Route exact path='/products'>
                     <Products></Products>
                  </Route>
                  <Route exact path='/explores'>
                     <Explores></Explores>
                  </Route>
                  <PrivateRoute path='/purchaseProducts/:productId'>
                     <PurchaseProducts></PurchaseProducts>
                  </PrivateRoute>
                  <Route exact path='/meetBenefit'>
                     <MeetBenefits></MeetBenefits>
                  </Route>
                  <Route exact path='/reviews'>
                     <Reviews></Reviews>
                  </Route>
                  <Route exact path='/login'>
                     <Login></Login>
                  </Route>
                  <Route exact path='/register'>
                     <Register></Register>
                  </Route>
                  <Route path='/dashboard'>
                     <Dashboard></Dashboard>
                  </Route>
                  <Route exact path='/payment'>
                     <Payment></Payment>
                  </Route>
                  <Route exact path='/myOrder'>
                     <MyOrders></MyOrders>
                  </Route>
                  <Route exact path='/addReviews'>
                     <SendReviews></SendReviews>
                  </Route>
                  <Route exact path='/addProducts'>
                     <AddProducts></AddProducts>
                  </Route>
                  <PrivateRoute path='/contact' >
                     <ContactUs></ContactUs>
                  </PrivateRoute>
                  <PrivateRoute path='/services' >
                     <Services></Services>
                  </PrivateRoute>
                  <Route exact path='*'>
                     <NotFound></NotFound>
                  </Route>
               </Switch>
            </BrowserRouter>
         </AuthProvider>
      </div>
   );
}

export default App;
