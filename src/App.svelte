<script>
	import "./app.css";
	import TranslateTab from "./blocks/TranslateBlock.svelte";
	let tabs = ["Translate", "Rotate", "Scale", "Skew"];
	let activeTab = 0;
	const setActiveTab = (index) => (activeTab = index);

	// Array to hold the states of all draggable elements
	let elementsState = [];

	// Function to generate a new state for each element
	function createState() {
		return {
			pos: { x: 0, y: 0 },
			dragging: null,
			eventToCoordinates(event) {
				// Convert event coordinates to canvas-relative coordinates
				const canvas = document.getElementById("canvas");
				const rect = canvas.getBoundingClientRect();
				return {
					x: event.clientX - rect.left,
					y: event.clientY - rect.top,
				};
			},
		};
	}

	// Function to make each element draggable
	function makeDraggable(state, el) {
		function start(event) {
			if (event.button !== 0) return; // left button only
			let { x, y } = state.eventToCoordinates(event);
			state.dragging = { dx: state.pos.x - x, dy: state.pos.y - y };
			el.setPointerCapture(event.pointerId);
			el.style.userSelect = "none"; // disable text selection
			el.style.webkitUserSelect = "none"; // safari
		}

		function end(_event) {
			state.dragging = null;
			el.style.userSelect = ""; // reset text selection
			el.style.webkitUserSelect = ""; // safari reset
		}

		function move(event) {
			if (!state.dragging) return;
			let { x, y } = state.eventToCoordinates(event);
			state.pos = { x: x + state.dragging.dx, y: y + state.dragging.dy };
			el.style.left = `${state.pos.x}px`;
			el.style.top = `${state.pos.y}px`;
		}

		// Add event listeners for dragging
		el.addEventListener("pointerdown", start);
		el.addEventListener("pointerup", end);
		el.addEventListener("pointercancel", end);
		el.addEventListener("pointermove", move);
		el.addEventListener("touchstart", (e) => e.preventDefault());
		el.addEventListener("dragstart", (e) => e.preventDefault());
	}

	// Function to add a new draggable element
	const addElement = () => {
		const canvas = document.getElementById("canvas");
		const element = document.createElement("div");

		// Add Tailwind classes to the element
		element.classList.add(
			"w-20",
			"h-20",
			"bg-blue-500",
			"absolute",
			"top-0",
			"left-0",
			"cursor-grab"
		);

		// Append the new element to the canvas
		if (canvas) {
			canvas.appendChild(element);
		}

		// Create a new state for this element and store it in the global state array
		const newState = createState();
		elementsState.push(newState);

		// Set the initial position for the new element
		newState.pos = { x: 0, y: 0 };
		element.style.left = `${newState.pos.x}px`;
		element.style.top = `${newState.pos.y}px`;

		// Make the element draggable with its own independent state
		makeDraggable(newState, element);
	};
</script>

<main class="border-2 border-red-500 w-full h-full flex flex-col items-center justify-center">
	<div class="absolute right-0 top-0">
		<div role="tablist" class="tabs tabs-boxed w-full max-w-md">
			{#each tabs as tab, index}
				<a
					role="tab"
					class="tab"
					class:tab-active={activeTab === index}
					href="#"
					on:click={() => setActiveTab(index)}
				>
					{tab}
				</a>
			{/each}
		</div>
		<div class="tab-content w-full max-w-md">
			{#if activeTab === 0}
				<div class="tab-pane">
					<h1 class="text-2xl font-bold">Translate</h1>
					<p class="text-lg">
						The translate() method moves an element from its current position (according
						to the parameters given for the X-axis and the Y-axis).
					</p>
					<TranslateTab />
				</div>
			{:else if activeTab === 1}
				<div class="tab-pane">Tab 2 content</div>
			{:else}
				<div class="tab-pane">Tab 3 content</div>
			{/if}
		</div>
	</div>

	<div id="canvas" class="w-[600px] h-[600px] border-2 relative"></div>

	<div class="flex justify-center items-center">
		<button class="btn btn-primary" on:click={addElement}> Add Element </button>
	</div>
</main>

<style>
	/* Add styling for the draggable element */
	.cursor-grab {
		cursor: grab;
	}
	.cursor-grabbing {
		cursor: grabbing;
	}
</style>
