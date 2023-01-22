import { useSelector } from "react-redux";
import "./pageloading.css";
const PageLoading = () => {
  const isPageLoading = useSelector((state) => state.oauth.pageLoading);

  return (
    isPageLoading?.status && (
      <div className="page_processing_modal">
        <div className="lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p>{isPageLoading.message}</p>
      </div>
    )
  );
};

export default PageLoading;
