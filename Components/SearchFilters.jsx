import { Box, Flex, Select } from '@chakra-ui/react'
import router from 'next/router'
import { useState } from 'react'
import { filterData, filterValues, getFilterValues } from '../utils/filterData'

const SearchFilters = () => {
  const [filter, setFilters] = useState(filterData)

  const searchProperties = (filterValues) => {
    const path = router.pathname
    const { query } = router

    const values = getFilterValues(filterValues)

    values.forEach((item) => {
      if (item.value && filterValues?.[item.name]) {
        query[item.name] = item.value
      }
    })
    router.push({ pathname: path, query })
  }
  return (
    <>
      <Flex flexWrap="wrap" bg="gray.100" p="4" justifyContent="center">
        {filter.map((filter) => (
          <Box key={filter.queryName}>
            <Select
              placeholder={filter.placeholder}
              w="fit-content"
              p="2"
              onChange={(e) =>
                searchProperties({ [filter.queryName]: e.target.value })
              }
            >
              {filter?.items?.map((item) => (
                <option value={item.value} key={item.value}>
                  {item.name}
                </option>
              ))}
            </Select>
          </Box>
        ))}
      </Flex>
    </>
  )
}

export default SearchFilters
