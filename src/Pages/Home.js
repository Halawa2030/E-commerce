

// import { Link } from "react-router-dom";
// import productsData from "../data/products.json";

// function Home() {
//   const featuredProducts = productsData.Products.slice(0, 4);

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         backgroundImage:
//         "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIRGKDBiTbKFpQeTmivI9lGonRRA4UfqZPRtywRDhsjsERVxefY2dWSJCpbmpVqXnq7Pg&usqp=CAU')",
//         backgroundSize: "cover",
        
//         backgroundPosition: "center",
//         backgroundAttachment: "fixed",
//         backgroundRepeat: "no-repeat",
//         paddingTop: "60px",
//       }}
//     >
//       {/* Overlay for better readability */}
//       <div
//         style={{
          
//           minHeight: "100vh",
//           paddingBottom: "50px",
//         }}
//       >
//         {/* Hero Section */}
//         <section
//           style={{
//             textAlign: "center",
//             padding: "10px 20px",
//             color: "#fff",
//           }}
//         >
//           <h1
//             className="fw-bold display-3 mb-4"
//             style={{ letterSpacing: "1px" }}
//           >
//             Welcome to Halawa Store
//           </h1>
//           <p
//             style={{
//               maxWidth: "700px",
//               margin: "0 auto",
//               fontSize: "20px",
//               opacity: 0.95,
//             }}
//           >
//             Discover premium products with unbeatable prices and top-notch
//             quality. Your one-stop shop for everything you need.
//           </p>
//           <Link
//             to="/products"
//             className="btn btn-light btn-lg mt-4 px-5 py-3 fw-bold shadow"
//             style={{
//               borderRadius: "50px",
//               fontSize: "18px",
//               transition: "transform 0.3s ease",
//             }}
//             onMouseOver={(e) =>
//               (e.currentTarget.style.transform = "scale(1.05)")
//             }
//             onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
//           >
//             Explore All Products
//           </Link>
//         </section>

//         {/* Featured Products */}
//         <section className="container my-5">
//           <h2
//             className="text-center mb-5 fw-bold"
//             style={{ fontSize: "2.5rem", color: "#fff" }}
//           >
//             Featured Products
//           </h2>
//           <div className="row g-4">
//             {featuredProducts.map((p) => (
//               <div className="col-md-3 col-sm-6" key={p.id}>
//                 <div
//                   className="card h-100 border-0 shadow-lg"
//                   style={{
//                     borderRadius: "20px",
//                     overflow: "hidden",
//                     transition: "transform 0.4s ease, box-shadow 0.4s ease",
//                   }}
//                   onMouseOver={(e) => {
//                     e.currentTarget.style.transform = "translateY(-10px) scale(1.02)";
//                     e.currentTarget.style.boxShadow =
//                       "0 15px 30px rgba(0,0,0,0.4)";
//                   }}
//                   onMouseOut={(e) => {
//                     e.currentTarget.style.transform = "translateY(0) scale(1)";
//                     e.currentTarget.style.boxShadow =
//                       "0 6px 15px rgba(0,0,0,0.2)";
//                   }}
//                 >
//                   <div style={{ overflow: "hidden", height: "250px" }}>
//                     <img
//                       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMjLAug7nZo0EclwgKRb972N790b8vys4SRw&s"
//                       className="card-img-top"
//                       alt={p.title}
//                       style={{
//                         height: "100%",
//                         width: "100%",
//                         objectFit: "cover",
//                         transition: "transform 0.5s ease",
//                       }}
//                       onMouseOver={(e) =>
//                         (e.currentTarget.style.transform = "scale(1.1)")
//                       }
//                       onMouseOut={(e) =>
//                         (e.currentTarget.style.transform = "scale(1)")
//                       }
//                     />
//                   </div>
//                   <div className="card-body text-center bg-light">
//                     <h5
//                       className="card-title fw-bold mb-2"
//                       style={{ fontSize: "1rem", minHeight: "40px", color: "#000" }}
//                     >
//                       {p.title}
//                     </h5>
//                     <p className="card-text text-muted mb-3">${p.price}</p>
//                     <Link
//                       to={`/products/${p.id}`}
//                       className="btn btn-primary btn-sm px-3 py-2"
//                       style={{ borderRadius: "20px" }}
//                     >
//                       View
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Button for all products */}
//           <div className="text-center mt-5">
//             <Link
//               to="/products"
//               className="btn btn-outline-light btn-lg px-5 py-3 fw-bold"
//               style={{
//                 borderRadius: "50px",
//                 fontSize: "18px",
//                 transition: "transform 0.3s ease",
//               }}
//               onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
//               onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
//             >
//               Show All Products
//             </Link>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

