import Image from 'next/image'
import { Flex, Link, Spacer, Text } from 'vcc-ui'
import CarSpecificationType from '../interfaces/car-specification'

type CarBoxPropsType = {
  carSpecification: CarSpecificationType
}

export const CarSpec = ({ carSpecification }: CarBoxPropsType): JSX.Element => (
  <Flex extend={{ marginRight: '5px' }}>
    <Text variant={'bates'}>{carSpecification.bodyType.toUpperCase()}</Text>
    <Flex extend={{ flexDirection: 'row' }}>
      <Text subStyle={'emphasis'}>{carSpecification.modelName}</Text>
      <Spacer />
      <Text variant={'bates'}>{carSpecification.modelType}</Text>
    </Flex>

    <Spacer />
    <Image width={1000} height={1000} src={carSpecification.imageUrl} alt={`Car ${carSpecification.id} image is missing`} />

    <Flex extend={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
      <Link href={`learn/${carSpecification.id}`} arrow='right'>
        LEARN
      </Link>
      <Spacer />
      <Link href={`shop/${carSpecification.id}`} arrow='right'>
        SHOP
      </Link>
    </Flex>
  </Flex>
)
