import { useLocation } from "react-router-dom"

// the template container will load in the component that corresponds to the template that the user chose 
// when they initially made the purchase. It will pass in props
function TemplateContainer() {
    console.log(useLocation())
  return (
    <div>TemplateContainer</div>
  )
}

export default TemplateContainer