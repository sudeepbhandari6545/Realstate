import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import { baseUrl, fetchApi } from '../../utils/fetchApi'
import ImageScrollbar from '../../Components/ImageScrollBar'
import { BsGridFill } from 'react-icons/bs'
import { FaBath, FaBed } from 'react-icons/fa'
import { GoVerified } from 'react-icons/go'

const PropertyDetails = ({
  propertyDetails: {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
  },
}) => (
  <>
    <Box maxWidth="1000px" margin="auto" p="4">
      {photos && <ImageScrollbar data={photos} />}
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
    </Box>
  </>
)

export default PropertyDetails

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`)

  return {
    props: {
      propertyDetails: data,
    },
  }
}
