import React, { useEffect, useState } from 'react'
import carList from '../public/api/cars.json'
import { VccCarousel } from '../src/components/VccCarousel'
import CarSpecificationType from '../src/interfaces/car-specification'
import { Text, Spacer, Checkbox, Flex } from 'vcc-ui'
import { VccCarouselMobile } from '../src/components/VccCarouselMobile'

const HomePage: React.FC = () => {
  const [checkedSuv, setCheckedSuv] = useState(false)
  const [checkedEstate, setCheckedEstate] = useState(false)
  const [checkedSedan, setCheckedSedan] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent))
  }, [])

  const carData: Array<CarSpecificationType> = carList.filter((car) => {
    if (checkedSuv && car.bodyType === 'suv') {
      return true
    }
    if (checkedEstate && car.bodyType === 'estate') {
      return true
    }
    if (checkedSedan && car.bodyType === 'sedan') {
      return true
    }

    return !checkedSuv && !checkedEstate && !checkedSedan
  })

  return isMobile ? (
    <VccCarouselMobile carList={carData} itemsPerView={1} />
  ) : (
    <Flex>
      <Spacer size={2} />
      <Flex extend={{ alignItems: 'center', flexDirection: 'row' }}>
        <Text subStyle={'emphasis'}>Filter by body type:</Text>
        <Spacer />
        <Checkbox label='SUV' checked={checkedSuv} onChange={(e) => setCheckedSuv(e.target.checked)}></Checkbox>
        <Spacer />
        <Checkbox label='ESTATE' checked={checkedEstate} onChange={(e) => setCheckedEstate(e.target.checked)}></Checkbox>
        <Spacer />
        <Checkbox label='SEDAN' checked={checkedSedan} onChange={(e) => setCheckedSedan(e.target.checked)}></Checkbox>
      </Flex>
      <Spacer size={2} />
      <VccCarousel carList={carData} itemsPerView={4} />
    </Flex>
  )
}

export default HomePage
