import { Box, Flex, Icon } from '@chakra-ui/react'

import Image from 'next/image'
import { useContext } from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext)

  return (
    <Flex alignItems="center" justifyContent="center" margin="auto">
      <Icon
        as={FaArrowAltCircleLeft}
        onClick={() => scrollPrev()}
        _focusWithin="2xl"
        cursor="pointer"
      />
    </Flex>
  )
}

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext)

  return (
    <Flex alignItems="center" justifyContent="center" margin="auto">
      <Icon
        as={FaArrowAltCircleRight}
        onClick={() => scrollNext()}
        _focusWithin="2xl"
        cursor="pointer"
      />
    </Flex>
  )
}

const Imagescrollbar = ({ data }) => (
  <ScrollMenu
    LeftArrow={LeftArrow}
    RightArrow={RightArrow}
    style={{ overflow: 'hidden' }}
  >
    {data.map((item) => (
      <Box key={item.id} width="910px" itemId={item.id} overflow="hidden" p="1">
        <Image
          src={item.url}
          alt="property"
          placeholder="blur"
          blurDataURL={item.url}
          width={1000}
          height={500}
          sizes="(max-widh:500px) 100px,(max-width:1024px 400px,1000px "
        />
      </Box>
    ))}
  </ScrollMenu>
)

export default Imagescrollbar
