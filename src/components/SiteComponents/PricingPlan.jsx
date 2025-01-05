"use client";
import React, { useEffect, useState } from "react";
import { Card, Button, Col, Row, Radio } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import SectionHeader from "../ui/SectionHeader";
import ComingSoonModal from "../ui/ComingSoonModal";
import { useGetAllSubscriptionQuery } from "@/redux/api/subscriptionApi/subscriptionApi";
import { useMyProfileQuery } from "@/redux/api/authApi";
import { useTranslations } from "next-intl";
import { useLanguage } from "../AppContext";
import translateText from "@/translateText";

export default function PricingPlan() {
  const t = useTranslations("Pricing");
  const tb = useTranslations("Button");
  const tsub = useTranslations("Subscriptions");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    data: allSubscription,
    isLoading,
    isError,
  } = useGetAllSubscriptionQuery(null);
  const [selectedPlans, setSelectedPlans] = useState({}); // Object to hold selected plans for each subscription
  const [modalPaymentData, setModalPaymentData] = useState({}); // Object to hold selected plans for each subscription
  const { data: userData } = useMyProfileQuery();
  const [translatedSubscriptions, setTranslatedSubscriptions] = useState([]);
  const { state } = useLanguage();

  useEffect(() => {
    const translateAllSubscriptionData = async () => {
      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_TRANSLATE_API_KEY;

      try {
        const translated = await Promise.all(
          allSubscription?.data.map(async (plan) => {
            const planName = await translateText(
              plan.planName,
              state.language,
              apiKey
            );
            const pageDistribution = await translateText(
              plan.pageDistribution,
              state.language,
              apiKey
            );

            const facilities = {
              ...plan.facilities,
              storyCategory: await Promise.all(
                plan.facilities.storyCategory.map((category) =>
                  translateText(category, state.language, apiKey)
                )
              ),
              pictureDistribution: await translateText(
                plan.facilities.pictureDistribution,
                state.language,
                apiKey
              ),
              timeline: plan.facilities.timeline, // No translation needed
              wordCount: plan.facilities.wordCount, // No translation needed
            };

            const offerSubscriptions = await Promise.all(
              plan.offerSubscriptions.map(async (offer) => ({
                ...offer,
                price: offer.price, // No translation needed
                storyQuantity: await translateText(
                  `${offer.storyQuantity} stories`,
                  state.language,
                  apiKey
                ),
              }))
            );

            return {
              ...plan,
              planName,
              pageDistribution,
              facilities,
              offerSubscriptions,
            };
          })
        );

        setTranslatedSubscriptions(translated);
      } catch (error) {
        console.error("Error translating subscription data:", error);
        setTranslatedSubscriptions(allSubscription?.data || []); // Fallback to original data
      }
    };

    if (allSubscription?.data) {
      translateAllSubscriptionData();
    }
  }, [allSubscription, state.language]);

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
      <SectionHeader>{t("heading")}</SectionHeader>

      {/* <Row gutter={[16, 16]} className="w-full flex justify-center">
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
                  } 
                  value={selectedPlans[plan._id]?._id} 
                >
                  {plan?.offerSubscriptions?.map((offer, offerIndex) => (
                    <Radio
                      key={offerIndex}
                      value={offer._id} 
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
                <p> {tb("buyNow")}</p>
               
                <ArrowRightOutlined />
              </Button>
            </Card>
          </Col>
        ))}
      </Row> */}

      <Row gutter={[16, 16]} className="w-full flex justify-center">
        {translatedSubscriptions.map((plan) => (
          <Col key={plan._id} xs={32} sm={12} md={10} lg={8} xl={6} xxl={5}>
            <Card bordered={false} className="rounded-lg shadow-lg">
              <div className="mb-5 xl:mx-8 flex flex-col">
                <p className="text-3xl font-bold mb-2">{plan.planName}</p>
                <p className="text-2xl font-semibold mb-2">
                  {plan.pageDistribution}
                </p>

                <Radio.Group
                  onChange={(e) =>
                    handleChange(
                      plan._id,
                      plan.offerSubscriptions.find(
                        (offer) => offer._id === e.target.value
                      )
                    )
                  }
                  value={selectedPlans[plan._id]?._id}
                >
                  {plan.offerSubscriptions.map((offer, offerIndex) => (
                    <Radio
                      key={offerIndex}
                      value={offer._id}
                      className="block font-semibold text-lg"
                    >
                      ${offer.price} / {offer.storyQuantity}
                    </Radio>
                  ))}
                </Radio.Group>
              </div>

              <ul className="list-none mb-8 text-left xl:mx-6">
                {plan.facilities.storyCategory.map((category, i) => (
                  <li
                    key={i}
                    className="mb-1 py-0.5 flex items-center gap-x-1 text-[#037EEE]"
                  >
                    <span className="text-[#037EEE] bg-[#e1f0fd] rounded-full p-0.5 mr-2">
                      ✔
                    </span>
                    <span className="text-lg text-[#484848]">{category}</span>
                  </li>
                ))}
                <li className="mb-1 py-0.5 flex items-center gap-x-1 text-[#037EEE]">
                  <span className="text-[#037EEE] bg-[#e1f0fd] rounded-full p-0.5 mr-2">
                    ✔
                  </span>
                  <span className="text-lg text-[#484848]">
                    {plan.facilities.pictureDistribution} {tsub("pictures")}
                  </span>
                </li>
                <li className="mb-1 py-0.5 flex items-center gap-x-1 text-[#037EEE]">
                  <span className="text-[#037EEE] bg-[#e1f0fd] rounded-full p-0.5 mr-2">
                    ✔
                  </span>
                  <span className="text-lg text-[#484848]">
                    {tsub("activefor")} {plan.facilities.timeline}{" "}
                    {tsub("days")}
                  </span>
                </li>
                <li className="mb-1 py-0.5 flex items-center gap-x-1 text-[#037EEE]">
                  <span className="text-[#037EEE] bg-[#e1f0fd] rounded-full p-0.5 mr-2">
                    ✔
                  </span>
                  <span className="text-lg text-[#484848]">
                    {plan.facilities.wordCount} {tsub("wordsperstory")}
                  </span>
                </li>
              </ul>

              <Button
                onClick={() => {
                  if (userData?.data?._id) {
                    showModal(plan._id);
                  } else {
                    window.location.href = "/sign-in";
                  }
                }}
                block
                className="h-12 font-bold bg-[#013564] text-white"
              >
                <p>{tsub("buynow")}</p>
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
