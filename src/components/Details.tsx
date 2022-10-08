import React from 'react'
import { Link, Text, Block } from 'vcc-ui'
import { CarSpec } from './CarSpec'
import carList from '../../public/api/cars.json'

type DetailsPropsType = {
  carId: string
  pageName: string
}

const Details: Function = ({ carId, pageName }: DetailsPropsType) => {
  const carDetails = carList.find((car) => car.id === carId)

  if (!carDetails) return null

  return (
    <Block>
      <Text>
        Welcome to <b>{pageName}</b> page
      </Text>
      <Link href='/' arrow='right'>
        Go To Home
      </Link>
      <CarSpec carSpecification={carDetails}></CarSpec>
    </Block>
  )
}

export default Details
