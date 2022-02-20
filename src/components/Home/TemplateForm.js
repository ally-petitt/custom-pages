import { useState } from "react"

function TemplateForm() {
    const [input, setInput] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(input)
    }

  return (
    <form onSubmit={handleSubmit}>
        <input onChange={(e) => {setInput(e.target.value); console.log(input)}}></input>
        <button type="submit">submit</button>
    </form>
  )
}

export default TemplateForm