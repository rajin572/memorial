"use client";
import { usePaymentImagePurchestMutation } from "@/redux/api/imagePurchestApi/imagePurchestApi";
import { usePaymentPurchestMutation } from "@/redux/api/purchestSubscriptionApi/purchestSubscriptionApi";
import Link from "next/link";
// import { Separator } from "@radix-ui/react-separator";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";

const PaymentSuccessPage = ({
  searchParams: { amount, projectId, payment_intent, offerPackageId, storyQuantity, numOfImages },
}) => {
  // useEffect(() => {
  //   console.log(projectId);
  //   console.log(type);
  //   console.log(amount);
  //   console.log(payment_intent);
  // }, []);

  const [isError, setIsError] = useState(false);
  const params = useSearchParams();
  const [paymentInfoData, setPaymentInfoData] = useState({});
  const [addPayment, { isLoading, error }] = usePaymentPurchestMutation();
  const [addImagePayment] = usePaymentImagePurchestMutation();

  // Track if the payment has already been submitted to prevent duplicate API calls
  const hasSubmitted = useRef(false);
  const [calledOnce, setCalledOnce] = useState(false); // Additional state to handle effect

  // Retrieve necessary parameters from URL
  const trxId = params.get("payment_intent");

  useEffect(() => {
    console.log("objectRender");
    const submitPayment = async () => {
      setIsError(false);
      // Ensure the payment isn't submitted multiple times
      if (hasSubmitted.current || calledOnce) return;

      // Construct payment info

      let paymentInfo = {
        package_id: projectId,
        status: "pending",
        amount: Number(amount),
        paymentIntentId: trxId,
      };

      if (numOfImages) {
        paymentInfo = {
          ...paymentInfo,
          package_type: "ImagePackege",
          numOfImages,
        };
      } else if (storyQuantity) {
        paymentInfo = {
          ...paymentInfo,
          package_type: "SubscriptionPlan",
          storyQuantity: Number(storyQuantity),
          offerPackageId: offerPackageId,
        };
      }

      console.log("paymentInfo", paymentInfo);

      if (payment_intent) {
        try {
          console.log("Sending payment info:", paymentInfo);
          // Await the result of the addPayment mutation
          let res;
          if (paymentInfo.numOfImages) {
            res = await addImagePayment(paymentInfo).unwrap();
          } else if (paymentInfo.storyQuantity) {
            res = await addPayment(paymentInfo).unwrap();
          }

          if (res.success) {
            console.log("complete payment!!");
          }
          console.log("Payment successful:", res);

          // Mark the payment as submitted
          hasSubmitted.current = true;
          setCalledOnce(true); // Prevent further calls

          setPaymentInfoData(paymentInfo);
        } catch (err) {
          if (err.data.message != "Duplicate Error") {
            setIsError(true);
          }
        }
      }
    };

    // Ensure all required params are present before calling the function
    if (amount && projectId && trxId && !hasSubmitted.current) {
      submitPayment();
    } else {
      console.warn("Missing payment information.");
    }
  }, [
    payment_intent,
    addImagePayment,
    addPayment,
    amount,
    calledOnce,
    numOfImages,
    offerPackageId,
    projectId,
    storyQuantity,
    trxId,
  ]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-green-100">
        <div className="w-[900px] text-center">
          <div orientation="horizontal" className="mb-10 mt-4 border-2 bg-green-800" />
          <h1 className="text-3xl font-bold text-green-800">Payment Processing...</h1>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-green-100">
        <div className="w-[900px] text-center">
          <h1 className="text-3xl font-bold text-red-800">Payment failed. Please try again.</h1>
          {numOfImages ? (
            <>
              <Link href="/story-upload">
                <button className="btn bg-red-800 text-white rounded px-5 py-2 my-2">
                  Back to home
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link href="/pricing">
                <button className="btn bg-red-800 text-white rounded px-5 py-2 my-2">
                  Back to home
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-green-100">
      <div className="w-[900px] text-center">
        <div orientation="horizontal" className="mb-10 mt-4 border-2 bg-green-800" />
        <h1 className="text-3xl font-bold text-green-800">Payment Successful!</h1>
        <p className="mt-4 text-lg">Your payment of $${amount} has been processed successfully.</p>
        <p className="mt-4">Project ID: {projectId}</p>
        {numOfImages ? (
          <>
            <Link href="/story-upload?extraImage=true">
              <button className="btn bg-green-800 text-white rounded px-5 py-2 my-2">
                Back to home
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link href="/story-upload">
              <button className="btn bg-green-800 text-white rounded px-5 py-2 my-2">
                Back to home
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
