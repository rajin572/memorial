"use client";
import React, { useEffect, useState } from "react";
import { Card, Button, Col, Row } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

export default function PricingPlan() {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the pricing data from the JSON file
    const fetchPricingData = async () => {
      try {
        const response = await fetch("/demoData/pricingData.json"); // Corrected the path
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json(); // Parsing JSON data
        console.log(data.pricing);
        setPlans(data.pricing);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching pricing data:", error);
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
      <div className="flex flex-col md:flex-row gap-2 md:gap-6 lg:gap-4 items-center mx-auto">
        <div className="flex flex-col items-center md:items-end">
          <hr className="w-[60px] md:w-[120px] lg:w-[240px] md:mr-16 lg:mr-24 border-t-2 border-[#F6A56D]" />
          <hr className="w-[60px] md:w-[120px] lg:w-[240px] mt-1 sm:mt-2 md:mr-24 lg:mr-32 border-t-2 border-[#0259A9]" />
        </div>
        <p className="text-lg md:text-2xl lg:text-3xl font-bold text-center md:text-left">
          Pricing Plans
        </p>
        <div className="flex flex-col items-center md:items-start">
          <hr className="w-[60px] md:w-[120px] lg:w-[240px] ml:12 md:ml-24 lg:ml-32 border-t-2 border-[#0259A9]" />
          <hr className="w-[60px] md:w-[120px] lg:w-[240px] mt-1 sm:mt-2 ml:12 md:ml-16 lg:ml-24 border-t-2 border-[#F6A56D]" />
        </div>
      </div>

      <Row gutter={[16, 16]} className="w-full flex justify-center">
        {plans.map((plan, index) => (
          <Col key={index} xs={32} sm={12} md={10} lg={8} xl={4}>
            <Card
              bordered={false}
              className="rounded-lg shadow-lg flex flex-col items-center"
            >
              <div className="mx-10">
                <p className="text-2xl font-bold mb-2">{plan.title}</p>
                <p className="text-xl font-semibold mb-2">{plan.subtitle}</p>
                <div className="flex gap-2">
                  <p className="text-5xl font-bold mb-1">${plan.price}</p>
                  <p className="text-lg text-gray-500 mt-5 mb-4">
                    {plan.period}
                  </p>
                </div>
              </div>
              <ul className="list-none mb-4 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="mb-1 py-0.5">
                    <span className="text-[#aca8c5] bg-[#e1f0fd] rounded-full p-0.5 mr-2">
                      ✔
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button block className="h-12 font-bold bg-[#013564] text-white">
                <p> Buy Now</p>
                <ArrowRightOutlined />
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
