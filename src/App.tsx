import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "main main"` }}>
      <GridItem area="nav" bg="coral">
        My Fitness Tracker - nav
      </GridItem>
      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
