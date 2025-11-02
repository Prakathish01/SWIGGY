export const ContactUs = () => {
  return (
    <div className="mt-[76px]">
      <h1>ContactUs</h1>
      <input
        type="text"
        className="rounded p-1 m-1 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
        placeholder="UserName"
      />
      <input
        type="text"
        className="w-full max-w-sm rounded-md border border-gray-300 bg-white p-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:shadow-md transition-all duration-200"
        placeholder="Password"
      />
      <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
        Submit
      </button>
    </div>
  );
};
