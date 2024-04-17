import style from '../style.module.css'

import Header from './header'
import Main from './main'

export default function App(){
    return(
        <>
                <header  className={style.menim}>
                    <Header></Header>
                </header>
                <main>
                    <Main className={style.rightMenu}></Main>
                </main>

        </>
    )
}