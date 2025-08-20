

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import data from "../data/products.json";
// import { Box, TextField, Button, Typography, Paper } from "@mui/material";

// function AddNewProduct() {
//   const navigate = useNavigate();
//   const [title, setTitle] = useState("");
//   const [price, setPrice] = useState("");
//   const [description, setDescription] = useState("");
//   const [image, setImage] = useState("");

//   const addProduct = () => {
//     if (!title || !price) {
//       alert("Please fill all fields");
//       return;
//     }
//     const newProduct = {
//       id: data.Products.length + 1,
//       title,
//       price: parseFloat(price),
//       description,
//       image
//     };
//     data.Products.push(newProduct);
//     navigate("/products");
//   };

//   return (
//     <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
//       <Paper
//         elevation={6}
//         sx={{
//           padding: 4,
//           borderRadius: 3,
//           width: "100%",
//           maxWidth: 500,
//           backgroundColor: "#fff",
//         }}
//       >
//         <Typography variant="h5" fontWeight="bold" mb={3} color="primary">
//           Add New Product
//         </Typography>

//         <TextField
//           label="Title"
//           fullWidth
//           variant="outlined"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           sx={{ mb: 2 }}
//         />
//         <TextField
//           label="Price"
//           type="number"
//           fullWidth
//           variant="outlined"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//           sx={{ mb: 2 }}
//         />
//         <TextField
//           label="Description"
//           multiline
//           rows={3}
//           fullWidth
//           variant="outlined"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           sx={{ mb: 2 }}
//         />
//         <TextField
//           label="Image URL"
//           fullWidth
//           variant="outlined"
//           value={image}
//           onChange={(e) => setImage(e.target.value)}
//           sx={{ mb: 3 }}
//         />

//         <Button
//           variant="contained"
//           color="success"
//           fullWidth
//           onClick={addProduct}
//           sx={{ fontSize: "16px", padding: "10px" }}
//         >
//           Add Product
//         </Button>
//       </Paper>
//     </Box>
//   );
// }

// export default AddNewProduct;



import { useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../data/products.json";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Divider,
} from "@mui/material";

function AddNewProduct() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const addProduct = () => {
    if (!title || !price) {
      alert("⚠️ Please fill all fields");
      return;
    }
    const newProduct = {
      id: data.Products.length + 1,
      title,
      price: parseFloat(price),
      description,
      image,
    };
    data.Products.push(newProduct);
    navigate("/products");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)",
        p: 2,
      }}
    >
      <Paper
        elevation={8}
        sx={{
          padding: 4,
          borderRadius: 4,
          width: "100%",
          maxWidth: 500,
          backgroundColor: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(10px)",
          animation: "slideIn 0.6s ease-out",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          textAlign="center"
          sx={{
            background: "linear-gradient(90deg, #1976d2, #42a5f5)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Add New Product
        </Typography>

        <Divider sx={{ mb: 3 }} />

        <TextField
          label="Title"
          fullWidth
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{
            mb: 2,
            "& .MuiOutlinedInput-root": {
              borderRadius: 3,
              "&:hover fieldset": {
                borderColor: "#1976d2",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#42a5f5",
                boxShadow: "0 0 8px rgba(25,118,210,0.5)",
              },
            },
          }}
        />

        <TextField
          label="Price"
          type="number"
          fullWidth
          variant="outlined"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          sx={{
            mb: 2,
            "& .MuiOutlinedInput-root": {
              borderRadius: 3,
              "&:hover fieldset": {
                borderColor: "#1976d2",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#42a5f5",
                boxShadow: "0 0 8px rgba(25,118,210,0.5)",
              },
            },
          }}
        />

        <TextField
          label="Description"
          multiline
          rows={3}
          fullWidth
          variant="outlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          sx={{
            mb: 2,
            "& .MuiOutlinedInput-root": {
              borderRadius: 3,
              "&:hover fieldset": {
                borderColor: "#1976d2",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#42a5f5",
                boxShadow: "0 0 8px rgba(25,118,210,0.5)",
              },
            },
          }}
        />

        <TextField
          label="Image URL"
          fullWidth
          variant="outlined"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          sx={{
            mb: 3,
            "& .MuiOutlinedInput-root": {
              borderRadius: 3,
              "&:hover fieldset": {
                borderColor: "#1976d2",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#42a5f5",
                boxShadow: "0 0 8px rgba(25,118,210,0.5)",
              },
            },
          }}
        />

        {/* ✅ Image Preview */}
        {image && (
          <Box
            sx={{
              mb: 3,
              textAlign: "center",
            }}
          >
            <img
              src={image}
              alt="Preview"
              style={{
                maxWidth: "100%",
                maxHeight: 200,
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              }}
            />
          </Box>
        )}

        <Button
          variant="contained"
          fullWidth
          onClick={addProduct}
          sx={{
            fontSize: "16px",
            fontWeight: "bold",
            padding: "12px",
            borderRadius: "30px",
            background: "linear-gradient(90deg, #43a047, #66bb6a)",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            transition: "all 0.3s ease",
            "&:hover": {
              background: "linear-gradient(90deg, #388e3c, #43a047)",
              transform: "scale(1.05)",
            },
          }}
        >
          🚀 Add Product
        </Button>
      </Paper>

      {/* ✅ Animations */}
      <style>
        {`
          @keyframes slideIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </Box>
  );
}

export default AddNewProduct;
