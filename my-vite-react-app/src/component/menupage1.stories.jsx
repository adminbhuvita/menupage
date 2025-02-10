import React from "react";
import Categories from "./Categories";

export default {
  title: "Components/Categories",
  component: Categories,
};

const Template = (args) => <Categories {...args} />;

export const Default = Template.bind({});
Default.args = {};
