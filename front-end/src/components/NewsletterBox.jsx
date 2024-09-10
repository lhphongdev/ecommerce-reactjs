import React from "react";

const NewsletterBox = () => {
  const onSubmitHandler = (event) => {
      event.preventDefault();
      alert('submit')
  };
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe new & get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Aliqua proident culpa qui irure. Ullamco non ea aliquip est ut consequat
        incididunt fugiat nulla. Consequat anim sunt anim eu. Occaecat amet
        consectetur eu veniam deserunt occaecat nisi consectetur. Elit ex ad
        minim et. Ipsum ad nostrud voluptate aute duis adipisicing. Ex anim
        incididunt id deserunt aliqua non commodo quis ut ut exercitation.
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
        action=""
      >
        <input
          className="w-full sm:flex-1 outline-none"
          type="email"
          placeholder="Enter your email"
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
