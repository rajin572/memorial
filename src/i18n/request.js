// import { getRequestConfig } from "next-intl/server";
// import { cookies } from "next/headers";

// export default getRequestConfig(async () => {
//   const cookieStore = cookies();
//   const locale = cookieStore.get("NEXT_LOCALE")?.value || "en";

//   const messages = await import(`../../messages/${locale}.json`).default;

//   return {
//     locale,
//     messages,
//   };
// });

// Pa$$w0rd!


import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  const cookieStore = cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value || "en";
  console.log({locale})

  let messages;

  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    console.error(`Error loading messages for locale "${locale}":`, error);
    messages = {}; // Fallback to empty messages or handle error as needed
  }

  return {
    locale,
    messages,
  };
});
