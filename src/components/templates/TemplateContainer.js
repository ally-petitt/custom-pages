import { useEffect, useState, createElement} from "react"
import { useLocation } from "react-router-dom"
import { getItemFromDb } from "../../AwsFunctions"
import Template1 from "./Template1"

function TemplateContainer() {
  const path = useLocation().pathname.slice(1) // remove '/' at beginning of pathname
  const [response, setResponse] = useState({})

  useEffect(async () => {
    await getItemFromDb(path).then((res) => {

      if (!res.hasOwnProperty("Item")) {
        console.log('page not found')
      } else{
        console.log('recieved', res.Item)
        setResponse({
          templateName: res.Item.templateName.S,
          message: res.Item.message.S
        })
      }
    });
    
  }, [])

  const returnCorrectTemplate = () => {
    switch(response.templateName){
      case "template1":
        return <Template1 message={response.message}/>
      default:
        return <div>default template</div>
    }
  }

  return (
    <>
    <div>TemplateContainer</div>
    {
      response ? returnCorrectTemplate() : <div>maybe go to 404 page or home page?</div>
    }
    </>
  )
}

export default TemplateContainer