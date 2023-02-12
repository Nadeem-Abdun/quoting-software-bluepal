import { Box, Stack } from '@mui/material'
import Content from './Components/Content';
import Header from './Components/Header';

function App() {
  return (
    <>
      <Box height='100vh' width='100vw' display='flex' justifyContent='center' alignItems='center' sx={{ display: { xs: 'none', lg: 'block' } }}>
        <Stack height='100%' width='100%' direction='column' justifyContent='center' alignItems='center'>
          {/* Header */}
          <Box height='9%' width='100%' display='flex' justifyContent='center' alignItems='center' bgcolor='#ffffff'>
            <Header />
          </Box>
          {/* Content */}
          <Box height='91%' width='100%' display='flex' justifyContent='center' alignItems='center' bgcolor='#edeff2'>
            <Content />
          </Box>
        </Stack>
      </Box>
      <Box height='768px' width='1366px' display='flex' justifyContent='center' alignItems='center' sx={{ display: { xs: 'block', lg: 'none' } }}>
        <Stack height='100%' width='100%' direction='column' justifyContent='center' alignItems='center'>
          {/* Header */}
          <Box height='9%' width='100%' display='flex' justifyContent='center' alignItems='center' bgcolor='#ffffff'>
            <Header />
          </Box>
          {/* Content */}
          <Box height='91%' width='100%' display='flex' justifyContent='center' alignItems='center' bgcolor='#edeff2'>
            <Content />
          </Box>
        </Stack>
      </Box>
    </>
  );
}

export default App;