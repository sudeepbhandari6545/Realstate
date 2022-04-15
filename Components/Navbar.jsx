import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  IconButton,
} from '@chakra-ui/react'
import Link from 'next/link'
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc'
import { BsSearch } from 'react-icons/bs'
import { FiKey } from 'react-icons/fi'

const Navbar = () => {
  return (
    <>
      <Flex p="1" borderBottom="1px" borderColor="gray.100">
        <Box fontSize="3xl" color="blue.400" fontWeight="bold">
          <Link href="/" paddingLeft="2px">
            Realtor
          </Link>
        </Box>
        <Spacer />
        <Box>
          <Menu>
            <MenuButton as={IconButton} icon={<FcMenu />} variant="outlined" />
            <MenuList>
              <Link href="/" passHref>
                <MenuItem icon={<FcHome />}>Home</MenuItem>
              </Link>
              <Link href="/search" passHref>
                <MenuItem icon={<BsSearch />}>Search</MenuItem>
              </Link>
              <Link href="/search?purpose=for-sale" passHref>
                <MenuItem icon={<FcAbout />}>By Property</MenuItem>
              </Link>
              <Link href="/search?purpose=for-rent" passHref>
                <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </>
  )
}

export default Navbar
