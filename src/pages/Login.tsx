import React, { useState } from 'react'
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
  const [emailError, setEmailError] = useState(false)
  const [password, setPassword] = useState('')

  const onChange = (e: any) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
    const {
      target: { name, value },
    } = e
    if (name === 'email') {
      setEmail(value)
      !emailRegex.test(value) ? setEmailError(true) : setEmailError(false)
    } else if (name === 'password') {
      setPassword(value)
    }
  }

  const onSocialClick = async (e: any) => {
    const {
      target: { name },
    } = e
    let provider
    const auth = getAuth()

    if (name === 'google') {
      provider = new GoogleAuthProvider()
      //구글로그인
    } else if (name === 'github') {
      provider = new GithubAuthProvider()
      //깃허브로그인
    }
    const data = await signInWithPopup(
      auth,
      provider as GoogleAuthProvider | GithubAuthProvider,
    )
  }

  const onSubmit = async (e: any): Promise<void> => {
    e.preventDefault()
    try {
      let data
      const auth = getAuth()
      //로그인
      data = await signInWithEmailAndPassword(auth, email, password)

      console.log(data)
    } catch (error) {
      console.log(error)
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
          {emailError ? (
            <span className="text-red-500 text-sm w-full text-left ml-1">
              이메일 형식이 잘못되었습니다.
            </span>
          ) : (
            email && (
              <span className="text-green-500 text-sm  w-full text-left ml-1">
                올바른 형식입니다.
              </span>
            )
          )}
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
            type="submit"
            className={`w-96 h-14 ${
              emailError === false && email && password
                ? 'bg-primary-100 '
                : 'bg-zinc-400'
            }`}
            disabled={emailError === false && email && password ? false : true}
          >
            로그인
          </button>
        </fieldset>
      </form>
      <div className="flex flex-row gap-4">
        <button onClick={onSocialClick} name="google" className="p-2">
          <img width={30} src="/src/assets/Google.svg" />
        </button>
        <button onClick={onSocialClick} name="github" className="p-2">
          <img width={30} src="/src/assets/Github.svg" />
        </button>
      </div>
      <div className="w-96 flex flex-row justify-between text-xs text-zinc-200">
        <p>아직 계정이 없으세요?</p>
        <Link
          to="/register"
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
