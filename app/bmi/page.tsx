"use client";
import { Button, Flex, Heading, Select, TextField } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="max-w-xl">
      <Flex direction="column" gap="3" mb="3" style={{ maxWidth: 300 }}>
        <Flex direction="column" gap="3" mb="3">
          <Flex justify="between">
            <Heading>Height</Heading>
          </Flex>
          <TextField.Input
            size="3"
            placeholder="Height in CM"
            defaultValue=""
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
          />
        </Flex>
        <Flex direction="column" gap="3" mb="3">
          <Flex justify="between">
            <Heading>Age</Heading>
          </Flex>
          <TextField.Input size="3" placeholder="Age" defaultValue="" />
        </Flex>
        <Select.Root size="3">
          <Select.Trigger placeholder="Gender" />
          <Select.Content>
            <Select.Group>
              <Select.Label>Gender</Select.Label>
              <Select.Item value="male">Male</Select.Item>
              <Select.Item value="female">Female</Select.Item>
            </Select.Group>
          </Select.Content>
        </Select.Root>
      </Flex>
      <Button size="3">Calculate BMI</Button>
    </div>
  );
};

export default page;
