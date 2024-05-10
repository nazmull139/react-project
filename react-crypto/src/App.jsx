
import './App.css'
import DashBoard from './pages/Dashboard/DashBoard'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import TransactionPage from './pages/TransactionPage/TransactionPage';
import Support from './pages/Support/Support';


const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoard></DashBoard>,
  },
  {
    path: "/transactionpage",
    element: <TransactionPage></TransactionPage>
  },
  {
    path: "/support",
    element: <Support></Support> ,
  },
]);

function App() {
  

  
  return (
    <>
    <RouterProvider router={router} />
       
    </>
  )
}

export default App
