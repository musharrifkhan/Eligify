import React from "react";
import { useNavigate } from "react-router-dom";

const features = [
  {
    title: "Check eligibility fast",
    description:
      "Answer a few simple questions and see schemes that match your profile.",
  },
  {
    title: "Simple scheme details",
    description:
      "Understand who can apply, what benefits are available, and which documents are needed.",
  },
  {
    title: "Save useful schemes",
    description:
      "Bookmark schemes you may want to apply for later from one clean dashboard.",
  },
];

const Home = () => {
  const navigate = useNavigate();

  const handleCheckEligibility = () => {
    navigate("/questionnaire");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50">
      <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col justify-center px-6 py-16 lg:flex-row lg:items-center lg:gap-16">
        <div className="max-w-2xl">
          <p className="mb-4 inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Find what you're eligible for
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Eligify helps you find government schemes you can actually apply for.
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Eligify is a simple web platform that guides users through eligibility
            checking, scheme matching, and easy-to-understand scheme details without
            confusing government portals.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={handleCheckEligibility}
              className="rounded-xl bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-md transition hover:bg-blue-700"
            >
              Check Eligibility
            </button>

            <a
              href="#how-it-works"
              className="rounded-xl border border-slate-300 px-6 py-3 text-base font-semibold text-slate-700 transition hover:bg-white hover:shadow-sm"
            >
              How it works
            </a>
          </div>
        </div>

        <div className="mt-12 grid w-full max-w-xl gap-4 sm:grid-cols-2 lg:mt-0">
          <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200">
            <p className="text-sm font-semibold text-blue-600">Step 1</p>
            <h3 className="mt-2 text-lg font-bold text-slate-900">Answer simple questions</h3>
            <p className="mt-2 text-sm text-slate-600">
              Enter your state, income range, occupation, and a few basic details.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200">
            <p className="text-sm font-semibold text-blue-600">Step 2</p>
            <h3 className="mt-2 text-lg font-bold text-slate-900">Get matching schemes</h3>
            <p className="mt-2 text-sm text-slate-600">
              View only the schemes that fit your profile and eligibility rules.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200">
            <p className="text-sm font-semibold text-blue-600">Step 3</p>
            <h3 className="mt-2 text-lg font-bold text-slate-900">Read clear details</h3>
            <p className="mt-2 text-sm text-slate-600">
              Learn who can apply, what benefits are available, and required documents.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200">
            <p className="text-sm font-semibold text-blue-600">Step 4</p>
            <h3 className="mt-2 text-lg font-bold text-slate-900">Save for later</h3>
            <p className="mt-2 text-sm text-slate-600">
              Keep useful schemes in your saved list for future reference.
            </p>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-bold text-slate-900">Why Eligify?</h2>
          <p className="mt-3 text-slate-600">
            The idea is to make scheme discovery simple, fast, and user-friendly for
            people who do not know where to start.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;