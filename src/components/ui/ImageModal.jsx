import { useGetAllImagePurchestQuery } from "@/redux/api/imagePurchestApi/imagePurchestApi";
import { Button, ConfigProvider, Modal } from "antd";
import React, { useState,useEffect } from "react";
import ImagePurchestModal from "./ImagePurchestModal";

const ImageModal = ({ isModalOpen, setIsModalOpen, handleCancel }) => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [imageCount, setImageCount] = useState(1);
  const [packageId, setPackageId] = useState();
  const [imagePurchestData, setImagePurchestData] = useState()
  const { data: allImagePurchest } = useGetAllImagePurchestQuery();
  console.log("allImagePurchest", allImagePurchest?.data);

  // Function to calculate total price for selected imageCount
  const calculateTotalPrice = () => {
    return allImagePurchest?.data?.reduce((total, item) => {
      return total + item.packegePrice * imageCount;
    }, 0);
  };

useEffect(() => {
  if (allImagePurchest?.data?.length > 0) {
    setPackageId(allImagePurchest.data[0]._id); // Automatically select the first package
  }
}, [allImagePurchest]);

  const showImageModal = () => {
    const data ={
      package_id: packageId,
      amount: calculateTotalPrice(),
      numOfImages:imageCount,
    }
    setImagePurchestData(data);
    // console.log("Selected offer paymentData:", paymentData);

    setIsImageModalOpen(true);
  };
  console.log("imagePurchestData", imagePurchestData);

  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };

  const handleImageCancel = () => {
    setIsModalOpen(false);
    setIsImageModalOpen(false);
  };
  return (
    <div>
      <ConfigProvider
        theme={{
          components: {
            Modal: {
              contentBg: "#F3F3F3",
              colorIcon: "#010515",
              borderRadiusLG: 8,
            },
          },
        }}
      >
        <Modal
          centered
          open={isModalOpen}
          onCancel={handleCancel}
          footer={[
            <div key="footer-buttons" className="flex justify-evenly items-center mt-10">
              <Button key="cancel" onClick={handleCancel}>
                Cancel
              </Button>
              ,
              <Button key="buy" type="primary" onClick={showImageModal}>
                Buy Now
              </Button>
            </div>,
          ]}
        >
          <div>
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">Add Extra Images</h2>

              <div className="mt-5">
                <button
                  onClick={() => setImageCount(imageCount > 1 ? imageCount - 1 : 1)}
                  className="text-lg border-2 rounded py-1 px-5"
                >
                  -
                </button>

                {/* Bind the value of the input to imageCount and allow manual updates */}
                <input
                  type="number"
                  value={imageCount}
                  onChange={(e) => {
                    const value = Number(e.target.value);
                    if (value >= 1) {
                      setImageCount(value);
                    }
                  }}
                  className="mx-2 border rounded p-2 text-center w-16"
                />

                <button
                  onClick={() => setImageCount(imageCount + 1)}
                  className="text-lg border-2 rounded py-1 px-5"
                >
                  +
                </button>
              </div>

              {/* Display each package price and the total for selected imageCount */}
              <div className="mt-5">
                {allImagePurchest?.data?.map((item, index) => (
                  <div key={index}>
                    <p>Package Price: ${item.packegePrice}</p>
                    <p>
                      Total for {imageCount} images: ${item.packegePrice * imageCount}
                    </p>
                  </div>
                ))}
              </div>

              {/* Display the total price for all packages */}
              <div className="mt-5 text-lg font-bold">Total Price: ${calculateTotalPrice()}</div>
            </div>
          </div>
        </Modal>
      </ConfigProvider>
      <div>
        {isImageModalOpen && (
          <ImagePurchestModal
            isImageModalOpen={isImageModalOpen}
            handleCancel={handleImageCancel}
            // message="Payment System Will Be Available Soon."
            imagePurchestData={imagePurchestData}
          />
        )}
      </div>
    </div>
  );
};

export default ImageModal;
