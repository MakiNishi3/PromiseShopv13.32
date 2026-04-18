// filters.js
const filters = {
  image: [
    {
      id: "huesat",
      name: "Hue/Saturation",
      params: { h: 0, s: 0, l: 0 },
      range: { min: -360, max: 360 }
    },
    {
      id: "lab",
      name: "LAB",
      params: { l: 0, a: 0, b: 0 },
      range: { min: -360, max: 360 }
    },
    {
      id: "invert",
      name: "Invert",
      params: { amount: 0 },
      range: { min: 0, max: 100 }
    },
    {
      id: "evcadjust",
      name: "Exposure/Contrast",
      params: { e: 0, v: 0, c: 0 },
      range: { min: -360, max: 360 }
    },
    {
      id: "highshad",
      name: "Highlights/Shadows",
      params: { h: 0, s: 0 },
      range: { min: -360, max: 360 }
    }
  ],
  distort: [
    {
      id: "wave",
      name: "Wave",
      params: { a: 0, f: 0 },
      range: { min: 0, max: 100 }
    },
    {
      id: "ripple",
      name: "Ripple",
      params: { a: 0, f: 0 },
      range: { min: 0, max: 360 }
    },
    {
      id: "fish",
      name: "Fisheye",
      params: { amount: 0 },
      range: { min: -360, max: 360 }
    },
    {
      id: "polcoor",
      name: "Polar Coordinates",
      params: { convert: true, angle: 0 },
      range: { min: 0, max: 100 }
    },
    {
      id: "zigzag",
      name: "ZigZag",
      params: { a: 0, f: 0 },
      range: { min: 0, max: 360 }
    }
  ],
  stylize: [
    {
      id: "kalido",
      name: "Kaleido",
      params: { angle: 0, size: 0 },
      range: { min: 0, max: 360 }
    },
    {
      id: "edgedetect",
      name: "Edge Detect",
      params: { amount: 0 },
      range: { min: 0, max: 360 }
    }
  ]
};

export default filters;
