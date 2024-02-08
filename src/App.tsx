import { Grid, GridItem, Flex, Divider, Center } from "@chakra-ui/react";
import InputWorkoutForm from "./components/InputWorkoutForm";
import WorkoutHistory from "./components/WorkoutHistory";

function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
    >
      <GridItem area="nav" bg="coral">
        My Fitness Tracker - nav
      </GridItem>

      <GridItem area="main" bg="">
        <Flex>
          <InputWorkoutForm />
          <Center marginX={3} minHeight="30vh">
            <Divider orientation="vertical" />
          </Center>
          <WorkoutHistory />
        </Flex>
      </GridItem>
    </Grid>
  );
}

export default App;
