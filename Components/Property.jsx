import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import millify from 'millify'
import { GoVerified } from 'react-icons/go'
import { FaBath, FaBed } from 'react-icons/fa'
import { BsGridFill } from 'react-icons/bs'

const Property = ({
  property: {
    externalID,
    title,
    coverPhoto,
    isVerified,
    rentFrequency,
    price,
    agency,
    rooms,
    area,
  },
}) => (
  <Link href={`/property/${externalID}`} passHref>
    <Flex
      flexWrap="wrap"
      w="400px"
      p="5"
      paddingTop="0"
      justifyContent="flex-start"
      cursor="pointer"
    >
      <Box>
        <Image
          src={coverPhoto ? coverPhoto.url : ''}
          width={380}
          height={250}
          alt="house"
        />
      </Box>
      <Box w="full">
        <Flex paddingTop="2" alignItems="center" justifyContent="space-between">
          <Flex alignItems="center">
            <Box paddingRight="3" color="green.400">
              {isVerified && <GoVerified />}
            </Box>
            <Text fontWeight="bold" fontSize="lg">
              {millify(price)}
              {rentFrequency && `/${rentFrequency}`}
            </Text>
          </Flex>
          <Box>
            <Avatar size="sm" src={agency?.logo?.url} />
          </Box>
        </Flex>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          w="250px"
          color="blue.400"
        >
          {rooms} <FaBed />| <FaBath />| {millify(area)} sqft <BsGridFill />
        </Flex>
        <Text fontSize="lg">
          {title.length > 30 ? `${title.substring(0, 30)}...` : title}
        </Text>
      </Box>
    </Flex>
  </Link>
)

export default Property
