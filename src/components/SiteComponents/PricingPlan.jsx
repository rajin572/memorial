"use client";
import React, { useEffect, useState } from "react";
import { Card, Button, Col, Row, Radio } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import SectionHeader from "../ui/SectionHeader";
import ComingSoonModal from "../ui/ComingSoonModal";
import { useGetAllSubscriptionQuery } from "@/redux/api/subscriptionApi/subscriptionApi";
import { useMyProfileQuery } from "@/redux/api/authApi";

export default function PricingPlan() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: allSubscription, isLoading, isError } = useGetAllSubscriptionQuery(null);
  const [selectedPlans, setSelectedPlans] = useState({}); // Object to hold selected plans for each subscription
  const [modalPaymentData, setModalPaymentData] = useState({}); // Object to hold selected plans for each subscription
  const { data: userData } = useMyProfileQuery();

  // Set default selected plan on data load
  useEffect(() => {
    if (allSubscription?.data?.length > 0) {
      const initialSelectedPlans = {};
      allSubscription.data.forEach((plan) => {
        const firstOffer = plan.offerSubscriptions[0]; // Get the first offer object
        if (firstOffer) {
          initialSelectedPlans[plan._id] = firstOffer; // Set the first offer object as default for this plan
        }
      });
      setSelectedPlans(initialSelectedPlans); // Set the selected plans state
    }
  }, [allSubscription]);

  const handleChange = (planId, selectedOffer) => {
    setSelectedPlans((prev) => ({
      ...prev,
      [planId]: selectedOffer, // Store the full offer object
    }));
  };

  console.log(modalPaymentData);

  const showModal = (planId) => {
    const selectedOfferId = selectedPlans[planId]; // Get the selected offer ID for this plan
    const paymentData = {
      package_type: "SubscriptionPlan",
      package_id: planId,
      offerPackageId: selectedOfferId._id,
      status: "pending",
      amount: selectedOfferId.price,
      storyQuantity: selectedOfferId.storyQuantity,
    };
    setModalPaymentData(paymentData);
    // console.log("Selected offer paymentData:", paymentData);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Something is wrong</div>;
  }

  return (
    <div className="my-28 flex flex-col items-center gap-20">
      <SectionHeader>Pricing Plans</SectionHeader>

      <Row gutter={[16, 16]} className="w-full flex justify-center">
        {allSubscription?.data?.map((plan) => (
          <Col key={plan._id} xs={32} sm={12} md={10} lg={8} xl={6} xxl={5}>
            <Card bordered={false} className="rounded-lg shadow-lg">
              <div className="mb-5 xl:mx-8 flex flex-col">
                <p className="text-3xl font-bold mb-2">{plan.planName}</p>
                <p className="text-2xl font-semibold mb-2">{plan.pageDistribution}</p>

                <Radio.Group
                  onChange={(e) =>
                    handleChange(
                      plan._id,
                      plan.offerSubscriptions.find((offer) => offer._id === e.target.value)
                    )
                  } // Pass the full offer object
                  value={selectedPlans[plan._id]?._id} // Keep track of the selected offer ID
                >
                  {plan?.offerSubscriptions?.map((offer, offerIndex) => (
                    <Radio
                      key={offerIndex}
                      value={offer._id} // Still use offer._id as the value
                      className="block font-semibold text-lg"
                    >
                      ${offer.price} / {offer.storyQuantity} stories
                    </Radio>
                  ))}
                </Radio.Group>
              </div>

              <ul className="list-none mb-8 text-left xl:mx-6">
                {plan.facilities.storyCategory.map((category, i) => (
                  <li key={i} className="mb-1 py-0.5 flex items-center gap-x-1 text-[#037EEE]">
                    <span className="text-[#037EEE] bg-[#e1f0fd] rounded-full p-0.5 mr-2">✔</span>
                    <span className="text-lg text-[#484848]">{category} Stories</span>
                  </li>
                ))}
                <li className="mb-1 py-0.5 flex items-center gap-x-1 text-[#037EEE]">
                  <span className="text-[#037EEE] bg-[#e1f0fd] rounded-full p-0.5 mr-2">✔</span>
                  <span className="text-lg text-[#484848]">
                    {plan?.facilities?.pictureDistribution} pictures
                  </span>
                </li>
                <li className="mb-1 py-0.5 flex items-center gap-x-1 text-[#037EEE]">
                  <span className="text-[#037EEE] bg-[#e1f0fd] rounded-full p-0.5 mr-2">✔</span>
                  <span className="text-lg text-[#484848]">
                    Active for {plan.facilities.timeline} days
                  </span>
                </li>
                <li className="mb-1 py-0.5 flex items-center gap-x-1 text-[#037EEE]">
                  <span className="text-[#037EEE] bg-[#e1f0fd] rounded-full p-0.5 mr-2">✔</span>
                  <span className="text-lg text-[#484848]">
                    {plan.facilities.wordCount} words per story
                  </span>
                </li>
              </ul>

              <Button
                // onClick={() => showModal(plan._id)}
                onClick={() => {
                  if (userData?.data?._id) {
                    showModal(plan._id);
                  } else {
                    window.location.href = '/sign-in';
                  }
                }}
                block
                className="h-12 font-bold bg-[#013564] text-white"
              >
                <p> Buy Now</p>
                {/* <PaymentModal orderData={orderData} /> */}
                <ArrowRightOutlined />
              </Button>
            </Card>
          </Col>
        ))}
      </Row>

      {isModalOpen && (
        <ComingSoonModal
          isModalOpen={isModalOpen}
          handleCancel={handleCancel}
          message="Payment System Will Be Available Soon."
          modalPaymentData={modalPaymentData}
        />
      )}
    </div>
  );
}
