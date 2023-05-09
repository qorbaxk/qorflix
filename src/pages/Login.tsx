import React, { useState } from 'react'

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

  return (
    <div className="baseColor baseContainer flex flex-col items-center gap-2 pt-16">
      <h2 className="text-4xl font-bold">로그인</h2>
      <form action="" method="post" className="mt-8">
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
            <span className="text-red-700 text-sm w-full text-left ml-1">
              이메일 형식이 잘못되었습니다.
            </span>
          ) : (
            email && (
              <span className="text-green-700 text-sm  w-full text-left ml-1">
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
        <button name="google" className="p-2">
          <img width={30} src="/src/assets/Google.svg" />
        </button>
        <button name="github" className="p-2">
          <img width={30} src="/src/assets/Github.svg" />
        </button>
      </div>
    </div>
  )
}

export default Login
