import Loader from 'react-loader-spinner';

const Loading = () => {
  return (
    <h1>
      {' '}
      <Loader type="Oval" color="white" /> We are loading data from your city or
      something goes wrong
    </h1>
  );
};

export default Loading;
