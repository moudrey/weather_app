import Loader from 'react-loader-spinner';
import '../Page.css';

const SeznamLoading = () => {
  return (
    <div className="seznam-loader">
      <Loader type="Oval" color="white" />
    </div>
  );
};

export default SeznamLoading;
