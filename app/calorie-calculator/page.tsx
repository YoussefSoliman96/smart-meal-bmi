"use client";
import { Gender } from "@prisma/client";
import { Button, Flex, Heading, Select, TextField } from "@radix-ui/themes";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

interface Calories {
  height: number;
  weight: number;
  age: number;
  gender: Gender;
}

const page = ({ height, weight, age, gender }: Calories) => {
  const { register, handleSubmit, control } = useForm<Calories>();

  const [calories, setCalories] = useState(0);

  const calculateCalories = (
    height: number,
    weight: number,
    age: number,
    gender: Gender
  ) => {
    if (gender === "MALE") {
      const maleIntake = 10 * weight + 6.25 * height + 5 * age + 5;
      setCalories(maleIntake);
    } else {
      const femaleIntake = 10 * weight + 6.25 * height + 5 * age - 161;
      setCalories(femaleIntake);
    }
  };

  return (
    <form
      className="max-w-xl"
      onSubmit={handleSubmit((data) =>
        calculateCalories(data.height, data.weight, data.age, data.gender)
      )}
    >
      <Flex direction="column" gap="3" mb="3" style={{ maxWidth: 300 }}>
        <Flex direction="column" gap="3" mb="3">
          <Flex justify="between">
            <Heading>Height</Heading>
          </Flex>
          <TextField.Input
            size="3"
            placeholder="Height in CM"
            defaultValue=""
            {...register("height")}
          />
        </Flex>
        <Flex direction="column" gap="3" mb="3">
          <Flex justify="between">
            <Heading>Weight</Heading>
          </Flex>
          <TextField.Input
            size="3"
            placeholder="Weight in KGs"
            defaultValue=""
            {...register("weight")}
          />
        </Flex>
        <Flex direction="column" gap="3" mb="3">
          <Flex justify="between">
            <Heading>Age</Heading>
          </Flex>
          <TextField.Input
            size="3"
            placeholder="Age"
            defaultValue=""
            {...register("age")}
          />
        </Flex>
        <Controller
          name="gender"
          control={control}
          render={({ field }) => (
            <Select.Root size="3" onValueChange={field.onChange}>
              <Select.Trigger placeholder="Gender" />
              <Select.Content>
                <Select.Group>
                  <Select.Label>Gender</Select.Label>
                  <Select.Item value="male">Male</Select.Item>
                  <Select.Item value="female">Female</Select.Item>
                </Select.Group>
              </Select.Content>
            </Select.Root>
          )}
        ></Controller>
      </Flex>
      <Button size="3">Calculate Calories</Button>
      {calories > 0 ? (
        <Heading my="5">Maintenance Calories: {calories}</Heading>
      ) : null}
    </form>
  );
};

export default page;
