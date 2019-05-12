- [Learn Next.js](https://nextjs.org/learn/basics/)
- [github/zeit/next-learn-demo](https://github.com/zeit/next-learn-demo)
- [Next.js 튜토리얼](https://brunch.co.kr/@hee072794/81)
- [github/hopelife/hello-next](https://github.com/hopelife/hello-next)

## settings

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



### Next.js 튜토리얼 3편: 공유 컴포넌트



### Next.js 튜토리얼 4편: 동적 페이지



### Next.js 튜토리얼 5편: 라우트 마스킹



### Next.js 튜토리얼 6편: 서버 사이드



### Next.js 튜토리얼 7편: 데이터 가져오기



### Next.js 튜토리얼 8편: 컴포넌트 스타일링



### Next.js 튜토리얼 9편: 배포하기


