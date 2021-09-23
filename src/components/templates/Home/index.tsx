import { ReactElement } from "react"

export interface HomeProps {
   bandTable: ReactElement
}

const Home: React.FC<HomeProps> = ({ bandTable }) => {
   return <div>{bandTable}</div>
}

export default Home
