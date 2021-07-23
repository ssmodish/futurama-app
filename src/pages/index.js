import useSWR from 'swr'

import { Box, Text } from '@chakra-ui/react'

import { Container } from '../components/Container'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { Main } from '../components/Main'
import CharacterCard from '../components/CharacterCard'

const characterURL = 'https://api.sampleapis.com/futurama/characters'

const fetcher = (url) => fetch(url).then((res) => res.json())

function Index() {
  const { data, error } = useSWR(characterURL, fetcher)

  if (error) return <Box>Failed to load</Box>

  return (
    <Container>
      <DarkModeSwitch />
      <Main>
        <Text textAlign='center' fontSize='8xl'>
          Futurama
        </Text>
        {data ? (
          data.map((character) => <CharacterCard character={character} key={character.id} />)
        ) : (
          <Box>Loading...</Box>
        )}
      </Main>
    </Container>
  )
}

export default Index
