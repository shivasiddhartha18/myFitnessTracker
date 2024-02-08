import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import React from "react";

const InputWorkoutForm = () => {
  return (
    <FormControl>
      <FormLabel>Workout Name</FormLabel>
      <Input type="workoutName" />
      <FormLabel>Category</FormLabel>
      <Input type="category" />
      <FormLabel>Weight</FormLabel>
      <Input type="weight" />
      <FormLabel>Reps</FormLabel>
      <Input type="reps" />
      <FormLabel>Sets</FormLabel>
      <Input type="sets" />
    </FormControl>
  );
};

export default InputWorkoutForm;
