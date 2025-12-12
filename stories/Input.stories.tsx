import type { Meta, StoryObj } from "@storybook/react-vite";
import { InputForm } from "../src/components/input/input";
import {fn } from "jest-mock";

const meta = {
    title: 'Input Form',
    component: InputForm,
    decorators: [
        (Story) => (
            <div style={{ width: '400px' }}>
                <Story />
            </div>
        ),
    ]
} satisfies Meta<typeof InputForm>;

export default meta;
type Story = StoryObj<typeof InputForm>;

export const Default: Story = {
    args: {
        onSubmit: fn(),
    },
};
