import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth, storageService } from '../firebase-config'
import RegisterInput from '../components/Register/RegisterInput'
import RegisterImage from '../components/Register/RegisterImage'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'

import { getDownloadURL, ref, uploadString } from 'firebase/storage'
import { resetUser } from '../redux/slice/userSlice'

const Register: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checkPassword, setCheckPassword] = useState('')
  const [nickName, setNickName] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [emailMessage, setEmailMessage] = useState('')
  const [passwordMessage, setPasswordMessage] = useState('')
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('')
  const [nickNameMessage, setNickNameMessage] = useState('')

  const [isEmail, setIsEmail] = useState(false)
  const [isPassword, setIsPassword] = useState(false)
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false)
  const [isNickName, setIsNickName] = useState(false)

  const userGroup = useSelector(
    (userState: RootState) => userState.lg.userGroup,
  )
  const { uid, photoName, photoURL } = useSelector(
    (userState: RootState) => userState.lg.userGroup,
  )

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const currentEmail = e.target.value
    setEmail(currentEmail)
    const emailRegExp =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
    if (!emailRegExp.test(currentEmail)) {
      setEmailMessage('이메일 형식이 잘못되었습니다.')
      setIsEmail(false)
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
    } else if (nickName.length > 20) {
      setNickNameMessage('닉네임은 최대 20자까지 설정할 수 있습니다.')
      setIsNickName(false)
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

    const imgRef = ref(storageService, `userImg/${uid}/${photoName}`)
    const response = await uploadString(imgRef, photoURL, 'data_url')
    const imgUrl = await getDownloadURL(response.ref)
    Promise.all([response, imgUrl])
      .then(imgUrl => ({
        ...userGroup,
        name: nickName,
        photoURL: imgUrl[1],
      }))
      .then(async userInfo => {
        await createUserWithEmailAndPassword(auth, email, password).then(
          async userCredential => {
            await updateProfile(userCredential.user, {
              displayName: userInfo.name,
              photoURL: userInfo.photoURL,
            })
          },
        )
      })
      .catch(error => {
        const err = error as SystemError
        switch (err.code) {
          case 'auth/invalid-email':
            setErrorMsg('잘못된 이메일 주소입니다.')
            break
          case 'auth/email-already-in-use':
            setErrorMsg('이미 가입되어 있는 계정입니다.')
            break
        }
      })
      .finally(() => {
        setEmail('')
        setPassword('')
        setCheckPassword('')
        setNickName('')
        dispatch(resetUser())
        navigate('/')
      })
  }

  return (
    <div className="baseColor baseContainer flex flex-col items-center gap-2 py-16">
      <h2 className="text-4xl font-bold">회원가입</h2>
      <form
        className="flex flex-col gap-4 items-center justify-center mt-8"
        onSubmit={onSubmit}
      >
        <RegisterImage />
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
            userGroup.photoURL !== '' &&
            isEmail &&
            isPassword &&
            isPasswordConfirm &&
            isNickName
              ? 'bg-primary-100 '
              : 'bg-zinc-400'
          }`}
          disabled={
            userGroup.photoURL !== '' &&
            isEmail &&
            isPassword &&
            isPasswordConfirm &&
            isNickName
              ? false
              : true
          }
        >
          회원가입
        </button>
        {errorMsg && (
          <span className="text-xs w-full text-center text-primary-100">
            {errorMsg}
          </span>
        )}
      </form>
    </div>
  )
}

export default Register
