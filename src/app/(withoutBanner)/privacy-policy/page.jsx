/* eslint-disable react/no-unescaped-entities */
import React from "react";

export default function PrivacyPolicys() {
  return (
    <div className="px-3 md:px-5 lg:px-8 xl:px-0 my-14 md:my-20">
      <p className="text-sm text-center sm:text-start sm:text-3xl font-semibold text-[#3598F1]">
        Privacy Policy
      </p>
      <div className="border-t border-[#1A1A1A] my-5"></div>
      <div className="flex flex-col gap-6 text-lg">
        <p className="text-sm sm:text-lg">
          This Privacy Policy describes how Memorial Moments ("we", "us", or
          "our") collects, uses, and shares your information when you use our
          mobile application ("App")
        </p>
        <div className="px-10 text-sm sm:text-lg">
          <ul>
            <li className="list-disc font-bold">Information We Collect: </li>
          </ul>
          <p>
            When you use the Memorial Moments App, we may collect the following
            types of information.
          </p>
        </div>

        <div className="text-sm sm:text-lg">
          <p className="font-bold">1. Profile Information:</p>
          <p>
            We collect information you provide when you edit your profile,
            including any changes to your name or email address.
          </p>
        </div>

        <div className="text-sm sm:text-lg">
          <p className="font-bold">2. Story Information:</p>
          <p>
            When you add a story, we may collect the story title, date of birth,
            date of death (picked from the calendar), uploaded music, uploaded
            images, and story description.
          </p>
        </div>

        <div className="text-sm sm:text-lg">
          <p className="font-bold">3. Subscription Information:</p>
          <p>
            If you choose to subscribe to our premium services, we collect
            payment information through our third-party payment processor,
            Stripe.
          </p>
        </div>

        <div className="text-sm sm:text-lg">
          <p className="font-bold">4. Usage Information:</p>
          <p>
            We may collect information about how you interact with the App,
            including your use of features and preferences.
          </p>
        </div>

        <div className="text-sm sm:text-lg">
          <p className="font-bold">5. How We Use Your Information:</p>
          <div className="flex flex-col gap-px sm:gap-1">
            <p>
              We may use the information we collect for the following purposes:
            </p>
            <p>
              To provide and improve the App's functionality and user
              experience.
            </p>
            <p>
              To communicate with you about your account and App-related
              updates.
            </p>
            <p>To process payments for subscription services.</p>
            <p>
              To personalize your experience and provide targeted content and
              advertisements.
            </p>
            <p> To enforce our Terms of Service and other legal agreements.</p>
            <p>To comply with legal obligations.</p>
          </div>
        </div>

        <div className="text-sm sm:text-lg">
          <p className="font-bold">6. Data Security:</p>
          <p>
            We take reasonable measures to protect your information from
            unauthorized access, use, or disclosure. However, no method of
            transmission over the internet or electronic storage is 100% secure.
          </p>
        </div>

        <div className="text-sm sm:text-lg">
          <p className="font-bold">7. Data Retention:</p>
          <p>
            We retain your information for as long as necessary to fulfill the
            purposes outlined in this Privacy Policy unless a longer retention
            period is required or permitted by law.
          </p>
        </div>

        <div className="text-sm sm:text-lg">
          <p className="font-bold">8. Children's Privacy:</p>
          <p>
            The Memorial Moments App is not intended for children under the age
            of 13. We do not knowingly collect or solicit personal information
            from children.
          </p>
        </div>
      </div>
    </div>
  );
}
