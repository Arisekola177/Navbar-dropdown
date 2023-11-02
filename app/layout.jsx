import Navbar from "@components/Navbar"
import './global.css'


export const metadata = {
    title: "Prompt",
    description: "Discover & share AI Prompts"
}

const Rootlayout = ({children}) => {
  return (
    <html lang='en'>
     
        <body>
          <Navbar />
         {children}
        </body>
        
    </html>
  )
}

export default Rootlayout