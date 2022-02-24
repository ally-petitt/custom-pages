import { useState } from "react"
import { addItemToDb, getItemFromDb } from '../../AwsFunctions';
import { TextField, Button, Stack, Box, Typography } from "@mui/material";

function TemplateForm() {
    const [input, setInput] = useState({message: "", email: "", templateName: "Template1", pathname: "" })
    const [props, setProps] = useState({ 
      email: {
        isInvalid: false, helperText: "This will enable you to make changes to your page in the future."
      },
      path: {
        isTaken: false
      },
      submitWentThrough: false
    })

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!validateEmail()) return
        if (await checkIfPathIsTaken()) return
        
        console.log('adding to db...')
        const res = await addItemToDb(input)
        if (res.statusCode == 200) {
          setProps({ ...props, submitWentThrough: true })
        }
    }

    const handleChange = ({ target }) => {
      setInput({ ...input, [target.name]: target.value });
    }

    const validateEmail = () => {
      const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      if (!input.email.match(emailFormat) && input.email){
        setProps({...props, email:{ isInvalid: true, helperText: "Please enter a valid email address." }})
        return false
      }
      setProps({...props, email:{ isInvalid: false, helperText: "This will enable you to make changes to your page in the future."}})
      return true
    }

    const checkIfPathIsTaken = async () => {
      const res = await getItemFromDb(input.pathname)
      if (res.hasOwnProperty('Item')) {
        setProps({...props, path: {isTaken: true}})
        return true
      }
      setProps({...props, path: {isTaken: false}})
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
          error={props.email.isInvalid}
          label="Email address"
          onChange={handleChange}
          sx={{ width: "100%" }}
          helperText={props.email.helperText} />
        <Stack my={4} direction="row" alignItems="center">
          <Typography variant="subtitle1" component="p" sx={{ fontWeight: "400"}}>https://custompages.github.io/</Typography>
          <TextField
            name="pathname" 
            label="Your URL"
            required
            error={props.path.isTaken}
            helperText={props.path.isTaken ? "This pathname is currently taken. Please enter a different pathname." : null}
            onChange={handleChange} />
        </Stack>
        <Button type="submit" variant="contained" color="secondary" sx={{ width: "600px" }}>Proceed to checkout</Button>
        {
          props.submitWentThrough ? 
          <Box mt={2} sx={{ width: 550,
            padding: 2,
            backgroundColor: 'success.light',
            textAlign: "center"
           }}>Your page has been published!</Box>
          : null
        }
      </Stack>
    </form>
  )
}

export default TemplateForm