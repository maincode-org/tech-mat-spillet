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
        { src: '/assets/adventureIcons/ForestIcons_16_t.PNG', height: 30, width: 30 },
        { src: '/assets/adventureIcons/ForestIcons_19_t.PNG', height: 20, width: 20 },
        { src: '/assets/adventureIcons/ForestIcons_22_t.PNG', height: 20, width: 20 },
        { src: '/assets/adventureIcons/ForestIcons_26_t.PNG', height: 20, width: 20 },
        { src: '/assets/adventureIcons/ForestIcons_27_t.PNG', height: 20, width: 20 },
        { src: '/assets/adventureIcons/ForestIcons_29_t.PNG', height: 15, width: 15 },
        { src: '/assets/adventureIcons/ForestIcons_30_t.PNG', height: 20, width: 20 },
        { src: '/assets/adventureIcons/ForestIcons_38_t.PNG', height: 20, width: 20 },
        { src: '/assets/adventureIcons/ForestIcons_49_t.PNG', height: 15, width: 15 },
        { src: '/assets/adventureIcons/ForestIcons_50_t.PNG', height: 20, width: 20 },
        { src: '/assets/adventureIcons/ForestIcons_56_t.png', height: 20, width: 20 },
        { src: '/assets/adventureIcons/ForestIcons_64_t.png', height: 20, width: 20 },
        { src: '/assets/adventureIcons/ForestIcons_78_t.png', height: 20, width: 20 },
        { src: '/assets/adventureIcons/ForestIcons_79_t.png', height: 15, width: 15 },
        { src: '/assets/adventureIcons/ForestIcons_94_t.png', height: 20, width: 20 },
        { src: '/assets/adventureIcons/pirates_22_t.png', height: 20, width: 20 },
        { src: '/assets/adventureIcons/pirates_27_t.png', height: 20, width: 20 },
        { src: '/assets/adventureIcons/pirates_28_t.png', height: 20, width: 20 },
        { src: '/assets/adventureIcons/pirates_63_t.png', height: 20, width: 20 },
        { src: '/assets/adventureIcons/pirates_118_t.png', height: 20, width: 20 },
        { src: '/assets/adventureIcons/pirates_131_t.png', height: 20, width: 20 },
        { src: '/assets/adventureIcons/Trophy_01_02.png', height: 20, width: 20 },
        { src: '/assets/adventureIcons/Trophy_01_03.png', height: 20, width: 20 },
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
