import React, { useState } from "react";
import MultiImageInput from "react-multiple-image-input";

const AddImages = () => {
  const crop = {
    unit: "%",
    aspect: 3 / 4,
    width:"200",    
    height:"100"
  };

  const [images, setImages] = useState({});
  return (
    <div>
      <MultiImageInput
        theme="light"
        max={10}
        allowCrop={true}
        images={images}
        setImages={setImages}
        cropConfig={{ crop, ruleOfThirds: false }}
      />
    </div>
  );
};

export default AddImages;
