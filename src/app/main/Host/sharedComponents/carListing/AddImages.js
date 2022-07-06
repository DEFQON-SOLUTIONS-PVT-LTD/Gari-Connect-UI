import { Button, Card, Typography } from "@mui/material";
import React, { useState } from "react";
import ImageUploading from "react-images-uploading";
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from "react-redux";
import { addImages } from "../../ListStepper/store/addImageSlices";

const AddImages = () => {
  const dispatch = useDispatch();
  const _images = useSelector((state) => state.vehicleimages);
  // console.log(_images);

  const [images, setImages] = React.useState([]);
  const maxNumber = 5;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);

    setImages(imageList);

    dispatch(addImages({
      mainimage: (imageList[imageList.length - 1]).data_url,
      setCover: true,
    }))



  };
  console.log(images);

  return (
    <div>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="flex flex-row w-auto">
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                {/* <CloseIcon onClick={() => onImageRemove(index)} className="text-16 p-2 text-right font-normal bg-white rounded-full" /> */}
                <img className="rounded-8 mr-10" style={{ width: '228px', height: '160px' }} src={image.data_url} alt="" />
              </div>
            ))}

            <Card
              className="cursor-pointer rounded-lg p-24 shadow-none border"
              style={isDragging ? { color: "red" } : null}
              onClick={onImageUpload}
              {...dragProps}
            >
              <img className="mx-auto mb-16" src="assets/images/icons/uploadImageicon.svg" alt="" />
              <Typography className="text-12 space-x-6"><span className="font-500" style={{ color: '#D22A8F' }}>Click to upload</span><span className="text-grey-500">or drag and drop</span></Typography>
              <Typography className="text-10" color="text.secondary">SVG, PNG, JPG or GIF (max. 800x400px)</Typography>
            </Card>
            {/* &nbsp;
            <button onClick={onImageRemoveAll}>Remove all images</button> */}
          </div>
        )}
      </ImageUploading>
    </div>
  );
};

export default AddImages;
