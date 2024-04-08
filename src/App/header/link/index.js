import style from '../../../style.module.css'

export default function Link(params){
    return(
        <>
            <li>
                <a className={style.link} href={params.href}>
                    {params.children}
                </a>
            </li>
        </>
    )
}