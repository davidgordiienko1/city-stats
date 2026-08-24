# city-stats
Millville City Stats

## Embed

Add this iframe and resize listener to the city website. The listener keeps the widget free of internal vertical scrollbars as the department or viewport changes.

```html
<iframe
	id="city-stats"
	src="https://YOUR-DOMAIN.example/city-stats/index.html?dept=police"
	scrolling="no"
	style="display:block;width:100%;height:300px;border:0;overflow:hidden"
></iframe>

<script>
window.addEventListener("message", (event) => {
	if (event.data?.type !== "city-stats-resize") return;

	const frame = document.getElementById("city-stats");
	if (event.source === frame.contentWindow) {
		frame.style.height = `${event.data.height}px`;
	}
});
</script>
```
