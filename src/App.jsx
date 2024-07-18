import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App (){
    return(
        <section className="App">
        <TwitterFollowCard  userName="fedem1997" name="Fede Meoniz"/>
        <TwitterFollowCard  userName="midudev" name="Miguel Angel"/>
        </section>
    )  
}