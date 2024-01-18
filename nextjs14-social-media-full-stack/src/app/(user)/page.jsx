'use client'

import Stories from '@/components/stories/Stories'
import Posts from '@/components/posts/Posts'
import './home.scss'
import { useRouter } from 'next/navigation'
import { useContext, useEffect } from 'react'
import { AuthContext } from '@/context/authContext'


export default function Home() {

  const router = useRouter()

  const { currentUser } = useContext(AuthContext);

  // console.log(">>>check darkMode: ", darkMode) 

  useEffect(() => {
    if (!currentUser) {
      router.push("/login")
    }
  }, [currentUser])

  return (
    <div className="home">
      <Stories />
      <Posts />
    </div>
  )
}
