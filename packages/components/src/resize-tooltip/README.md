# ResizeTooltip

ResizeTooltip displays the dimensions of an element whenever the width or height of the element changes.

## Usage

```jsx
import { ResizeTooltip } from '@wordpress/components';

const Example = () => {
	return (
		<div style={ { position: 'relative' } }>
			<ResizeTooltip />
			...
		</div>
	);
};
```

Be sure that the parent element containing `<ResizeTooltip />` has the `position` style property defined. This is important as `<ResizeTooltip />` uses `position` based techniques to determine size changes.

### Positions

`<ResizeTooltip />` has three positions;

-   `bottom`
-   `corner` (Default)
-   `cursor`

##### `bottom`

The `bottom` position renders the dimensions label at the bottom-center of the (parent) element.

##### `cursor`

The `cursor` position renders the dimensions label right above the mouse cursor.

##### `corner`

The `corner` position (default) renders the dimensions label in the top-right corner of the (parent) element.

## Props

### axis

Limits the label to render corresponding to the axis. By default, the label will automatically render based on both `x` and `y` changes.

-   Type: `String`
-   Required: No
-   Values: `x` | `y`

### fadeTimeout

Duration (in `ms`) before the label disappears after resize event.

-   Type: `Number`
-   Required: No
-   Default: `180`

### isEnabled

Determines if the label can render.

-   Type: `Boolean`
-   Required: No
-   Default: `true`

### labelRef

Callback [Ref](https://reactjs.org/docs/forwarding-refs.html) for the label element.

-   Type: `Function`
-   Required: No

### onMove

Callback function when the (observed) element resizes, specifically with a `mousemove` based event.

-   Type: `Function`
-   Required: No

### onResize

Callback function when the (observed) element resizes.

-   Type: `Function`
-   Required: No

### position

The positions for the label.

-   Type: `String`
-   Required: No
-   Default: `cursor`
-   Values: `bottom` | `corner` |`cursor`

### showPx

Renders a `PX` unit suffix after the width or height value in the label.

-   Type: `Boolean`
-   Required: No
-   Default: `true`

### zIndex

The `z-index` style property for the label.

-   Type: `Number`
-   Required: No
-   Default: `1000`