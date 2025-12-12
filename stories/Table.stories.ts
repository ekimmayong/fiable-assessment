import type { Meta, StoryObj} from '@storybook/react-vite';

import { GridTable } from '../src/components/Table';

const meta = {
    title: 'Table',
    component: GridTable,
} satisfies Meta<typeof GridTable>;

export default meta;
type Story = StoryObj<typeof GridTable>;

export const Default: Story = {
    args: {
        xPosition: undefined,
        yPosition: undefined,
        direction: '',
    },
};

export const NorthDirection: Story = {
    args: {
        xPosition: 4,
        yPosition: 4,
        direction: 'NORTH',
    },
};

export const SouthDirection: Story = {
    args: {
        xPosition: 0,
        yPosition: 0,
        direction: 'SOUTH',
    },
};

export const EastDirection: Story = {
    args: {
        xPosition: 4,
        yPosition: 0,
        direction: 'EAST',
    },
};

export const WestDirection: Story = {
    args: {
        xPosition: 0,
        yPosition: 4,
        direction: 'WEST',
    },
};