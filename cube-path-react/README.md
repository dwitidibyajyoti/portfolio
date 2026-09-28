# Cube Path Playground

A Vite + React + React Three Fiber demo inspired by the supplied reference image.

## Features
- Multiple floating blue 3D cubes.
- Each cube is constrained to its own curved path.
- Drag a cube: it snaps to the nearest point on that path rather than leaving the path.
- Cube rotation follows the tangent/direction of the path.
- Mouse/touch camera orbit is supported.
- Responsive landing-page styling.

## Run

```bash
npm install
npm run dev
```

Then open the Vite URL shown in the terminal.

## Main implementation

`src/main.jsx` contains the path math and constrained drag behavior. The important parts are:
- `pathPoint(path, t)` converts a normalized path position `t` into a 3D coordinate.
- `pathTangent(path, t)` gets the direction of the path at that point.
- `findNearestT(point)` samples the path and chooses the nearest point while dragging.
- `setFromUnitVectors(...)` rotates the cube so its local X axis follows the path.
