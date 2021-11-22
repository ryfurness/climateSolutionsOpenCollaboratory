import React from "react";
import { Link, Text, Grid, GridItem } from "@chakra-ui/react"


export default function Menu () {
  return (
    <Grid templateColumns="repeat(2, 1fr)" textAlign="center" w="30vw">
      <GridItem borderRight="1px solid #000">
        <Link href="/">
          <Text fontSize="1rem">Home</Text>
        </Link>
      </GridItem>
      <GridItem>
        <Link href="/projects">
          <Text fontSize="1rem"> Project Listing </Text>
        </Link>
      </GridItem>
    </Grid>
  )
}
