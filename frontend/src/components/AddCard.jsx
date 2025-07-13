import { Flex, Text } from "@chakra-ui/react"

const AddCard = () => {
  return (
    <Flex
      width="90vw"
      height="18vh"
      borderRadius="10px"
      bg="gray.950"
      justifyContent="center"
      alignItems="center"
      _hover={{
        bg: "gray.600"
      }}
      transition="background 0.2s ease-in-out"
    >
      <Text textStyle="4xl">+</Text>
    </Flex>
  )
}


export default AddCard;
