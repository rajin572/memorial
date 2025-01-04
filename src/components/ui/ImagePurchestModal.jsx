import { Button, ConfigProvider, Modal } from "antd";
import React from "react";
import CheckoutWrapper from "../Pyament/PyamentCheckout/PyamentCheckout";

const ImagePurchestModal = ({ isImageModalOpen, handleCancel, imagePurchestData,  }) => {

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
        <Modal centered open={isImageModalOpen} onCancel={handleCancel} footer={null}>
          <div>
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">Complete Your Payment</h2>
              <p className="mt-2 text-sm text-gray-600">
                You are about to pay <span className="font-medium">${imagePurchestData.amount}</span> for your
                project.
              </p>
            </div>
          </div>

          <div>
            <CheckoutWrapper amount={imagePurchestData?.amount} projectId={imagePurchestData?.package_id} numOfImages={imagePurchestData?.numOfImages} />
          </div>
        </Modal>
      </ConfigProvider>
    </div>
  );
};

export default ImagePurchestModal;
