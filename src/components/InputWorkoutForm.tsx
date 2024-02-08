import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { useForm } from "react-hook-form";

type FormInputs = {
  workoutName: string;
  category: string;
  weight: number;
  reps: number;
  sets: number;
};

const InputWorkoutForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  return (
    <form onSubmit={handleSubmit((data: FormInputs) => console.log(data))}>
      <FormControl>
        <FormLabel htmlFor="workoutName">Workout Name</FormLabel>
        <Input type="text" id="workoutName" {...register("workoutName")} />
        <FormLabel htmlFor="category">Category</FormLabel>
        <Input type="text" id="category" {...register("category")} />
        <FormLabel htmlFor="weight">Weight</FormLabel>
        <Input type="text" id="weight" {...register("weight")} />
        <FormLabel htmlFor="reps">Reps</FormLabel>
        <Input type="text" id="reps" {...register("reps")} />
        <FormLabel htmlFor="sets">Sets</FormLabel>
        <Input type="text" id="sets" {...register("sets")} />
        <Button marginTop={2} type="submit">
          Submit
        </Button>
      </FormControl>
    </form>
  );
};

export default InputWorkoutForm;
