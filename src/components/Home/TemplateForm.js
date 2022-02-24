import { useState } from "react"
import { addItemToDb } from '../../AwsFunctions';
import { TextField, Button, Stack, Typography } from "@mui/material";

function TemplateForm() {
    const [input, setInput] = useState({message: "", templateName: "", pathname: "" })
   
    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = addItemToDb(input)
        if (res.statusCode == 200) {
          console.log("congrats! Your submission went through")
        }
    }

    const handleChange = ({ target }) => {
        setInput({ ...input, [target.name]: target.value });
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
          label="Email address"
          sx={{ width: "100%" }}
          helperText="This will enable you to make changes to your page in the future." />
        <Stack my={4} direction="row" alignItems="center">
          <Typography variant="subtitle1" component="p" sx={{ fontWeight: "400"}}>https://custompages.github.io/</Typography>
          <TextField
            name="pathname" 
            label="Your URL"
            required
            onChange={handleChange} />
        </Stack>
        <Button type="submit" variant="contained" color="secondary" sx={{ width: "600px" }}>Proceed to checkout</Button>
      </Stack>
    </form>
  )
}

export default TemplateForm