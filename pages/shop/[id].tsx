import React from 'react'
import { useRouter } from 'next/router'
import Details from '../../src/components/Details'

const ShopPage: React.FC = () => {
  const router = useRouter()
  const { id } = router.query

  if (!id) return null

  return <Details carId={id} pageName="Shop"/>
}

export default ShopPage
