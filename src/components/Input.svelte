<script>
	export let labelText = "";
	export let placeholder = "Type here";
	export let value = 0; // Default value as a number
	export let type = "text"; // Input type, can be 'text', 'number', etc.

	// Ensure value is updated as a number when type is 'number'
	const handleInput = (e) => {
		if (type === "number") {
			value = +e.target.value; // Convert string to number
		} else {
			value = e.target.value;
		}
	};
</script>

<label class="form-control w-full max-w-xs">
	<div class="label">
		<span class="label-text">{labelText}</span>
	</div>
	<input
		{placeholder}
		class="input input-bordered w-full max-w-xs"
		bind:value
		on:input={handleInput}
	/>
</label>
