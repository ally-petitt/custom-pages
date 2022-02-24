import { useState } from "react"
import { addItemToDb, getItemFromDb } from '../../AwsFunctions';
import { TextField, Button, Stack, Typography } from "@mui/material";

function TemplateForm() {
    const [input, setInput] = useState({message: "", email: "", templateName: "Template1", pathname: "" })
    const [emailProps, setEmailProps] = useState({ isInvalid: false, helperText: "This will enable you to make changes to your page in the future."})
    const [pathIsTaken, setPathIsTaken] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!validateEmail()) return
        console.log(checkIfPathIsTaken())
        if (await checkIfPathIsTaken()) return
        
        console.log('adding to db...')
        const res = await addItemToDb(input)
        if (res.statusCode == 200) {
          console.log("congrats! Your submission went through")
        }
    }

    const handleChange = ({ target }) => {
      setInput({ ...input, [target.name]: target.value });
    }

    const validateEmail = () => {
      const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      if (!input.email.match(emailFormat) && input.email){
        setEmailProps({ isInvalid: true, helperText: "Please enter a valid email address." })
        return false
      }
      setEmailProps({ isInvalid: false, helperText: "This will enable you to make changes to your page in the future."})
      return true
    }

    const checkIfPathIsTaken = async () => {
      const res = await getItemFromDb(input.pathname)
      if (res.hasOwnProperty('Item')) {
        setPathIsTaken(true)
        console.log('path tatken')
        return true
      }
      console.log('path not take')
      setPathIsTaken(false)
      return false
    }

  return (
    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
      <Stack direction="column" p={4} alignItems="center">
        <TextField
          sx={{ marginBottom: "40px", width:"100%" }}
          name="message" 
          id="outlined-multiline-static" 
          multiline 
          rows={6} 
          label="Your message"
          required
          onChange={handleChange} />
        <TextField
          name="email"
          error={emailProps.isInvalid}
          label="Email address"
          onChange={handleChange}
          sx={{ width: "100%" }}
          helperText={emailProps.helperText} />
        <Stack my={4} direction="row" alignItems="center">
          <Typography variant="subtitle1" component="p" sx={{ fontWeight: "400"}}>https://custompages.github.io/</Typography>
          <TextField
            name="pathname" 
            label="Your URL"
            required
            error={pathIsTaken}
            helperText={pathIsTaken ? "This pathname is currently taken. Please enter a different pathname." : null}
            onChange={handleChange} />
        </Stack>
        <Button type="submit" variant="contained" color="secondary" sx={{ width: "600px" }}>Proceed to checkout</Button>
      </Stack>
    </form>
  )
}

export default TemplateForm