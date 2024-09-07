<script>
	import Input from "../components/Input.svelte";
	export let rotateXFrom = 0;
	export let rotateXTo = 0;
	export let rotateYFrom = 0;
	export let rotateYTo = 0;
	export let rotateZFrom = 0;
	export let rotateZTo = 0;
</script>

<div>
	<Input labelText="Rotate X - From (deg)" placeholder="Type here" bind:value={rotateXFrom} />
	<Input labelText="Rotate X - To (deg)" placeholder="Type here" bind:value={rotateXTo} />
	<Input labelText="Rotate Y - From (deg)" placeholder="Type here" bind:value={rotateYFrom} />
	<Input labelText="Rotate Y - To (deg)" placeholder="Type here" bind:value={rotateYTo} />
	<Input labelText="Rotate Z - From (deg)" placeholder="Type here" bind:value={rotateZFrom} />
	<Input labelText="Rotate Z - To (deg)" placeholder="Type here" bind:value={rotateZTo} />
</div>
