import { useState } from "react"
import { listTables } from '../../AwsFunctions';

function TemplateForm() {
    const [input, setInput] = useState({message: "", templateName: "", pathname: "" })
    const handleSubmit = (e) => {
        e.preventDefault()
        // TODO: send input to database
        
    }

    const handleChange = ({ target }) => {
        setInput({ ...input, [target.name]: target.value });
        console.log(input)
    }

    listTables()

  return (
    <form onSubmit={handleSubmit}>
        <button name="templateName" onClick={handleChange} value="1">1</button>
        <button name="templateName" onClick={handleChange} value="2">2</button>
        <button name="templateName" onClick={handleChange} value="3">3</button>
        <input name="message" onChange={handleChange} required></input>
        <input name="pathname" onChange={handleChange} required></input>
        <button type="submit">submit</button>
    </form>
  )
}

export default TemplateForm