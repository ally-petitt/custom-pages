import { useState } from "react"
import { addItemToDb } from '../../AwsFunctions';

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
    <form onSubmit={handleSubmit}>
        <button name="templateName" onClick={handleChange} value="Template1" type="button">1</button>
        <button name="templateName" onClick={handleChange} value="Template2" type="button">2</button>
        <button name="templateName" onClick={handleChange} value="Template3" type="button">3</button>
        <input name="message" onChange={handleChange} required></input>
        <input name="pathname" onChange={handleChange} required></input>
        <button type="submit">submit</button>
    </form>
  )
}

export default TemplateForm