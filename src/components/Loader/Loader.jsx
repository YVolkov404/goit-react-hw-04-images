import { ThreeCircles } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <ThreeCircles
      height="44"
      width="44"
      color="#4fa94d"
      wrapperStyle={{}}
      wrapperClass=""
      // visible={true}
      ariaLabel="three-circles-rotating"
      outerCircleColor="#ffe194"
      innerCircleColor="#ffe194"
      middleCircleColor="#4c4c6d"
    />
  );
};
