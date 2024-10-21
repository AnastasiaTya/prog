import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

const meta = {
    title: 'shared/Modal',
    component: Modal,
    tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
    args: {
        children: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui atque perspiciatis magnam necessitatibus ullam optio iste possimus maiores, explicabo repellat in autem minima nulla ad quas veritatis quaerat delectus aliquam!',
        isOpen: true,
    },
    decorators: [
        ThemeDecorator(Theme.LIGHT),
    ],
};

export const Dark: Story = {
    args: {
        children: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui atque perspiciatis magnam necessitatibus ullam optio iste possimus maiores, explicabo repellat in autem minima nulla ad quas veritatis quaerat delectus aliquam!',
        isOpen: true,
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
