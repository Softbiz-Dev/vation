export const ParticlesConfig = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 1400
      }
    },
    color: {
      value: '#365b94'
    },
    shape: {
      type: 'polygon',
      stroke: {
        width: 10,
        color: '#365b94'
      },
      polygon: {
        nb_sides: 8
      }
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 0.1,
        opacity_min: 0.1,
        sync: true
      }
    },
    size: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 10,
        size_min: 1.25,
        sync: true
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#365b94',
      opacity: 1,
      width: 1
    },
    move: {
      enable: true,
      speed: 4,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: true,
      attract: {
        enable: true,
        rotateX: 2000,
        rotateY: 2000
      }
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: false,
        mode: 'grab'
      },
      onclick: {
        enable: false,
        mode: 'repulse'
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 200,
        line_linked: {
          opacity: 3
        }
      },
      repulse: {
        distance: 250,
        duration: 2
      }
    }
  },
  retina_detect: true
};
