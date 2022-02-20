import { useState } from "react"

function TemplateForm() {
    const [input, setInput] = useState({message: "", templateName: "" })

    const handleSubmit = (e) => {
        e.preventDefault()
        // TODO: send input to database
        console.log(input)
    }

    const handleChange = ({ target }) => {
        setInput({ ...input, [target.name]: target.value });
        console.log(input)
    }

  return (
    <form onSubmit={handleSubmit}>
        <button name="templateName" type="button" onClick={handleChange} value="1">1</button>
        <button name="templateName" type="button" onClick={handleChange} value="2">2</button>
        <button name="templateName" type="button" onClick={handleChange} value="3">3</button>
        <input name="message" onChange={handleChange}></input>
        <button type="submit">submit</button>
    </form>
  )
}

export default TemplateForm