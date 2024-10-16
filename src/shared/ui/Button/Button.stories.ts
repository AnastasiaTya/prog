import type { Meta, StoryObj } from '@storybook/react';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from './Button';

const meta = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
    args: {
        onClick: () => alert('Button clicked!'),
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'Primary Button',
    },
    decorators: [
        StyleDecorator,
    ],
};

export const Clear: Story = {
    args: {
        children: 'Clear Button',
        theme: ThemeButton.CLEAR,
    },
    decorators: [
        StyleDecorator,
    ],
};

export const Outline: Story = {
    args: {
        children: 'Outlined Button',
        theme: ThemeButton.OUTLINE,
    },
    decorators: [
        StyleDecorator,
    ],
};

export const OutlineDark: Story = {
    args: {
        children: 'Outlined Button',
        theme: ThemeButton.OUTLINE,
    },
    decorators: [
        StyleDecorator,
        ThemeDecorator(Theme.DARK),
    ],
};
