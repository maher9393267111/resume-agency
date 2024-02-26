import React from "react";
import Link from "next/link";
import Image from "next/image";
import { fetchWord } from "../../src/lib/lang/fetchWord";
export default function MenuPrices({ locale }) {
  const pricingDataAr = [
    {
      title: "الابتدائية",
      freemonth: "شهر فترة التجريبية المجانية",
      starter: "كل ما تحتاجه لبدء التدريس عبر الإنترنت",
      btn: "اشترك الان",
      price: 150,
      priceYear: 2000,
      desc: "",
      list: [
        " الوصول الى لوحة الاتحكم",
        " ادارة رموز QR",
        " قائمة واحدة",
        " فئات غير محدودة",
        " عناصر غير محدودة",
        "مسح غير محدود",
        " لغات متعددة",
        " عملات متعددة",
" عروض",
"تحليل & احصائيات",
"التقيم & اراء الزبائن",
"دعم فني 24/7"


        // "تخصيص كامل للصحفة",
        // "روابط غير محدودة",
        // "احصائيات لإخر 30 يوم",
        // "متابعة الإحصائيات",
        // "انشاء 5 رموز QR",
      ],
      color: "#EE2658",
    },

    {
      title: "برو",
      freemonth: "شهر فترة التجريبية المجانية",
      starter: "كل ما تحتاجه لبدء التدريس عبر الإنترنت",
      btn: "اشترك الان",
      price: 200,
      priceYear: 2000,
      desc: "",
      list: [
        " الوصول الى لوحة الاتحكم",
        " ادارة رموز QR",
        "ثلاثة قوائم",
        "فئات غير محدودة",
        " عناصر غير محدودة",
        "مسح غير محدود",
        " لغات متعددة",
        "عملات متعددة",
        "عروض",
        "تحليل & احصائيات",
"التقيم & اراء الزبائن",
"دعم فني 24/7",
        "ادارة الطلبات",
        "دفع الكتروني",
        "تقارير",
       

        // "جميع ميزات باقة البداية",
        // "انشاء صفحتين بايو",
        // "انشاء صفحتين بايو",
        // "انشاء 50 رمز QR",
        // "خفاء العلامة التجارية",
        // "ربط نطاق خاص",
        // "اكواد CSS & JS مخصصة",
        // "بيع منتج رقمي",
        // "بيع خدمات رقمية",
      ],

      color: "#00B7B3",
    },
    {
      title: "المتقدمة",
      freemonth: "شهر فترة التجريبية المجانية",
      starter: "كل ما تحتاجه لبدء التدريس عبر الإنترنت",
      btn: "اشترك الان",
      price: 300,
      priceYear: 2000,
      desc: "",
      list: [

       " كل ما هو مدرج في خطة ابتدائي" ,
      " كل ما هو مدرج في خطة برو" ,
      "ادارة الافرع" ,
      "ادارة الموظفين", 
      "متطلبات خاصة" 

        // "انشاء 5 صفحات بايو",
        // " رموز QR لا محدود",
        // "ربط 5 نطاقات خاصة",
        // "تغيير العلامة التجارية",
        // "الوصول الى API",
        // "احصائيات متقدمة",
        // "روابط مؤقتة",
      ],
      color: "#FEBE10",
    },
  ];

  const pricingDataEn = [
    {
      title: "Starter",
      freemonth: "first month free",
      starter: "Everything you need to start teaching online",
      btn: "get started",
      price: 150,
      priceYear: 2000,
      desc: "",
      list: [
        "Access the control panel",
        "Manage QR codes",
        "One list",
        "Unlimited categories",
        "Unlimited items",
        "Unlimited scanning",
        "Multiple languages",
        "Multiple currencies",
        "Offers",
        "Analysis & Statistics",
        "Rating & customer opinions",
        "Technical support 24/7",


       

        // "Complete dedication to the newspaper",
        // "Unlimited links",
        // "Statistics for the last 30 days",
        // "Follow the statistics",
        // "Create 5 QR codes",
      ],
      color: "#EE2658",
    },

    {
      title: "Pro",
      freemonth: "first month free",
      starter: "Everything you need to start teaching online",
      btn: "get started",
      price: 200,
      priceYear: 2000,
      desc: "",
      list: [
       "Manage QR codes",
      "Three lists",
      "Unlimited categories",
      "Unlimited items",
      "Unlimited scanning",
      "Multiple languages",
      "Multiple currencies",
      "Offers",
      "Analysis & Statistics",
     "Rating & customer opinions",
     "Technical support 24/7",
      "Order management",
      "Electronic payment",
      "Reports",
        



        // "All features of the starter package",
        // "Create two bio pages",
        // "Create two bio pages",
        // "Hide the brand",
        // "Connect a private domain",
        // "Custom CSS & JS codes",
        // "Selling a digital product",
        // "Selling digital services",
      ],
      color: "#00B7B3",
    },

    {
      title: "Advanced",
      freemonth: "first month free",
      starter: "Everything you need to start teaching online",
      btn: "get started",
      price: 250,
      priceYear: 2000,
      desc: "",
      list: [


      "Everything included in the primary plan",
      "Everything included in the Pro plan",
     "Branch management",
      "Staff management",
     "Special requirements"


        // "All features of the Business Package",
        // "Create 5 bio pages",
        // "Unlimited QR codes",
        // "Connect 5 private domains",
        // "Rebranding",
        // "Access to API",
        // "Advanced statistics",
        // "Temporary links",
      ],
      color: "#FEBE10",
    },
  ];

  const currentData = locale === "ar" ? pricingDataAr : pricingDataEn;

  return (
    <div>
      {/* ---title--- */}

      <div>
        <h2 className="text-[32px] leading-[42px] font-bold text-center md:text-5xl md:leading-[62px] shimmer ">
          {fetchWord("menupricesTitle", locale)}
        </h2>
      </div>

      <div className="mx-auto grid max-w-screen-lg gap-5 my-12 container bg-inherit py-5 md:grid-cols-3 lg:grid-cols-3">
        {currentData.map((offer) => (
          <div
            className="relative  flex flex-col overflow-hidden rounded-xl border-2 shadow-2xl border-gray-50"
            key={offer.title}
          >
            <div
              style={{ backgroundColor: offer.color }}
              className={`min-h-[150px] bg-[${offer.color}] items-start space-y-4   p-6`}
            >
              <p className="flex font-urban text-white text-center  text-xl font-bold uppercase tracking-wider text-muted-foreground">
                {offer.title}
              </p>

              <div className="flex flex-row">
                <div className="flex items-end">
                  <div className="flex text-center text-lef text-white text-3xl font-semibold leading-6">
                    {/* {isYearly && offer.prices.monthly > 0 ? (
                      <>
                        <span className="mr-2 text-muted-foreground line-through">${offer.prices.monthly}</span>
                        <span>${offer.prices.yearly / 12}</span>
                      </>
                    ) : `$${offer.prices.monthly}`} */}
                    {offer.price}
                  </div>
                  <div className="-mb-1 ml-2 text-white text-left text-3xl font-medium">
                    <div>/{locale === "ar" ? "شهريا" : "monthly"}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex h-full flex-col justify-between gap-16 p-6">
              <ul className="space-y-2 text-left text-lg font-medium leading-normal">
                {offer.list.map((feature) => (
                  <li className="flex items-start" key={feature}>
                    {/* <Icons.check className="mr-3 h-5 w-5 shrink-0" /> */}

                    <svg
                      className="mx-2"
                      width="16"
                      height="17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m2.668 8.973 4 4 6.667-8"
                        stroke="#1127E3"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>

                    <p className="  pl-4">{feature}</p>
                  </li>
                ))}
              </ul>


              <Link href='/login' className="bg-purple-100 text-center  text-white font-semibold  block  px-4 py-2 rounded-2xl ">
        <button className=" ">
                {locale === "ar" ? "اشتراك" : " Sign in"}
              </button>
              </Link>
            



            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
