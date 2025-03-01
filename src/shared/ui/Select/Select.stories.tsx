import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta = {
    title: 'shared/Select',
    component: Select,
    tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
    args: {
        label: 'Укажите значение',
        options: [
            { value: '1', content: 'Первый пункт' },
            { value: '2', content: 'Второй пункт' },
            { value: '3', content: 'Третий пункт' },
        ],
    },
};
