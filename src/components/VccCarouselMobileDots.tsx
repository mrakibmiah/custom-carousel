import React, { useState } from 'react'
import { Flex, Text } from 'vcc-ui'
import CarSpecificationType from '../interfaces/car-specification'

type DotPropsType = {
  list: Array<CarSpecificationType>
  onClickDot: Function
  activeDotPosition: number
}

export const VccCarouselMobileDots: Function = ({ list, onClickDot, activeDotPosition }: DotPropsType): JSX.Element => {
  if (!list?.length) return <Text>No list to render</Text>

  return (
    <Flex extend={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
      {list.map((item: CarSpecificationType, index) => {
        let dotClassName = 'dot'
        if (index === activeDotPosition) {
          dotClassName = 'dot active'
        }
        return (
          <span
            onClick={() => {
              onClickDot(index)
            }}
            key={index}
            className={dotClassName}
          ></span>
        )
      })}
    </Flex>
  )
}
