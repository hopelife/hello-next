## 참조 페이지
- [Learn Next.js](https://nextjs.org/learn/basics/)
- [github/zeit/next-learn-demo](https://github.com/zeit/next-learn-demo)
- [Next.js 튜토리얼](https://brunch.co.kr/@hee072794/81)
- [github/hopelife/hello-next](https://github.com/hopelife/hello-next)

## 환경설정

### github repository

#### create remote repository
- https://github.com/hopelife/hello-next.git

#### git clone
```
training/web_app/front_end/reactjs$ git clone https://github.com/hopelife/hello-next.git

training/web_app/front_end/reactjs$ cd hello-next
training/web_app/front_end/reactjs/hello-next$ touch README.md
training/web_app/front_end/reactjs/hello-next$ touch .gitignore

training/web_app/front_end/reactjs/hello-next$ git add .
training/web_app/front_end/reactjs/hello-next$ git commit -, "first commit"
training/web_app/front_end/reactjs/hello-next$ git push origin mater
```

- .gitignore
```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*

```

## 튜토리얼

### Next.js 튜토리얼 1편: 시작하기
> [Getting Started](https://nextjs.org/learn/basics/getting-started)

#### install
- install next
```bash
training/web_app/front_end/reactjs/hello-next$ npm init -y
training/web_app/front_end/reactjs/hello-next$ npm install --save react react-dom next
training/web_app/front_end/reactjs/hello-next$ mkdir pages
```

- package.json
```javascript
{
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }
}
```

- run dev
```bash
training/web_app/front_end/reactjs/hello-next$ npm run dev
```

- browser
```chrome
http://localhost:3000

~~~ result
404
This page could not be found.
```

#### Create First Page
- pages/index.js
```javascript
const Index = () => (
  <div>
    <p>Hello Next.js</p>
  </div>
)

export default Index
```

- run dev
```bash
training/web_app/front_end/reactjs/hello-next$ npm run dev
```

- browser
```chrome
http://localhost:3000

~~~ result
Hello Next.js
```

### Next.js 튜토리얼 2편: 페이지 이동
> [Navigate Between Pages](https://nextjs.org/learn/basics/navigate-between-pages)

#### Introduction
- pages/about.js
```javascript
export default function About() {
  return (
    <div>
      <p>This is the about page</p>
    </div>
  )
}
```

- browser
```chrome
http://localhost:3000/about
```

#### Using Link
- pages/index.js
```javascript
// This is the Link API
import Link from 'next/link'

const Index = () => (
  <div>
    <Link href="/about">
      <a title="About Page">About Page</a>
    </Link>
    <p>Hello Next.js</p>
  </div>
)

export default Index
```


### Next.js 튜토리얼 3편: 공유 컴포넌트
> [Using Shared Components](https://nextjs.org/learn/basics/using-shared-components/create-the-header-component)

#### Create the Header Component

- components/Header.js

```javascript
import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </div>
)

export default Header
```

- pages/index.js

```javascript
import Header from '../components/Header'

export default function Index() {
  return (
    <div>
      <Header />
      <p>Hello Next.js</p>
    </div>
  )
}
```

- pages/about.js

```javascript
import Header from '../components/Header'

export default function About() {
  return (
    <div>
      <Header />
      <p>This is the about page</p>
    </div>
  )
}
```

#### The Layout Component

- components/MyLayout.js

```javascript
import Header from './Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
)

export default Layout
```

- pages/index.js

```javascript
import Layout from '../components/MyLayout.js'

export default function Index() {
  return (
    <Layout>
      <p>Hello Next.js</p>
    </Layout>
  )
}
```

- pages/about.js

```javascript
import Layout from '../components/MyLayout.js'

export default function About() {
  return (
    <Layout>
      <p>This is the about page</p>
    </Layout>
  )
}
```

#### Rendering Child Components

##### Method 1 - Layout as a Higher Order Component

- components/MyLayout.js

```javascript
import Header from './Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const withLayout = Page => {
  return () => (
    <div style={layoutStyle}>
      <Header />
      <Page />
    </div>
  )
}

export default withLayout
```

- pages/index.js

```javascript
import withLayout from '../components/MyLayout'

const Page = () => <p>Hello Next.js</p>

export default withLayout(Page)
```

- pages/about.js

```javascript
import withLayout from '../components/MyLayout'

const Page = () => <p>This is the about page</p>

export default withLayout(Page)
```

##### Method 2 - Page content as a prop

- components/MyLayout.js

```javascript
import Header from './Header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.content}
  </div>
)

export default Layout
```


- pages/index.js
```javascript
import Layout from '../components/MyLayout.js'

const indexPageContent = <p>Hello Next.js</p>

export default function Index() {
  return <Layout content={indexPageContent} />
}
```


- pages/about.js

```javascript
import Layout from '../components/MyLayout.js'

const aboutPageContent = <p>This is the about page</p>

export default function About() {
  return <Layout content={aboutPageContent} />
}
```

### Next.js 튜토리얼 4편: 동적 페이지
> [Create Dynamic Pages](https://nextjs.org/learn/basics/create-dynamic-pages)

#### Adding a list of posts

- pages/index.js

```javascript
import Layout from '../components/MyLayout.js'
import Link from 'next/link'

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink title="Hello Next.js" />
        <PostLink title="Learn Next.js is awesome" />
        <PostLink title="Deploy apps with Zeit" />
      </ul>
    </Layout>
  )
}
```

#### Passing Data via Query Strings

- pages/post.js

```javascript
import { withRouter } from 'next/router'
import Layout from '../components/MyLayout.js'

const Content = props => (
  <div>
    <h1>{props.router.query.title}</h1>
    <p>This is the blog post content.</p>
  </div>
)

const Page = withRouter(props => (
  <Layout>
    <Content />
  </Layout>
))

export default Page
```

### Next.js 튜토리얼 5편: 라우트 마스킹
> [Clean URLs with Route Masking](https://nextjs.org/learn/basics/clean-urls-with-route-masking)

- pages/index.js

```javascript
import Layout from '../components/MyLayout.js'
import Link from 'next/link'

const PostLink = props => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink id="hello-nextjs" title="Hello Next.js" />
        <PostLink id="learn-nextjs" title="Learn Next.js is awesome" />
        <PostLink id="deploy-nextjs" title="Deploy apps with Zeit" />
      </ul>
    </Layout>
  )
}
```

### Next.js 튜토리얼 6편: 서버 사이드 URL

#### Server Side Support for Clean URLs

- install express

```bash
training/web_app/front_end/reactjs/hello-next$ npm install --save express
```


- server.js

```javascript
const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    server.get('/p/:id', (req, res) => {
      const actualPage = '/post'
      const queryParams = { title: req.params.id }
      app.render(req, res, actualPage, queryParams)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
```


- package.json

```json
{
  "scripts": {
    "dev": "node server.js",
    "build": "next build",
    "start": "NODE_ENV=production node server.js"
  }
}
```


- run server

```bash
training/web_app/front_end/reactjs/hello-next$ npm run dev
```


### Next.js 튜토리얼 7편: 데이터 가져오기
> [Fetching Data for Pages](https://nextjs.org/learn/basics/fetching-data-for-pages)

#### create git branch

```bash
training/web_app/front_end/reactjs/hello-next$ git branch fetch_data
training/web_app/front_end/reactjs/hello-next$ git checkout fetch_data
```

#### Fetching Batman Shows

- install

```bash
training/web_app/front_end/reactjs/hello-next$ npm install --save isomorphic-unfetch
```

- pages/index.js

```javascript
import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(show => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data.map(entry => entry.show)
  }
}

export default Index
```


- server.js

```javascript
server.get('/p/:id', (req, res) => {
  const actualPage = '/post'
  const queryParams = { id: req.params.id }
  app.render(req, res, actualPage, queryParams)
})
```


- pages/post.js

```javascript
import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'

const Post = props => (
  <Layout>
    <h1>{props.show.name}</h1>
    <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
    <img src={props.show.image.medium} />
  </Layout>
)

Post.getInitialProps = async function(context) {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  console.log(`Fetched show: ${show.name}`)

  return { show }
}

export default Post
```


### Next.js 튜토리얼 8편: 컴포넌트 스타일링

> [Styling Components](https://nextjs.org/learn/basics/styling-components)

#### change git branch to master
```bash
training/web_app/front_end/reactjs/hello-next$ git checkout master
```

#### Styling our home page

- pages/index.js

```javascript
import Layout from '../components/MyLayout.js'
import Link from 'next/link'

function getPosts() {
  return [
    { id: 'hello-nextjs', title: 'Hello Next.js' },
    { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
    { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
  ]
}

export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        {getPosts().map(post => (
          <li key={post.id}>
            <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>{`
        h1,
        a {
          font-family: 'Arial';
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
    </Layout>
  )
}
```


#### Global Styles

- install 

```bash
training/web_app/front_end/reactjs/hello-next$ npm install --save react-markdown
```


- pages/post.js

```javascript
import Layout from '../components/MyLayout.js'
import { withRouter } from 'next/router'
import Markdown from 'react-markdown'

export default withRouter(props => (
  <Layout>
    <h1>{props.router.query.title}</h1>
    <div className="markdown">
      <Markdown
        source={`
This is our blog post.
Yes. We can have a [link](/link).
And we can have a title as well.

### This is a title

And here's the content.
     `}
      />
    </div>
    <style jsx global>{`
      .markdown {
        font-family: 'Arial';
      }

      .markdown a {
        text-decoration: none;
        color: blue;
      }

      .markdown a:hover {
        opacity: 0.6;
      }

      .markdown h3 {
        margin: 0;
        padding: 0;
        text-transform: uppercase;
      }
    `}</style>
  </Layout>
))
```


### Next.js 튜토리얼 9편: 배포하기


