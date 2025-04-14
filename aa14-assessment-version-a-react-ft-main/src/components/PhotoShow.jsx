import { useContext } from "react";
import { PhotoContext } from "../context/PhotoContext";

const PhotoShow = () => {
  const { photoUrl } = useContext(PhotoContext);
  
  return (
  <div>
    <h2>Photo Show</h2>
    <img src={photoUrl} alt="Photo" />
  </div>
  );
};

export default PhotoShow;
