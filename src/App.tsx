import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useState } from 'react';


 function App() {
  const [ratingValue, setRatingValue] = useState<number | null>(null);

  const isDisabled = ratingValue === null;
 
  return (     
      <Box sx={{ 
        width: "100vw", 
        display: "flex",        
        justifyContent:"center" }}>
        <Box sx={{
          width: "300px",
          display: "flex",
          flexDirection: "column",

        }}>
          <Typography variant='h1'>Hello</Typography>
         
          <Rating 
          value={ratingValue} 
          onChange={(_, value) => 
            setRatingValue(value)}
          />
          <Button disabled={isDisabled} sx={{ mt:1 }} variant="contained">Submit</Button>
          
        </Box>
        
      
    </Box>
  );
}

export default App