import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/FelipeWandork.png" />
                    <div className={styles.authorInfo}>
                        <strong>Felipe Wandork</strong>
                        <span>Saxofonista</span>
                    </div>
                </div>
                <time dateTime='2022-07-12 16:00:00'>Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acbei de subir mais um projeo no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p><a href="#">jane.design/doctorcare</a></p>

                <p><a href="#">#novoprojeto</a>{' '}
                    <a href="#">#nlw</a>{' '}
                    <a href="#">#rocketseat</a>
                </p>
            </div>
            <form className={styles.commentForm}>
                <strong>Deixe o seu feedback</strong>
                <textarea placeholder='Deixe um comentário' />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>

        </article>
    )
}