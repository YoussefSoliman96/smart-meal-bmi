"use client";
import { Gender } from "@prisma/client";
import { Button, Flex, Heading, Select, TextField } from "@radix-ui/themes";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

interface BMI {
  height: number;
  weight: number;
  age: number;
  gender: Gender;
}

const page = () => {
  const { register, handleSubmit, control } = useForm<BMI>();

  const [bmi, setBmi] = useState(0);
  const [status, setStatus] = useState("");

  const calculateBMI = (height: number, weight: number) => {
    const heightMeter = height / 100;
    const heightSQR = heightMeter * heightMeter;
    const bmi = parseFloat((weight / heightSQR).toFixed(2));
    setBmi(bmi);
    if (bmi < 18.5) {
      setStatus("Underweight");
    } else if (bmi < 24.9) {
      setStatus("Healthy");
    } else if (bmi < 29.9) {
      setStatus("Overweight");
    } else {
      setStatus("Obese");
    }
  };

  return (
    <form
      className="max-w-xl"
      onSubmit={handleSubmit((data) => calculateBMI(data.height, data.weight))}
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
      <Button size="3">Calculate BMI</Button>
      {bmi > 0 ? (
        <Heading my="5">
          BMI: {bmi}, you are {status}!
        </Heading>
      ) : null}
    </form>
  );
};

export default page;
