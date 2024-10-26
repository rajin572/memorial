import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { toast } from "sonner";
import Cookies from "universal-cookie";

// Load the Stripe.js library with your publishable key
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const CheckoutPage = ({ amount, projectId, clientSecret, offerPackageId="", storyQuantity="" ,numOfImages=""}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const cookie = new Cookies();
  const user = cookie.get("user");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const { error: submitError } = await elements.submit();

    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);
      return;
    }

    // Extract the payment_intent ID from clientSecret
    const paymentIntentId = clientSecret.split("_secret")[0];

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `${process.env.NEXT_PUBLIC_STRIPE_CALLBACK_URL}/payment-success?amount=${amount}&projectId=${projectId}&payment_intent=${paymentIntentId}&offerPackageId=${offerPackageId}&storyQuantity=${storyQuantity}&numOfImages=${numOfImages}`,
      },
    });

    if (error) {
      setErrorMessage(error.message);
    }

    setLoading(false);
  };

  console.log(clientSecret, stripe, elements);
  if (!clientSecret || !stripe || !elements) {
    return <div className="flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="mt-4 flex items-center justify-center bg-gray-100 px-4 py-10 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        {/* <div className="text-center">
          <Image
            src={logo}
            alt="Logo"
            width={100}
            height={100}
            className="mx-auto mb-4 bg-slate-500"
          />
          <h2 className="text-3xl font-extrabold text-gray-900">
            Complete Your Payment
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            You are about to pay <span className="font-medium">${amount}</span>{" "}
            for your project.
          </p>
        </div> */}

        <form onSubmit={handleSubmit} className="space-y-6 rounded-lg bg-white p-8 shadow-md">
          {clientSecret && <PaymentElement />}
          {errorMessage && <div className="text-red-500">{errorMessage}</div>}
          <button
            disabled={!stripe || loading}
            className="flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-3 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {!loading ? `Pay $${amount}` : "Processing..."}
          </button>
        </form>
      </div>
    </div>
  );
};

const CheckoutWrapper = ({ amount, projectId, storyQuantity = "", offerPackageId = "", numOfImages="" }) => {
  const [clientSecret, setClientSecret] = useState("");

  // console.log("wrapper.............");
  // console.log(amount, sendFor, projectId, type, milestoneId);

  // const amountUpdate = Math.ceil(amount);

  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        const response = await fetch("/api/payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amount: Math.ceil(amount) * 100,
            currency: "usd",
          }),
        });

        const data = await response.json();
        console.log(data);
        if (data.error) {
          throw new Error(data.error);
        }
        if (data.clientSecret) {
          setClientSecret(data.clientSecret);
        } else {
          throw new Error("Client secret is missing");
        }
      } catch (error) {
        console.error("Error creating payment intent:", error);
        toast.error("Error in creating payment intent");
      }
    };

    createPaymentIntent();
  }, [amount, projectId]);

  if (!clientSecret) {
    return <div>Loading...</div>; // Optional: show a loading state while fetching the client secret
  }

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <CheckoutPage
        amount={amount}
        projectId={projectId}
        clientSecret={clientSecret}
        offerPackageId={offerPackageId}
        storyQuantity={storyQuantity}
        numOfImages={numOfImages}
      />
    </Elements>
  );
};

export default CheckoutWrapper;
