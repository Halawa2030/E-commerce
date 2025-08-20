// import { Route, Routes } from 'react-router-dom';
// import './App.css';
// import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
// import Homa from './Pages/Home';
// import Products from './Pages/Products';
// import AddNewProduct from './Pages/AddNewProduct';
// import ViewProducts from './Pages/ViewProducts';
// import Profile from './Pages/Profile';

// function App() {
//   return (
//     <div className="App">

//       <Navbar />
//       <div className='row'>

//         <div className='col'>
//         <Routes>
//           <Route path='/' element={<Homa />}></Route>
//           <Route path="/add-product" element={<AddNewProduct />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path='products' element={<Products />}></Route>
//           <Route path='products/add' element={<AddNewProduct />}></Route>
//           <Route path='/products/:productsID' element={<ViewProducts />} ></Route>

//         </Routes>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


// // import { Route, Routes } from 'react-router-dom';
// // import './App.css';
// // import Navbar from './components/Navbar';
// // import Homa from './Pages/Home';
// // import Products from './Pages/Products';
// // import AddNewProduct from './Pages/AddNewProduct';
// // import ViewProducts from './Pages/ViewProducts';
// // import Profile from './Pages/Profile'; // ✅ اسم صحيح

// // function App() {
// //   return (
// //     <div className="App">
// //       <Navbar />
// //       <div className="row">
// //         <div className="col">
// //           <Routes>
// //             <Route path="/" element={<Homa />} />
// //             <Route path="/add-product" element={<AddNewProduct />} />
// //             <Route path="/profile" element={<Profile />} />
// //             <Route path="/products" element={<Products />} />
// //             <Route path="/products/add" element={<AddNewProduct />} />
// //             <Route path="/products/:productsID" element={<ViewProducts />} />
// //           </Routes>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;


import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Homa from './Pages/Home';
import Products from './Pages/Products';
import AddNewProduct from './Pages/AddNewProduct';
import ViewProducts from './Pages/ViewProducts';
import Profile from './Pages/Profile';

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* ✅ Container Responsive */}
      <div className="container my-4">
        <div className="row">
          {/* لو عايز تضيف سايدبار */}
          {/* <div className="col-md-3">
            <Sidebar />
          </div> */}

          <div className="col">
            <Routes>
              <Route path="/" element={<Homa />} />
              <Route path="/add-product" element={<AddNewProduct />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/add" element={<AddNewProduct />} />
              <Route path="/products/:productsID" element={<ViewProducts />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
