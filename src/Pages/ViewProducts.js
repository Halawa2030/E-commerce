// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom"

// function ProductView() {
// const [product , setProduct] =useState();

//     let {productsID}=useParams();
//     useEffect(() => {
//           fetch(`https://fakestoreapi.com/products/${productsID}`)
//             .then(response => response.json())
//             .then(product => setProduct(product));
//     },[])
    
//     return( <>
//         {product &&  
//         <>
//         <h1 style={{textAlign:"center"}}>{product.title}</h1>
//         <img style={{display:"block" , margin:"0 auto"}} src={product.image} alt={product.title}/>
//         <h4 style={{textAlign:"center"}}>{product.description}</h4>
//         <h2 style={{textAlign:"center", fontSize:"45px"} }>Price : {product.price}</h2>
        
//         </>}
       

//         </>
//     )
// }

// export default ProductView



import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CircularProgress,
  Box,
  Chip,
} from "@mui/material";

function ProductView() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { productsID } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productsID}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [productsID]);

  if (loading) {
    return (
      <Box
        sx={{
          background: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress sx={{ color: "#fff" }} size={60} />
      </Box>
    );
  }

  if (!product) {
    return (
      <Typography
        variant="h6"
        textAlign="center"
        mt={5}
        sx={{ color: "#555" }}
      >
        Product not found.
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 5,
      }}
    >
      <Card
        sx={{
          maxWidth: 900,
          width: "100%",
          boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
          borderRadius: 5,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 3,
          }}
        >
          <CardMedia
            component="img"
            image={product.image}
            alt={product.title}
            sx={{
              objectFit: "contain",
              maxHeight: 400,
              transition: "transform 0.3s ease",
              "&:hover": { transform: "scale(1.05)" },
            }}
          />
        </Box>
        <CardContent sx={{ backgroundColor: "#fff" }}>
          <Typography
            variant="h4"
            component="div"
            gutterBottom
            textAlign="center"
            sx={{ fontWeight: "bold", mb: 2 }}
          >
            {product.title}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            textAlign="center"
            sx={{ mb: 3, px: 2 }}
          >
            {product.description}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
            <Chip
              label={`$${product.price}`}
              color="primary"
              sx={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                p: 2,
                borderRadius: "8px",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              mt: 2,
            }}
          >
            <Button
              variant="contained"
              color="secondary"
              onClick={() => navigate(-1)}
              sx={{
                borderRadius: 3,
                px: 4,
                py: 1,
                fontWeight: "bold",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              }}
            >
              Back
            </Button>
            <Button
              variant="contained"
              color="success"
              sx={{
                borderRadius: 3,
                px: 4,
                py: 1,
                fontWeight: "bold",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              }}
            >
              Buy Now
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ProductView;

