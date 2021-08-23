/* ---- particles.js config ---- */

const options: any = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 2300,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      speed: 1,
      out_mode: 'out',
    },
    shape: {
      type: ['image'],
      image: [
        { src: '/assets/particleIcons/triruler.svg', height: 30, width: 30 },
        { src: '/assets/particleIcons/sword.svg', height: 20, width: 20 },
        { src: '/assets/particleIcons/pen.svg', height: 20, width: 20 },
        { src: '/assets/particleIcons/rocket.svg', height: 20, width: 20 },
        { src: '/assets/particleIcons/ruler.svg', height: 20, width: 20 },
        { src: '/assets/particleIcons/camping.svg', height: 15, width: 15 },
        { src: '/assets/particleIcons/minus.svg', height: 20, width: 20 },
        { src: '/assets/particleIcons/science.svg', height: 20, width: 20 },
        { src: '/assets/particleIcons/dna.svg', height: 15, width: 15 },
        { src: '/assets/particleIcons/multiply.svg', height: 20, width: 20 },
        { src: '/assets/particleIcons/test.svg', height: 20, width: 20 },
      ],
    },
    color: {
      value: '#fb8500',
    },
    size: {
      value: 40,
      random: false,
      anim: {
        enable: true,
        speed: 4,
        size_min: 10,
        sync: false,
      },
    },
  },
  retina_detect: false,
};
export default options;
