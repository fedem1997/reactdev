import './App.css'

export function App (){
    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' alt="Mi avatar" src="https://unavatar.io/kikobeats"/>
                <div className='tw-followCard-info'>
                    <strong>Miguel Angel</strong>
                    <span className='tw-followCard-infoUserName'>@mmiguel</span>
                </div>
            </header>
            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )  
}