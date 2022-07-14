import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src='https://images.unsplash.com/photo-1629802478579-e0fa4ea66a79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2F4b3Bob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
            />

            <div className={styles.profile}>
                <Avatar src="https://github.com/FelipeWandork.png" />
                <strong>Felipe Wandork</strong>
                <span>Saxofonista</span>
            </div>

            <footer>

                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}