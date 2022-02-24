import { useEffect, useState, createElement} from "react"
import { useLocation } from "react-router-dom"
import { getItemFromDb } from "../../AwsFunctions"
import Page404 from "./Page404"
import Template1 from "./Template1"
import Template2 from "./Template2"
import Template3 from "./Template3"

function TemplateContainer() {
  const path = useLocation().pathname.slice(1) // remove '/' at beginning of pathname
  const [response, setResponse] = useState({})

  useEffect(async () => {
    const res = await getItemFromDb(path)

    if (!res.hasOwnProperty("Item")) {
      setResponse({
        templateName: "Page404"
      })
    } else{
      console.log('recieved', res.Item)
      setResponse({
        templateName: res.Item.templateName.S,
        message: res.Item.message.S
      })
    }
  }, [])

  const returnCorrectTemplate = () => {
    switch(response.templateName){
      case "Template1":
        return <Template1 message={response.message}/>
      case "Template2":
        return <Template2 message={response.message}/>
      case "Template3":
        return <Template3 message={response.message}/>
      case "Page404":
        return <Page404 />
      default:
        return <div>this page is currenly unavailable</div>
    }
  }

  return (
    <>
    {
      response ? returnCorrectTemplate() : <div>loading...</div>
    }
    </>
  )
}

export default TemplateContainer