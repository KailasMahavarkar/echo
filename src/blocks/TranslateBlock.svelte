<script>
    import Input from "../components/Input.svelte";
    
	let rotateXFrom = 0;
	let rotateYFrom = 0;
	let rotateZFrom = 0;
	let rotateXTo = 0;
	let rotateYTo = 0;
	let rotateZTo = 0;
</script>

<div>
	<Input labelText="Rotate X - From (deg)" placeholder="Type here" bind:value={rotateXFrom} />
	<Input labelText="Rotate X - To (deg)" placeholder="Type here" bind:value={rotateXTo} />
	<Input labelText="Rotate Y - From (deg)" placeholder="Type here" bind:value={rotateYFrom} />
	<Input labelText="Rotate Y - To (deg)" placeholder="Type here" bind:value={rotateYTo} />
	<Input labelText="Rotate Z - From (deg)" placeholder="Type here" bind:value={rotateZFrom} />
	<Input labelText="Rotate Z - To (deg)" placeholder="Type here" bind:value={rotateZTo} />
</div>
