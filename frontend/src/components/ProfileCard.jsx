import { Grid, GridItem, Avatar, Button, Text, Stack} from "@chakra-ui/react"

const ProfileCard = ({ name, relationship }) => {
  return (
    <Grid
      width="90vw"
      templateColumns="repeat(3,5fr)"
      gap="6"
      bg="gray.950"
      p="15px"
      mt="15px"
      borderRadius="10px"
      _hover={{
        bg: "gray.600",
      }}
      transition="all 0.2s ease-in-out"
    >
      <GridItem colSpan={1}>
        <Avatar.Root shape="rounded" size="2xl">
          <Avatar.Fallback name={name} />
          <Avatar.Image src="./meomeo" />
        </Avatar.Root>
      </GridItem>
      <GridItem colSpan={2}>
          <Stack gap="0">
            <Text fontWeight="semibold" textStyle="sm">
              {name}
            </Text>
            <Text color="fg.muted" textStyle="sm">
              {relationship}
            </Text>
            <Button variant="outline" size="xs" >More...</Button>
          </Stack>
      </GridItem>
    </Grid>
  )
}

export default ProfileCard;
