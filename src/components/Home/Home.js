import TemplateForm from "./TemplateForm"
import { Box, Stack, Button, Typography, Container} from "@mui/material"
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import placeholder from "../../images/placeholder.jpeg"

function Home() {
  let theme = createTheme({
    palette: {
      primary: {
        main: '#475AFF',
      },
      secondary: {
        main: '#8995FF',
      },
    },
  });

  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      {/* hero section */}
      <Container
      sx={{
        textAlign: "center",
        height: "600px",
        display: 'flex',
        justifyContent: "center",
        flexDirection: 'column',
        alignItems: "center"  
      }}>
        <Typography variant='h1' sx={{ fontWeight: 400 }}>
          Lorem ipsum dolor sit amet, consectetur.
        </Typography>
        <Typography variant="h3" mt={2} sx={{ color: "text.secondary", fontWeight: 300, marginBottom: "15px" }}>
         Sed do eiusmod tempor incididunt
        </Typography>
        <Stack spacing={2} sx={{ width: "400px", marginTop: "10px" }}>
          <Button variant="outlined">How it works</Button>
          <Button variant="filled"sx={{ bgcolor: "var(--light-purple)" }}>
            Start Writing Your Message
          </Button>
        </Stack>
      </Container>


      {/* Step 1 */}
      <Container>
        <Stack direction={{ xs: "column", sm: "row"}} spacing={2} >
          <Box>
            <Typography variant="h5" component="h3" color="primary" sx={{fontWeight: "500"}}>
              Step 1: Pick a Template
            </Typography>
            <Typography variant="body1" mt={2} mr={3} lineHeight={2}
            >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </Box>
          <Box>
            <img src={placeholder} alt="placeholder" style={{ width: "100%", height: "100%"}} />
          </Box>
        </Stack>
      </Container>


      {/* Step 2 */}
      <Container>
        <Stack direction={{ xs: "column", sm: "row"}} spacing={2} >
          <Box>
            <img src={placeholder} alt="placeholder" style={{ width: "100%", height: "100%"}} />
          </Box>
          <Box>
            <Typography variant="h5" component="h3" color="primary" sx={{fontWeight: "500"}}>
              Step 2: Write Your Message
            </Typography>
            <Typography variant="body1" sx={{ marginTop: "15px", marginRight: "35px", lineHeight: "30px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </Box>
        </Stack>
      </Container>



      {/* <TemplateForm /> */}
    </ThemeProvider>
  )
}

export default Home