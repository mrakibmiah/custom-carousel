import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import CarSpecification from '../interfaces/car-specification'
import { Flex, Link, Spacer, IconButton, Block } from 'vcc-ui'
import { VccCarouselPropsType } from '../interfaces/VccCarouselPropsType'
import { CarSpec } from './CarSpec'

export const VccCarousel: Function = ({ carList, itemsPerView = 4 }: VccCarouselPropsType): JSX.Element => {
  const [currentViewList, setCurrentViewList] = useState(carList?.slice(0, itemsPerView))
  const [currentPosition, setCurrentPosition] = useState(0)

  useEffect(() => {
    setCurrentViewList(carList?.slice(currentPosition, itemsPerView + currentPosition))
  }, [currentPosition, carList, itemsPerView])

  // reset the current position when car list changes
  useEffect(() => {
    setCurrentPosition(0)
  }, [carList])

  if (!carList?.length || !itemsPerView) return <h2>Failed to load the VCC carousel. incorrect config</h2>

  const handleForward = () => {
    setCurrentPosition(currentPosition + 1)
  }

  const handleBackword = () => {
    setCurrentPosition(currentPosition - 1)
  }

  return (
    <Block>
      <Flex extend={{ flexDirection: 'row' }}>
        {currentViewList.map((carSpecification: CarSpecification, index) => (
          <CarSpec key={index} carSpecification={carSpecification}></CarSpec>
        ))}
      </Flex>
      <Flex extend={{ flexDirection: 'row-reverse' }}>
        <IconButton
          iconName='navigation-chevronforward'
          variant='outline'
          onClick={() => handleForward()}
          disabled={itemsPerView + currentPosition >= carList.length}
        />
        <Spacer />
        <IconButton iconName='navigation-chevronback' variant='outline' onClick={() => handleBackword()} disabled={currentPosition === 0} />
      </Flex>
    </Block>
  )
}
