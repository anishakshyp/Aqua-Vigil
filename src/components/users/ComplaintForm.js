import React from "react";
import { Controller, useForm } from "react-hook-form";

const ComplaintForm = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission logic here
  };

  return (
    <div className="flex flex-col gap-y-3 bg-[#f1f1fb] h-[100%]">
      <div className="h-[15vh] w-[100%] flex items-center px-20">
        <p className="font-bold text-[32px]">Complaint Form</p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto p-10 border form rounded shadow-lg h-[80vh]"
      >
        <div className="max-h-[70vh] overflow-y-scroll scrollbar-hide">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-600"
            >
              Name:
            </label>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  className="w-full px-4 py-2 mt-2 border rounded focus:outline-none focus:border-blue-500"
                />
              )}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="city"
              className="block text-sm font-semibold text-gray-600"
            >
              City:
            </label>
            <Controller
              name="city"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  className="w-full px-4 py-2 mt-2 border rounded focus:outline-none focus:border-blue-500"
                />
              )}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="state"
              className="block text-sm font-semibold text-gray-600"
            >
              State:
            </label>
            <Controller
              name="state"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  className="w-full px-4 py-2 mt-2 border rounded focus:outline-none focus:border-blue-500"
                />
              )}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-gray-600"
            >
              Phone Number:
            </label>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="tel"
                  className="w-full px-4 py-2 mt-2 border rounded focus:outline-none focus:border-blue-500"
                />
              )}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-semibold text-gray-600"
            >
              Description:
            </label>
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <textarea
                  {...field}
                  className="w-full px-4 py-2 mt-2 border rounded focus:outline-none focus:border-blue-500"
                />
              )}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-semibold text-gray-600"
            >
              Title:
            </label>
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  className="w-full px-4 py-2 mt-2 border rounded focus:outline-none focus:border-blue-500"
                />
              )}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-sm font-semibold text-gray-600"
            >
              Image File:
            </label>
            <Controller
              name="image"
              control={control}
              render={({ field }) => (
                <div>
                  <input
                    type="file"
                    onChange={(e) => {
                      field.onChange(e.target.files[0]);
                    }}
                    className="w-full px-4 py-2 mt-2 border rounded focus:outline-none focus:border-blue-500"
                  />
                  {field.value && (
                    <img
                      src={URL.createObjectURL(field.value)}
                      alt="Uploaded"
                      className="mt-2 rounded"
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                  )}
                </div>
              )}
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ComplaintForm;
