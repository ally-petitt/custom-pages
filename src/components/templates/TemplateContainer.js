import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { getItemFromDb } from "../../AwsFunctions"

function TemplateContainer() {
  const path = useLocation().pathname.slice(1) // remove '/' at beginning of pathname

  useEffect(async () => {
    await getItemFromDb(path).then((res) => {
      if (!res.Item) {
        console.log('page not found')
      } else{
        console.log(res.Item)
      }
    });
    
  }, [])

  return (
    <div>TemplateContainer</div>
  )
}

export default TemplateContainer