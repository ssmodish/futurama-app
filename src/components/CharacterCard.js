// import Image from 'next/image'
import { Box, Container, Image } from '@chakra-ui/react'

const CharacterCard = ({ character }) => {
  const { name, images } = character
  console.log(name)
  console.log(images)

  if (!name) return <></>

  return (
    <Container maxW='container.xl' centerContent>
      <Box backgroundColor='gray.400' borderRadius='30' padding='5'>
        <Box>
          Name: {name.first} {name.middle} {name.last}
        </Box>
        {images ? <Image src={images.main} alt='image of character' boxSize='200px' objectFit='contain' /> : null}
      </Box>
    </Container>
  )
}

export default CharacterCard
