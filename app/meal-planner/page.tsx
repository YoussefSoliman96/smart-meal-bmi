"use client";
import { Button, Flex, Select, Text } from "@radix-ui/themes";
import React from "react";

const page = () => {
  return (
    <Flex direction="column" gap="3" style={{ maxWidth: 200 }}>
      <Flex direction="column" gap="3">
        <Text>BMI: </Text>
        <Text>Calories: </Text>
      </Flex>
      <Flex direction="column" style={{ maxWidth: 200 }} gap="3">
        <Text>What's your goal? </Text>
        <Select.Root size="3">
          <Select.Trigger placeholder="Goal" />
          <Select.Content>
            <Select.Group>
              <Select.Label>Goal</Select.Label>
              <Select.Item value="gain">Gain weight</Select.Item>
              <Select.Item value="lose">Lose weight</Select.Item>
              <Select.Item value="maintain">Maintain</Select.Item>
            </Select.Group>
          </Select.Content>
        </Select.Root>
      </Flex>
      <Button size="3">Generate Meal Plan</Button>
    </Flex>
  );
};

export default page;
