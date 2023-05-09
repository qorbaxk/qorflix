import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, dbService } from '../firebase-config'
import { collection, addDoc } from 'firebase/firestore'
import RegisterInput from '../components/Register/RegisterInput'

const Register: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checkPassword, setCheckPassword] = useState('')
  const [nickName, setNickName] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const navigate = useNavigate()

  const [emailMessage, setEmailMessage] = useState('')
  const [passwordMessage, setPasswordMessage] = useState('')
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('')
  const [nickNameMessage, setNickNameMessage] = useState('')

  const [isEmail, setIsEmail] = useState(false)
  const [isPassword, setIsPassword] = useState(false)
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false)
  const [isNickName, setIsNickName] = useState(false)

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const currentEmail = e.target.value
    setEmail(currentEmail)
    const emailRegExp =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
    if (!emailRegExp.test(currentEmail)) {
      setEmailMessage('이메일 형식이 잘못되었습니다.')
      setIsEmail(false)
      console.error(isEmail)
    } else {
      setEmailMessage('올바른 이메일 형식입니다.')
      setIsEmail(true)
    }
  }
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const currentPassword = e.target.value
    setPassword(currentPassword)
    const passwordRegExp =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
    if (!passwordRegExp.test(currentPassword)) {
      setPasswordMessage(
        '숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요.',
      )
      setIsPassword(false)
      console.error(isPassword)
    } else {
      setPasswordMessage('안전한 비밀번호 입니다.')
      setIsPassword(true)
    }
  }
  const onChangePasswordConfirm = (e: ChangeEvent<HTMLInputElement>) => {
    const currentPasswordConfirm = e.target.value
    setCheckPassword(currentPasswordConfirm)
    if (password !== currentPasswordConfirm) {
      setPasswordConfirmMessage('비밀번호가 일치하지 않습니다.')
      setIsPasswordConfirm(false)
      console.error(isPasswordConfirm)
    } else {
      setPasswordConfirmMessage('비밀번호가 일치합니다.')
      setIsPasswordConfirm(true)
    }
  }
  const onChangeNickName = (e: ChangeEvent<HTMLInputElement>) => {
    const currentNickName = e.target.value
    setNickName(currentNickName)
    if (nickName.length < 2) {
      setNickNameMessage('닉네임은 최소 2자 이상이어야 합니다.')
      setIsNickName(false)
      console.error(isNickName)
    } else if (nickName.length > 20) {
      setNickNameMessage('닉네임은 최대 20자까지 설정할 수 있습니다.')
      setIsNickName(false)
      console.error(isNickName)
    } else {
      setNickNameMessage('좋은 닉네임입니다 :)')
      setIsNickName(true)
    }
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    interface SystemError {
      code: string
      message: string
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      await addDoc(collection(dbService, 'userInfo'), {
        email: email,
        password: password,
        checkPassword: checkPassword,
        userNickName: nickName,
        createdAt: new Date(),
        creatorID: auth.currentUser ? auth.currentUser.uid : '',
      })
      setEmail('')
      setPassword('')
      setCheckPassword('')
      setNickName('')
      navigate('/login')
    } catch (error) {
      const err = error as SystemError
      switch (err.code) {
        case 'auth/invalid-email':
          setErrorMsg('잘못된 이메일 주소입니다.')
          break
        case 'auth/email-already-in-use':
          setErrorMsg('이미 가입되어 있는 계정입니다.')
          break
      }
    }
  }
  return (
    <div className="baseColor baseContainer flex flex-col items-center gap-2 pt-16">
      <h2 className="text-4xl font-bold">회원가입</h2>
      <form
        className="flex flex-col gap-4 items-center justify-center mt-8"
        onSubmit={onSubmit}
      >
        <RegisterInput
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={onChangeEmail}
          placeholder="이메일"
          required
        />
        <p
          className={`${
            isEmail ? 'text-green-500' : 'text-red-500'
          } text-xs w-full text-left ml-1`}
        >
          {emailMessage}
        </p>
        <RegisterInput
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={onChangePassword}
          placeholder="비밀번호"
          required
        />
        <p
          className={`${
            isPassword ? 'text-green-500' : 'text-red-500'
          } text-xs w-full text-left ml-1`}
        >
          {passwordMessage}
        </p>
        <RegisterInput
          id="checkPassword"
          type="password"
          name="checkPassword"
          value={checkPassword}
          onChange={onChangePasswordConfirm}
          placeholder="비밀번호확인"
          required
        />
        <p
          className={`${
            isPasswordConfirm ? 'text-green-500' : 'text-red-500'
          } text-xs w-full text-left ml-1`}
        >
          {passwordConfirmMessage}
        </p>
        <RegisterInput
          id="nickName"
          type="text"
          name="nickName"
          value={nickName}
          onChange={onChangeNickName}
          placeholder="닉네임"
          required
        />
        <p
          className={`${
            isNickName ? 'text-green-500' : 'text-red-500'
          } text-xs w-full text-left ml-1`}
        >
          {nickNameMessage}
        </p>
        <button
          type="submit"
          value="회원가입"
          className={`w-96 h-14 text-center ${
            isEmail && isPassword && isPasswordConfirm && isNickName
              ? 'bg-primary-100 '
              : 'bg-zinc-400'
          }`}
          disabled={
            isEmail && isPassword && isPasswordConfirm && isNickName
              ? false
              : true
          }
        >
          회원가입
        </button>
        {errorMsg && (
          <span className="text-xs text-left text-primary-300">{errorMsg}</span>
        )}
      </form>
    </div>
  )
}

export default Register
