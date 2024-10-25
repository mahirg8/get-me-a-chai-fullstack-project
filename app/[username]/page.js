import React from 'react'
import PaymentPage from '@/components/PaymentPage'
import { notFound } from "next/navigation"
import connectDB from '@/db/connectDB'
import User from '@/models/User'


const Username = async ({ params }) => {
    //if the username is not present in hte database, show 404 error 
    const checkUser = async () => {

        await connectDB()
        let u = await User.findOne({ username: params.username })
        if (!u) {
            return notFound()
        }
    }
    await checkUser()

    return (
        <>
            <PaymentPage username={params.username} />
        </>
    )
}


export default Username

export async function generateMetadata({ params }) {
    return {
      title: `Support ${params.username} - Get Me A Chai`,
    }
  }
