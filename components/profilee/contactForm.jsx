import React from 'react'

export default function () {
  return (
    <form onSubmit={handleSubmit}  action="">
    <div className=" justify-center flex-col md:flex-row flex gap-4">
      <div className="w-full md:w-1/2">
        <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
          placeholder="name"
          className={`${contactInputBorderColor} placeholdertext w-full py-[8px]     border-whit border outline-none `}
          type="text"
        />
      </div>

      <div className="w-full md:w-1/2">
        <input
               required
               value={email}
               onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          className={`${contactInputBorderColor} placeholdertext w-full py-[8px]     border-whit border outline-none `}
          type="email"
        />
      </div>
    </div>

    <div className="w-full my-4">
      <input
             type="tel"
             required
             id="number"
             
             value={number}

             onChange={(e) => setNumber(e.target.value)}
        placeholder="phone"
        className={`${contactInputBorderColor} placeholdertext w-full py-[8px]     border-whit border outline-none `}
        // type="text"
      />
    </div>

    <div className="w-full my-4">
      <textarea
           
           name="message"
           required
          
           value={message}
           onChange={(e) => setMessage(e.target.value)}
        placeholder="message"
        rows="4"
        cols="50"
        className={`${contactInputBorderColor} placeholdertext w-full py-[8px]     border-whit border outline-none `}
        type="text"
      />
    </div>



    <div className="w-full">
    <button type='submit' className={`${ contactBTnBgColor} ${contactBtnTextColor} w-full mainBgColor text-whit font-bold text-center text-xl rounded-sm  py-3 px-6`}>
          Submit
        </button>
    </div>
  </form>

  )
}
