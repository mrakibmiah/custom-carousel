import React, { useState, useEffect } from 'react'
import { VccCarouselPropsType } from '../interfaces/VccCarouselPropsType'
import Image from 'next/image'
import { Flex, Link, Spacer, Text, Block } from 'vcc-ui'
import { VccCarouselMobileDots } from './VccCarouselMobileDots'

export const VccCarouselMobile = ({ carList }: VccCarouselPropsType): JSX.Element => {
  const [currentPosition, setCurrentPosition] = useState(0)
  const [currentView, setCurrentView] = useState(carList[0])
  const [touchPosition, setTouchPosition] = useState(null)

  useEffect(() => {
    setCurrentView(carList[currentPosition])
  }, [currentPosition, carList])

  if (!carList?.length) return <Text>Failed to load the Mobile VCC carousel. image list is empty</Text>

  const handleTouchStart = (e: any) => {
    const touchDown = e.touches[0].clientX
    setTouchPosition(touchDown)
  }

  const handleTouchMove = (e: any) => {
    const touchDown = touchPosition

    if (touchDown === null) {
      return
    }

    const currentTouch = e.touches[0].clientX
    const diff = touchDown - currentTouch

    if (diff > 5) {
      if (currentPosition < carList?.length - 1) setCurrentPosition(currentPosition + 1)
    }

    if (diff < -5) {
      if (currentPosition > 0) setCurrentPosition(currentPosition - 1)
    }

    setTouchPosition(null)
  }

  const handleOnClickDot = (position: number) => {
    setCurrentPosition(position)
  }

  return (
    <Flex>
      <Block>
        <Text variant={'bates'}>{currentView.bodyType.toUpperCase()}</Text>
        <Text subStyle={'emphasis'}>{currentView.modelName}</Text>
        <Text variant={'bates'}>{currentView.modelType}</Text>
      </Block>
      <Spacer />

      <Image
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        width={500}
        height={500}
        src={currentView.imageUrl}
        alt={`Car ${currentView.id} image is missing`}
      />

      <Flex extend={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
        <Link href={`/learn/${currentView.id}`} arrow='right'>
          LEARN
        </Link>
        <Spacer />
        <Link href={`/shop/${currentView.id}`} arrow='right'>
          SHOP
        </Link>
      </Flex>
      <Spacer size={1} />

      <VccCarouselMobileDots list={carList} onClickDot={handleOnClickDot} activeDotPosition={currentPosition} />
    </Flex>
  )
}
