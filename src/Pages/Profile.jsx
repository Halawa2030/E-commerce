


import React from 'react';
import { Box, Typography, Avatar, IconButton, Link, Stack  } from '@mui/material';
import { GitHub, LinkedIn, Facebook, WhatsApp } from '@mui/icons-material';
import backgroundImage from '../images/avatar.jpg';       // صورة الخلفية
import profialimage from '../images/avatar.jpg' // صورتك الشخصية

export default function Profile() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage:` url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 3,
        py: 5,
        position: 'relative',
        '&::after': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: 0,
        },
      }}
    >
      <Box
        sx={{
          zIndex: 1,
          textAlign: 'center',
          color: 'white',
          maxWidth: '600px',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          p: 4,
          borderRadius: 3,
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <Avatar
          src={profialimage}
          alt="Ashraf Halawa"
          sx={{
            width: 120,
            height: 120,
            margin: '0 auto',
            mb: 2,
            border: '3px solid white',
          }}
        />
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Ashraf Halawa
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 ,fontSize:15}}>
          <strong style={{fontSize:"25px" ,color:"#34d9c4"}}>Frontend Developer </strong>  Passionate about crafting clean interfaces with React
          <br />
         Always learning, always building
        </Typography>
        <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 6 }} style={{color:"#57d5e3" ,fontSize:"25px"}}>
           اللهم اجعل هذا العمل خالصًا لوجهك الكريم، ووفقني لما تحب وترضى، وبارك لي في علمي وجهدي.
        </Typography>
        <Stack direction="row" spacing={3} justifyContent="center">
          <Link href="https://www.linkedin.com/in/ashraf-halawa-3b2747345" target="_blank" rel="noopener">
            <IconButton sx={{ color: 'white' }}>
              <LinkedIn />
            </IconButton>
          </Link>
          <Link href="https://github.com/halawa2030" target="_blank" rel="noopener">
            <IconButton sx={{ color: 'white' }}>
              <GitHub />
            </IconButton>
          </Link>
          <Link href="https://www.facebook.com/share/1MHTYVrFGV/?mibextid=wwXIfr" target="_blank" rel="noopener">
            <IconButton sx={{ color: 'white' }}>
              <Facebook />
            </IconButton>
          </Link>
          <Link href="https://wa.me/201097717014" target="_blank" rel="noopener">
            <IconButton sx={{ color: 'white' }}>
              <WhatsApp />
            </IconButton>
          </Link>
        </Stack>
      </Box>
    </Box>
  );
}