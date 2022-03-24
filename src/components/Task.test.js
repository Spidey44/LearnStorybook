import { render, screen, fireEvent } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as TaskStories from "./Task.stories"; //👈  Our stories imported here

//import { expect } from '@storybook/jest';
//import {screen, render } from '@storybook/testing-library';


const { Default } = composeStories(TaskStories)
const { Pinned } = composeStories(TaskStories)
const { Archived } = composeStories(TaskStories)
const { LongTitle } = composeStories(TaskStories)

it("renders Default", () => {
  render(<Default />);
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
});

it("renders Pinned", () => {
  render(<Pinned onPinTask={jest.fn()} />);
  const checkbox = screen.getByLabelText("pinTask-1")
  expect(fireEvent.click(checkbox)).toBeTruthy()
  
});

it("renders Archived", () => {
  render(<Archived />);
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).toBeDisabled();
  expect(checkbox).toBeChecked();
  expect(checkbox).toHaveStyle({ backgroundColor: 'none' });
});

it("renders longTitle", () => {
  render(<LongTitle />);
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).toBeDisabled();
  expect(checkbox).not.toBeChecked();

});