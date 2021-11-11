import { BrowserRouter,Switch,Route} from 'react-router-dom';
import './App.css';
import AuthProvider from './pages/Context/AuthProvider';
import Home from './pages/Home/Home';
import AddProducts from './pages/Home/Home/Dashboard/AdminDashboard/AddProducts';
import Dashboard from './pages/Home/Home/Dashboard/Dashboard';
import MyOrders from './pages/Home/Home/Dashboard/MyOrders';
import Payment from './pages/Home/Home/Dashboard/Payment';
import SendReviews from './pages/Home/Home/Dashboard/SendReviews';
import Login from './pages/Home/Home/Login/Login/Login';
import Register from './pages/Home/Home/Login/Register/Register';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
              <Home></Home>
           </Route>
          <Route exact path='/home'>
              <Home></Home>
           </Route>
          <Route exact path='/login'>
              <Login></Login>
           </Route>
          <Route exact path='/register'>
              <Register></Register>
           </Route>
          <Route exact path='/dashboard'>
              <Dashboard></Dashboard>
           </Route>
          <Route exact path='/payment'>
              <Payment></Payment>
           </Route>
          <Route exact path='/myorders'>
              <MyOrders></MyOrders>
           </Route>
          <Route exact path='/addReviews'>
              <SendReviews></SendReviews>
           </Route>
          <Route exact path='/addProducts'>
              <AddProducts></AddProducts>
           </Route>
        </Switch>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
