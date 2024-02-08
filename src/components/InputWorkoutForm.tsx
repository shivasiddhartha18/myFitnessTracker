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
        <FormLabel>Workout Name</FormLabel>
        <Input type="workoutName" {...register("workoutName")} />
        <FormLabel>Category</FormLabel>
        <Input type="category" {...register("category")} />
        <FormLabel>Weight</FormLabel>
        <Input type="weight" {...register("weight")} />
        <FormLabel>Reps</FormLabel>
        <Input type="reps" {...register("reps")} />
        <FormLabel>Sets</FormLabel>
        <Input type="sets" {...register("sets")} />
        <Button marginTop={2} type="submit">
          Submit
        </Button>
      </FormControl>
    </form>
  );
};

export default InputWorkoutForm;
