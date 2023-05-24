import React, { ChangeEvent, MouseEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GithubAuthProvider,
  GoogleAuthProvider,
} from 'firebase/auth'

const Login: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e
    if (name === 'email') {
      setEmail(value)
    } else if (name === 'password') {
      setPassword(value)
    }
  }

  const onSocialLogin = async (e: MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = e
    let provider
    const auth = getAuth()

    try {
      if (name === 'google') {
        provider = new GoogleAuthProvider()
      } else if (name === 'github') {
        provider = new GithubAuthProvider()
      }
      const data = await signInWithPopup(
        auth,
        provider as GoogleAuthProvider | GithubAuthProvider,
      )
      navigate('/')
    } catch (error) {
      console.error(error)
    }
  }

  const onSubmit = async (e: any): Promise<void> => {
    e.preventDefault()
    try {
      let data
      const auth = getAuth()
      data = await signInWithEmailAndPassword(auth, email, password)
      navigate('/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="baseColor baseContainer flex flex-col items-center gap-2 pt-16">
      <h2 className="text-4xl font-bold">로그인</h2>
      <form method="post" className="mt-8" onSubmit={onSubmit}>
        <fieldset className="flex flex-col gap-4 justify-center items-center w-full h-full">
          <legend className="a11y-hidden">회원 로그인 폼</legend>
          <input
            type="email"
            id="userId"
            name="email"
            placeholder="이메일을 입력해주세요"
            required
            className="w-96 h-12 pl-2 text-black"
            value={email}
            onChange={e => onChange(e)}
          />
          <input
            type="password"
            id="userPw"
            name="password"
            placeholder="비밀번호를 입력해주세요"
            required
            className="w-96 h-12 pl-2 text-black"
            value={password}
            onChange={e => onChange(e)}
          />
          <button
            role="submit"
            className={`w-96 h-14 ${
              email && password ? 'bg-primary-100 ' : 'bg-zinc-400'
            }`}
            disabled={email && password ? false : true}
          >
            로그인
          </button>
        </fieldset>
      </form>
      <div className="flex flex-row gap-4">
        <button
          role="submit"
          aria-label="구글 소셜 로그인 하기"
          onClick={onSocialLogin}
          name="google"
          className="p-2"
        >
          <img width={30} src="/src/assets/Google.svg" alt="구글 아이콘" />
        </button>
        <button
          role="submit"
          aria-label="깃허브 소셜 로그인 하기"
          onClick={onSocialLogin}
          name="github"
          className="p-2"
        >
          <img width={30} src="/src/assets/Github.svg" alt="깃허브 아이콘" />
        </button>
      </div>
      <div className="w-96 flex flex-row justify-between text-xs text-zinc-200">
        <p role="text">아직 계정이 없으세요?</p>
        <Link
          to="/register"
          role="button"
          aria-label="회원가입 하러 가기"
          className="underline underline-offset-4"
        >
          회원가입하기
        </Link>
      </div>
    </div>
  )
}

export default Login
