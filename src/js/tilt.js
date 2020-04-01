import {} from "tilt.js";

const initTilt = () => {
  // Projects images
  // eslint-disable-next-line no-undef
  $(".project-wrapper__image a div").tilt({
    maxTilt: 3
  });
};

export default initTilt;
