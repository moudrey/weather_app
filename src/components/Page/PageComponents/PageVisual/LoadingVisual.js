import Loader from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className="weather-loading">
      <Loader type="Oval" color="black" />
    </div>
  );
};

export default Loading;
