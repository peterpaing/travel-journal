import Header from "./components/Header"
import data from "./data"
import Cards from "./components/Main"


export default function App(){

  const card = data.map(item=>{
   return  (
   <Cards
    key={item.id}
    {...item}
    />
  )
  })
 
  return (
     <>
     <Header/>
     <main>
      {card}
     </main>
     </>
  )
}