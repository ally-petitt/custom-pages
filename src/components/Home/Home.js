import TemplateForm from "./TemplateForm"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"

function Home() {
  return (
    <div className="home">
      <Container
      sx={{
        textAlign: "center",
        height: "80vh",
        display: 'flex',
        justifyContent: "center",
        flexDirection: 'column',
        alignItems: "center"  
      }}>
        <Typography variant='h1' sx={{ fontWeight: 400 }}>
          Lorem ipsum dolor sit amet, consectetur.
        </Typography>
        <Typography variant="h3" sx={{ color: "text.secondary", fontWeight: 300, marginBottom: "15px" }}>
         Sed do eiusmod tempor incididunt
        </Typography>
        <Stack spacing={2} sx={{ width: "400px", marginTop: "10px" }}>
          <Button variant="outlined">How it works</Button>
          <Button variant="filled"sx={{ bgcolor: "var(--light-purple)" }}>
            Start Writing Your Message
          </Button>
        </Stack>

        
        
      </Container>



      {/* <TemplateForm /> */}
    </div>
  )
}

export default Home