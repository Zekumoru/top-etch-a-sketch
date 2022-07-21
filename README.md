# Etch-A-Sketch
## Description

This is a browser version of something between a sketchpad and etch-a-sketch toy.

## Skills Required

- Be able to make a grid
- Set up a 'hover' effect, creating a trail on the grid
- Resize the grid on user's input
- Adjust color intensity when mouse has been trailing longer

## What I learned
### mouseover Event
The event name for the mouse hover is `mouseover`

### Changing RGB to Black
I was thinking of applying like two `div`s for the square so it gradually turns to black but I figured that since the value of `rgb(0, 0, 0)` is black, can't we just have a multiplier that gradually turns the randomized rgb value to black?

For example, let's say we are on the fifth pass, that would mean, our color will be half-black already hence if we get a random rgb color of `rgb(131, 112, 43)`, all we need to do is to multiply those three values with `0.5`. Now imagine we are on the 10th pass, that would mean to multiply the rgb values with `0` hence we know that would be `rgb(0, 0, 0)` and voila! That's the logic to gradually darken the color.

> If you're wondering what I'm talking about, this is the [Extra Credit](https://www.theodinproject.com/lessons/foundations-etch-a-sketch#extra-credit) part on the project.

### Resize Grid Border Dynamically
I want the grid, or sketchpad, to have a border around it but I also want that the width is not hard-coded and will check the CSS style of the grid's border.

I came up with the solution below:

```js
let borderSize = 0;
(() => {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    document.body.appendChild(grid);
    const border = getComputedStyle(grid).border;
    const pxIndex = border.search('px');
    if (pxIndex !== -1) {
        borderSize = +border.substring(0, pxIndex);
    }
    grid.remove();
})();

grid.style.width = `${600 - (borderSize * 2)}px`;
```

However, for some reason, sometimes it works and sometimes it doesn't.\
So in the end, I removed it since I am making the project more complex than necessary.