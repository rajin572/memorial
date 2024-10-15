"use client";
import React, { useEffect, useState } from "react";
import { Card, Button, Col, Row } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import SectionHeader from "../ui/SectionHeader";
import ComingSoonModal from "../ui/ComingSoonModal";

export default function PricingPlan() {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    // Fetch the pricing data from the JSON file
    const fetchPricingData = async () => {
      try {
        const response = await fetch("/demoData/pricingData.json"); // Corrected the path
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json(); // Parsing JSON data

        setPlans(data.pricing);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchPricingData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Simple loading state
  }

  return (
    <div className="my-28 flex flex-col items-center gap-20">
      <SectionHeader>Pricing Plans</SectionHeader>

      <Row gutter={[16, 16]} className="w-full flex justify-center">
        {plans.map((plan, index) => (
          <Col key={index} xs={32} sm={12} md={10} lg={8} xl={6} xxl={5}>
            <Card bordered={false} className="rounded-lg shadow-lg ">
              <div className="mb-5 xl:mx-8 flex flex-col">
                <p className="text-3xl font-bold mb-2">{plan.title}</p>
                <p className="text-2xl font-semibold mb-2">{plan.subtitle}</p>
                <div className="flex gap-2">
                  <p className="text-6xl font-bold mb-1">${plan.price}</p>
                  <p className="text-lg font-bold text-primary-color mt-7 mb-4">
                    {plan.period}
                  </p>
                </div>
              </div>
              <ul className="list-none mb-8 text-left xl:mx-6">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="mb-1 py-0.5 flex items-center gap-x-1 text-[#037EEE]"
                  >
                    <span className="text-[#037EEE] bg-[#e1f0fd] rounded-full p-0.5 mr-2">
                      ✔
                    </span>
                    <span className="text-lg text-[#484848]">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => {
                  showModal();
                }}
                block
                className="h-12 font-bold bg-[#013564] text-white"
              >
                <p> Buy Now</p>
                <ArrowRightOutlined />
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
      <ComingSoonModal
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        message="Payment System Will Be Available Soon."
      />
    </div>
  );
}
