import React from 'react'
import { useRouter } from 'next/router'
import Details from '../../src/components/Details'

const LearnPage: React.FC = () => {
  const router = useRouter()
  const { id } = router.query

  if (!id) return null

  return <Details carId={id} pageName="Learn"/>
}

export default LearnPage
