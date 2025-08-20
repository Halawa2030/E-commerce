


// import { Link } from "react-router-dom";
// import avatarImg from "../images/avatar.jpg"; // ضع صورة في مجلد assets

// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg bg-light shadow-sm">
//       <div className="container-fluid">
//         {/* Logo */}
//         <Link className="navbar-brand fw-bold text-primary" to="/">
//           Halawa
//         </Link>

//         {/* Toggler for mobile */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Navbar items */}
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link className="nav-link active" to="/">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/products">
//                 Products
//               </Link>
//             </li>
//           </ul>

//           {/* Avatar */}
//           <div className="d-flex align-items-center">
//             <Link to="/profile">
//               <img
//                 src={avatarImg}
//                 alt="Avatar"
//                 className="rounded-circle"
//                 style={{
//                   width: "40px",
//                   height: "40px",
//                   objectFit: "cover",
//                   cursor: "pointer",
//                   border: "2px solid #007bff",
//                 }}
//               />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;




// import { Link } from "react-router-dom";
// import avatarImg from "../images/avatar.jpg"; // تأكد إن الصورة موجودة

// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg bg-light shadow-sm px-3">
//       <div className="container-fluid">
//         {/* Avatar Logo */}
//         <Link to="/profile" className="d-flex align-items-center">
//           <img
//             src={avatarImg}
//             alt="Avatar"
//             className="rounded-circle"
//             style={{
//               width: "45px",
//               height: "45px",
//               objectFit: "cover",
//               cursor: "pointer",
//               border: "2px solid #007bff",
//               transition: "transform 0.3s ease",
//             }}
//             onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
//             onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
//           />
//         </Link>

//         {/* Mobile Toggler */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Navbar Items */}
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link className="nav-link active fw-semibold" to="/">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link fw-semibold" to="/products">
//                 Products
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;



import { Link } from "react-router-dom";
import avatarImg from "../images/avatar.jpg";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light shadow-sm px-3">
      <div className="container-fluid">
        {/* Avatar Logo */}
        <Link to="/profile" className="d-flex align-items-center me-3">
          <img
            src={avatarImg}
            alt="Avatar"
            className="rounded-circle"
            style={{
              width: "45px",
              height: "45px",
              objectFit: "cover",
              cursor: "pointer",
              border: "2px solid #007bff",
              transition: "transform 0.3s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </Link>

        {/* Navbar Items */}
        <div
          className="d-flex align-items-center flex-row"
          style={{ gap: "20px" }}
        >
          <Link
            className="fw-bold text-dark text-decoration-none"
            style={{
              fontSize: "18px",
              transition: "color 0.3s ease, transform 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = "#007bff";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = "black";
              e.currentTarget.style.transform = "scale(1)";
            }}
            to="/"
          >
            Home
          </Link>
          <Link
            className="fw-bold text-dark text-decoration-none"
            style={{
              fontSize: "18px",
              transition: "color 0.3s ease, transform 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = "#007bff";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = "black";
              e.currentTarget.style.transform = "scale(1)";
            }}
            to="/products"
          >
            Products
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
