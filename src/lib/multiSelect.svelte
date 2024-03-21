<script>
    import { createEventDispatcher } from 'svelte';
    import { writable, derived } from 'svelte/store';
  
    let items = []; // Array of all selectable items
    let selectedItems = []; // Array of currently selected items
    export let initialSelectedItems = []; // Array of initially selected items
  
    // Create a writable store to manage selected items
    const selected = writable([]);
  
    // Dispatch events to communicate with parent components
    const dispatch = createEventDispatcher();
  
    // Update the selected items
    selected.subscribe(value => {
      selectedItems = value;
      dispatch('change', selectedItems);
    });
  
    // Initialize selected items with initialSelectedItems
    selected.set(initialSelectedItems);
  
    // Add or remove item from selection
    function toggleSelection(item) {
      const selectedIndex = selectedItems.indexOf(item);
      if (selectedIndex === -1) {
        selected.update(items => [...items, item]);
      } else {
        selected.update(items => items.filter(i => i !== item));
      }
    }
  
    // Derive whether an item is selected
    const isSelected = item => selectedItems.includes(item);
  </script>
  
  <!-- Display selected items -->
  <div class="flex flex-wrap">
    {#each selectedItems as item}
      <div class="bg-gray-200 rounded-full px-3 py-1 m-1">
        {item}
        <button class="ml-2" on:click={() => toggleSelection(item)}>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    {/each}
  </div>
  
  <!-- Display selectable items -->
  <div class="mt-4">
    {#each items as item}
      <div class="flex items-center">
        <input type="checkbox" bind:checked={isSelected(item)} id="{item}" class="mr-2">
        <label for="{item}" class="cursor-pointer">{item}</label>
      </div>
    {/each}
  </div>
  
  <style>
    /* Style customization goes here */
  </style>
  
  <script>
    // Items passed as props
    export let selectableItems = [];
  
    // Set items array
    $: {
      items = selectableItems;
    }
  </script>
  