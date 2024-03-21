<h1>Welcome to SvelteKit</h1>

<MultiSelect
        {selectableItems}
        {initialSelectedItems}
        on:change={handleSelectionChange}
        />


<script>
	// import MultiSelect from './../lib/multiSelect.svelte';
    import {MultiSelect} from '@haysquare/svelte-multi-select';

    let selectableItems = ['Apple', 'Banana', 'Orange'];
    let selectedItems = [];
    let initialSelectedItems = [];

    function handleSelectionChange(selected) {
        selectedItems = selected;
    }
    // let close 

    // function open() {
    //     document.getElementById('my_modal_5').showModal()
    // }
    // function close() {
    //     document.getElementById('my_modal_5').hideModal()
    // }
</script>