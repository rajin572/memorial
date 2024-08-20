"use client";
import React, { useEffect, useState } from "react";
import { Card, Button, Col, Row } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import SectionHeader from "../ui/SectionHeader";

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
      <SectionHeader>Pricing Plans</SectionHeader>

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
