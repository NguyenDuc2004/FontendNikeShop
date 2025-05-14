
import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import ShieldIcon from "@mui/icons-material/Shield";
import { useNavigate } from "react-router";

const ForgotPass = () => {
    const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleEmailChange = () => {
    
  };

  const handleResetPassword = () => {
    // Logic to handle password reset goes here
  };

  const handleBackToLogin = () => {
    // Logic to navigate back to login goes here
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        backgroundColor: "background.default",
        py:6,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, maxWidth: 320 }}>
        <Box sx={{ backgroundColor: "primary.main", padding: 2, borderRadius: "50%" }}>
          <ShieldIcon sx={{ color: "white", fontSize: 40 }} />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
          <Typography variant="h6" sx={{ textAlign: "center", fontWeight: "bold" }}>
            Reset your password
          </Typography>
          <Typography variant="body2" sx={{ textAlign: "center", color: "text.secondary" }}>
            Forgot your password? We'll email you a link with instructions to reset it.
          </Typography>
        </Box>
        <TextField
          fullWidth
          label="Email address"
          variant="outlined"
          value={email}
          onChange={handleEmailChange}
          sx={{ marginBottom: 2 }}
        />
        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 2 }}>
          <Button
            variant="contained"
            fullWidth
            onClick={handleResetPassword}
            sx={{ height: 40 }}
          >
            Reset password
          </Button>
          <Button
            variant="outlined"
            fullWidth
            onClick={() => navigate("/login")}
            sx={{ height: 40 }}
          >
            Back to login
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ForgotPass;
