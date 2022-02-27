import TemplateForm from "./TemplateForm"
import { Box, Stack, Button, Typography, Container} from "@mui/material"
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import placeholder from "../../images/placeholder.jpeg"
import typing from "../../images/typing.jpg"
import url from "../../images/url.png"
import whyUs from "../../images/why-us.jpg"
import { Link } from "react-router-dom";

function Home() {
  let theme = createTheme({
    palette: {
      primary: {
        main: '#475AFF',
      },
      secondary: {
        main: '#8995FF',
      },
      success: {
        light: "#4caf50",
        main: "#2e7d32"
      }
    },
  });

  theme = responsiveFontSizes(theme);

  console.log('if you\'re reading this, hi!')

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
        <Stack spacing={2} mt={2} width={{ xs: "200px", sm: "300px", m: "400px"}}>
          <Button variant="outlined">How it works</Button>
          <Button variant="filled" sx={{ bgcolor: "var(--light-purple)" }}>
            Start Writing Your Message
          </Button>
        </Stack>
      </Container>


      {/* Step 1 */}
      <Container>
        <Stack direction={{ xs: "column", sm: "row"}} spacing={2} alignItems={{ xs: "center", sm:"start"}} >
          <Box textAlign={{ xs: "center", sm: "start"}}>
            <Typography variant="h5" component="h3" color="primary" sx={{fontWeight: "500"}}>
              Step 1: Write Your Message
            </Typography>
            <Typography variant="body1" mt={2} mr={4} lineHeight={2}
            >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </Box>
          <Box width={{ xs: "300px", sm: '600px'}} mx={{ xs: "auto"}}>
            <img src={typing} alt="placeholder" style={{ width: "100%", height: "100%"}} />
          </Box>
        </Stack>
      </Container>


      {/* Step 2 */}
      <Container sx={{ marginTop: "80px", marginBottom: "40px" }}>
        <Stack direction={{ xs: "column-reverse", sm: "row"}} spacing={2} alignItems={{ xs: "center", sm:"start"}}>
          <Box mr={{ xs: 0, sm: 4 }} width={{ xs: "300px", sm: '600px'}}>
            <img src={url} alt="placeholder" style={{ width: "100%", height: "100%"}} />
          </Box>
          <Box textAlign={{ xs: "center", sm: "end"}}>
            <Typography variant="h5" component="h3" color="primary" sx={{fontWeight: "500"}}>
              Step 2: Pick Your URL
            </Typography>
            <Typography variant="body1" mt={2} lineHeight={2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </Box>
        </Stack>
      </Container>


      {/* Step 3 */}
      <Container 
      sx={{ 
        marginTop: "80px", 
        marginBottom: "40px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column"
      }}>
        <Box textAlign="center">
          <Typography variant="h5" component="h3" color="primary" sx={{fontWeight: "500"}}>
            Step 3: Share Your Published Webpage!
          </Typography>
          <Typography variant="body1" mt={2} lineHeight={2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
        </Box>
        <Stack direction="row" spacing={{ xs: 1, sm: 3, md: 4}} alignItems="center" mt={4}>
          <Button sx={{ bgcolor: 'secondary.main' }}><Link to="/demo1" target="_blank" style={{ textDecoration: "none", color: "black" }}>View Demo 1</Link></Button>
          <Button sx={{ bgcolor: 'secondary.main' }}><Link to="/demo2" target="_blank" style={{ textDecoration: "none", color: "black" }}>View Demo 2</Link></Button>
          <Button sx={{ bgcolor: 'secondary.main' }}><Link to="/demo3" target="_blank" style={{ textDecoration: "none", color: "black" }}>View Demo 3</Link></Button>
        </Stack>
      </Container>


      {/* Why Us? */}
      <Container sx={{ marginTop: "80px", textAlign:"center" }}>
        <Stack direction={{ xs: "column", sm: "row"}} spacing={4} justifyContent="center" alignItems={{ xs: "center", sm:"center"}} >
          <Box mr={4}>
            <Typography variant="h5" component="body" color="primary" textAlign="center" sx={{fontWeight: "600"}}>
              Why Us?
            </Typography>
            <Typography variant="body1" mt={2} component="body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </Box>
          <img src={whyUs} style={{ maxWidth: "400px" }}/>
        </Stack>
      </Container>


      {/* template form */}
      <Container sx={{ marginTop: "100px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography variant="h4" component="body" color="primary" textAlign="center" sx={{ fontWeight: "600", borderBottom: "solid 3px black", width: "fit-content" }}>
              Start Writing Your Message
        </Typography>
        <TemplateForm />
      </Container>
    </ThemeProvider>
  )
}

export default Home