import { useLocation } from "react-router-dom"

function Home() {
    console.log(useLocation())
  return (
    <div>Home</div>
  )
}

export default Home