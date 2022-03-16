import { render } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as TaskStories from "./Task.stories"; //👈  Our stories imported here

//import { expect } from '@storybook/jest';
//import { within, userEvent } from '@storybook/testing-library';


const { Default } = composeStories(TaskStories)
const { Pinned } = composeStories(TaskStories)
const { Archived } = composeStories(TaskStories)
const { LongTitle } = composeStories(TaskStories)

it("renders Default", () => {
render(<Default />)
  });

it("renders Pinned", () => {
render(<Pinned />);
  });

it("renders Archived", () => {
render(<Archived />);
  });

  it("renders longTitle", () => {
render(<LongTitle />);
  });