// export default Home;


import { Link } from "react-router-dom";
import productsData from "../data/products.json";

function Home() {
  const featuredProducts = productsData.Products.slice(0, 4);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIRGKDBiTbKFpQeTmivI9lGonRRA4UfqZPRtywRDhsjsERVxefY2dWSJCpbmpVqXnq7Pg&usqp=CAU')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* ✅ Overlay */}
      <div
        style={{
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(3px)",
          minHeight: "100vh",
          paddingBottom: "50px",
        }}
      >
        {/* ✅ Hero Section */}
        <section
          style={{
            textAlign: "center",
            padding: "100px 20px 60px",
            color: "#fff",
          }}
        >
          <h1
            className="fw-bold display-3 mb-4"
            style={{
              letterSpacing: "2px",
              textShadow: "0px 4px 15px rgba(0,0,0,0.8)",
              animation: "fadeInDown 1s ease",
            }}
          >
            Welcome to <span style={{ color: "#ffd700" }}>Halawa Store</span>
          </h1>
          <p
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              fontSize: "20px",
              opacity: 0.95,
              animation: "fadeInUp 1.5s ease",
            }}
          >
            Discover premium products with unbeatable prices and top-notch
            quality. Your one-stop shop for everything you need.
          </p>
          <Link
            to="/products"
            className="btn btn-light btn-lg mt-5 px-5 py-3 fw-bold shadow"
            style={{
              borderRadius: "50px",
              fontSize: "18px",
              transition: "all 0.4s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "translateY(-5px) scale(1.07)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "translateY(0) scale(1)")
            }
          >
            🚀 Explore All Products
          </Link>
        </section>

        {/* ✅ Featured Products */}
        <section className="container my-5">
          <h2
            className="text-center mb-5 fw-bold"
            style={{
              fontSize: "2.8rem",
              color: "#fff",
              textShadow: "0px 3px 10px rgba(0,0,0,0.7)",
            }}
          >
            ✨ Featured Products
          </h2>
          <div className="row g-4">
            {featuredProducts.map((p, index) => (
              <div
                className="col-md-3 col-sm-6"
                key={p.id}
                style={{
                  animation: `fadeInUp 0.8s ease ${index * 0.2}s both`,
                }}
              >
                <div
                  className="card h-100 border-0 shadow-lg"
                  style={{
                    borderRadius: "20px",
                    overflow: "hidden",
                    background: "rgba(255,255,255,0.9)",
                    backdropFilter: "blur(5px)",
                    transition:
                      "transform 0.4s ease, box-shadow 0.4s ease, border 0.4s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(-12px) scale(1.05)";
                    e.currentTarget.style.boxShadow =
                      "0 20px 40px rgba(0,0,0,0.5)";
                    e.currentTarget.style.border = "2px solid #ffd700";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 6px 15px rgba(0,0,0,0.2)";
                    e.currentTarget.style.border = "none";
                  }}
                >
                  <div style={{ overflow: "hidden", height: "250px" }}>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMjLAug7nZo0EclwgKRb972N790b8vys4SRw&s"
                      className="card-img-top"
                      alt={p.title}
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                        transition: "transform 0.5s ease",
                      }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.transform = "scale(1.1)")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5
                      className="card-title fw-bold mb-2"
                      style={{
                        fontSize: "1rem",
                        minHeight: "40px",
                        color: "#333",
                      }}
                    >
                      {p.title}
                    </h5>
                    <p className="card-text text-muted mb-3">${p.price}</p>
                    <Link
                      to={`/products/${p.id}`}
                      className="btn btn-primary btn-sm px-4 py-2 fw-bold"
                      style={{ borderRadius: "30px" }}
                    >
                      🔎 View
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ✅ Button for all products */}
          <div className="text-center mt-5">
            <Link
              to="/products"
              className="btn btn-outline-light btn-lg px-5 py-3 fw-bold"
              style={{
                borderRadius: "50px",
                fontSize: "18px",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "translateY(-5px) scale(1.05)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.transform = "translateY(0) scale(1)")
              }
            >
              🛍️ Show All Products
            </Link>
          </div>
        </section>
      </div>

      {/* ✅ Animations */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
}

export default Home;
