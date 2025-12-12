import type { Meta, StoryObj } from "@storybook/react";
import { InputForm } from "../src/components/Input";
import {fn } from "jest-mock";

const meta = {
    title: 'Input Form',
    component: InputForm,
} satisfies Meta<typeof InputForm>;

export default meta;
type Story = StoryObj<typeof InputForm>;

export const Default: Story = {
    args: {
        onSubmit: fn(),
    },
};
