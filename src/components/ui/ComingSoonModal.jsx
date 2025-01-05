import { Button, ConfigProvider, Modal } from "antd";
import Link from "next/link";
import React from "react";
import CheckoutWrapper from "../Pyament/PyamentCheckout/PyamentCheckout";
import { useTranslations } from "next-intl";

const ComingSoonModal = ({ isModalOpen, handleCancel, message, modalPaymentData }) => {
  console.log("paymentData", modalPaymentData);
  const tb = useTranslations("Payment");

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
        <Modal centered open={isModalOpen} onCancel={handleCancel} footer={null}>
          <div>
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">{tb("modalTitle")}</h2>
              <p className="mt-2 text-sm text-gray-600">
                {tb("description1")}{" "}
                <span className="font-medium">${modalPaymentData?.amount}</span> {tb("description2")}.
              </p>
            </div>
          </div>

          <div>
            <CheckoutWrapper
              amount={modalPaymentData?.amount}
              projectId={modalPaymentData?.package_id}
              storyQuantity={modalPaymentData?.storyQuantity}
              offerPackageId={modalPaymentData?.offerPackageId}
            />
          </div>
        </Modal>
      </ConfigProvider>
    </div>
  );
};

export default ComingSoonModal;
