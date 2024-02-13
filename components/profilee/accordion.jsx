/* eslint-disable max-len */
import React from 'react'
import { Disclosure } from '@headlessui/react'
import { FaChevronUp } from "react-icons/fa";
import parse from "html-react-parser";





const faq = [

{
    id:1,
    title:'תחומי התמחות המשרד',
    desc:'עו"ד משה פסחוב בעל רזומה עשיר בייצוג נכים בוועדות הרפואיות של המוסד לביטוח לאומי והוא נלחם למען זכויותיהם בנחישות ובמקצועיות על מנת שיוכלו לקבל את כל הזכויות המגיעות להם.'
},

{
    id:2,
    title:'תחומי התמחות המשרד',
    desc:'עו"ד משה פסחוב בעל רזומה עשיר בייצוג נכים בוועדות הרפואיות של המוסד לביטוח לאומי והוא נלחם למען זכויותיהם בנחישות ובמקצועיות על מנת שיוכלו לקבל את כל הזכויות המגיעות להם.'
},


{
    id:3,
    title:'תחומי התמחות המשרד',
    desc:'עו"ד משה פסחוב בעל רזומה עשיר בייצוג נכים בוועדות הרפואיות של המוסד לביטוח לאומי והוא נלחם למען זכויותיהם בנחישות ובמקצועיות על מנת שיוכלו לקבל את כל הזכויות המגיעות להם.'
},


]




const FaqCard = ({projects,mainTextColor , accordionTitleColor , accordionDescColor , accordionBorderColor ,accordionBgColor ,accordionDescBgColor  }) => (

  <div dir='rtl' className=' pb-8'>

 
  
  <div className={`${accordionBorderColor} mx-auto max-w-3xl   w-[90%]   shadow-xl faq border  border-whit`}>
     {/* // 🌐🌐  border color dynamic */}
    {projects?.map((f) => (
      <Disclosure key={f.id}>
        {({ open }) => (
          <>
            <Disclosure.Button className={`${accordionBorderColor} ${accordionBgColor} fadeinup  relative shadow-md z-1 mb- flex w-full justify-between rounded-md p-4 text-left text-m sm:text-lg font-medium coverb text-medicus hover:bg-gra-100 focus:outline-none focus-visible:ring focus-visible:ring-gray-300 focus-visible:ring-opacity-75 border-whit border-b`}>
              <span dir='rtl' className={` ${accordionTitleColor} mainTextColo `}>{f?.title}</span>
              <FaChevronUp
                className={`${
                  open ? '' : 'rotate-180 transform'
                } h-5 w-5 text-medicus mainTextColo ${accordionTitleColor}    transition-all  duration-200 `}
              />
            </Disclosure.Button>

            <Disclosure.Panel className={` ${accordionDescBgColor}  relative z-2 rounded-md shadow-md mb-2 -mt-4 px-6  text-md text-gray coverbg text-left post-content  bg-whit py-6`}>
             
<p dir='rtl' className={` ${accordionDescColor}`}>
  
{parse(f?.desc)}  
  
  {/* {f?.desc} */}


</p>

            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    ))}
  </div>
  </div>
)

export default FaqCard
