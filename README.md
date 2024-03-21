# 🌟 SvelteKit Custom MultiSelect Component 🌟

Hey there! Welcome to the SvelteKit Custom MultiSelect Component. This component is here to make your life easier when dealing with multiple selections in your SvelteKit projects. Let's dive in!

## Installation

First things first, you'll want to install this nifty component. Open up your terminal and type:

```bash
npm install @haysquare/svelte-multiselect


And that's it! You're ready to roll!

Usage

Using the Custom MultiSelect component is a piece of cake! Just follow these simple steps:

Import the component into your SvelteKit project.
Include it in your components or pages.

Single Use
If you need only one Custom MultiSelect in your application, simply use it directly:


<script>
  import MultiSelect from '@haysquare/svelte-multiselect';
</script>

<MultiSelect
  {selectableItems}
  {initialSelectedItems}
  on:change={handleSelectionChange}
/>


Multi Use

If you need multiple instances of Custom MultiSelect, you can import and use it multiple times:

<script>
  import MultiSelect from '@haysquare/svelte-multiselect';
</script>

<MultiSelect
  {selectableItems1}
  {initialSelectedItems1}
  on:change={handleSelectionChange1}
/>

<MultiSelect
  {selectableItems2}
  {initialSelectedItems2}
  on:change={handleSelectionChange2}
/>

Props

`selectableItems`: An array of items that can be selected.
`initialSelectedItems`: An optional array of items that are initially selected.
`on:change`: An event that emits the selected items whenever the selection changes.

Example

Wanna see it in action? Sure thing!

<script>
  import MultiSelect from '@haysquare/svelte-multiselect';

  let items = ['Apple', 'Banana', 'Orange'];
  let selectedItems = [];

  function handleSelectionChange(selected) {
    selectedItems = selected;
  }
</script>

<MultiSelect
  {selectableItems}
  {initialSelectedItems}
  on:change={handleSelectionChange}
/>


License
This project is licensed under the MIT License. Feel free to use it however you like!


That's all there is to it! Thanks for checking out the SvelteKit Custom MultiSelect Component. Happy coding! ✨🚀


This README provides clear instructions for both single and multi-use cases of the component. Adjust the content as needed for your specific use case!
