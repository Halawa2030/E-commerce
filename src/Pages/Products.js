
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import productsData from "../data/products.json";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

function Products() {
  const [products, setProducts] = useState(productsData.Products || []);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <Box
      sx={{
        padding: { xs: 2, sm: 4 },
        background: "linear-gradient(135deg, #f9f9f9, #e3f2fd)",
        minHeight: "100vh",
      }}
    >
      {/* ✅ Title + Add Button */}
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "stretch", sm: "center" }}
        mb={3}
        gap={2}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            color: "primary.main",
            textAlign: { xs: "center", sm: "left" },
            textShadow: "1px 1px 3px rgba(0,0,0,0.2)",
          }}
        >
          Products List
        </Typography>
        <Button
          variant="contained"
          color="success"
          sx={{
            fontWeight: "bold",
            borderRadius: "30px",
            boxShadow: 3,
            transition: "all 0.3s ease",
            "&:hover": { transform: "scale(1.05)" },
          }}
          onClick={() => navigate("/add-product")}
        >
          + Add Product
        </Button>
      </Box>

      {/* ✅ Table / Cards (Responsive) */}
      {!isMobile ? (
        <TableContainer
          component={Paper}
          sx={{
            boxShadow: 5,
            borderRadius: 3,
            overflow: "hidden",
          }}
        >
          <Table>
            <TableHead
              sx={{
                background:
                  "linear-gradient(90deg, #1976d2 0%, #42a5f5 100%)",
              }}
            >
              <TableRow>
                <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>ID</TableCell>
                <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>Title</TableCell>
                <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>Price</TableCell>
                <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((p, i) => (
                <TableRow
                  key={p.id}
                  hover
                  sx={{
                    transition: "all 0.3s ease",
                    animation: `fadeIn 0.5s ease ${i * 0.1}s both`,
                    "&:hover": {
                      backgroundColor: "rgba(25, 118, 210, 0.1)",
                      transform: "scale(1.01)",
                    },
                  }}
                >
                  <TableCell>{p.id}</TableCell>
                  <TableCell>{p.title}</TableCell>
                  <TableCell>${p.price}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="info"
                      size="small"
                      onClick={() => navigate(`/products/${p.id}`)}
                      sx={{
                        marginRight: 1,
                        borderRadius: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      View
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      size="small"
                      onClick={() => handleDelete(p.id)}
                      sx={{ borderRadius: "20px", fontWeight: "bold" }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        /* ✅ Mobile View (Cards instead of table) */
        <Box display="grid" gap={2}>
          {products.map((p, i) => (
            <Paper
              key={p.id}
              sx={{
                p: 2,
                borderRadius: 3,
                boxShadow: 4,
                animation: `fadeIn 0.5s ease ${i * 0.15}s both`,
              }}
            >
              <Typography variant="h6" fontWeight="bold" color="primary">
                {p.title}
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Price: ${p.price}
              </Typography>
              <Box display="flex" gap={1}>
                <Button
                  variant="contained"
                  color="info"
                  size="small"
                  fullWidth
                  onClick={() => navigate(`/products/${p.id}`)}
                  sx={{ borderRadius: "20px", fontWeight: "bold" }}
                >
                  View
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  size="small"
                  fullWidth
                  onClick={() => handleDelete(p.id)}
                  sx={{ borderRadius: "20px", fontWeight: "bold" }}
                >
                  Delete
                </Button>
              </Box>
            </Paper>
          ))}
        </Box>
      )}

      {/* ✅ Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(15px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </Box>
  );
}

export default Products;
