'use client'

import { useRouter } from "next/navigation"
import { useUserContext } from "@/components/Context";
import { useEffect } from "react";
import { useAuthenticator } from '@aws-amplify/ui-react';

const Page = () => {

  const {user, setUser} = useUserContext();
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/signIn')
    }
  }, [])

  return (
    <div className="font-montserrat"></div>
  )
}

export default Page