import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'
import styles from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/FelipeWandork.png',
      name: 'Felipe Wandork',
      role: 'Tech Lead'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto para o GH e estou divulgando por aqui' },
      { type: 'link', content: 'felipewandork@gmail.com' },
    ],
    publishedAt: new Date('2022-07-14 09:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayke Brito',
      role: 'Instructor'
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal' },
      { type: 'paragraph', content: 'Subi mais um projeto para o GH e estou divulgando por aqui' },
      { type: 'link', content: 'felipewandork@gmail.com' },
    ],
    publishedAt: new Date('2022-07-13 09:00:00'),
  }
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}

        </main>
      </div>
    </div>
  )
}