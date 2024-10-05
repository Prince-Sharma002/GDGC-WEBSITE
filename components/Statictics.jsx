import React from "react";
import CountUp from "react-countup";

export default function StatisticsSimple() {
  return (
    <>
      <div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 text-center divide-y sm:divide-y-0 sm:divide-x dark:divide-gray-700/75">
          <dl className="space-y-1 px-5 py-8">
            <dt className="text-4xl font-extrabold text-black dark:text-gray-100">
              <CountUp end={15} duration={3} suffix="+"/>
            </dt>
            <dd className="text-sm uppercase tracking-wide font-semibold text-teal-600 dark:text-teal-500">
              Help Sessions
            </dd>
          </dl>
          <dl className="space-y-1 px-5 py-8">
            <dt className="text-4xl font-extrabold text-black dark:text-gray-100">
              <CountUp end={80} duration={3} suffix="+"/>
            </dt>
            <dd className="text-sm uppercase tracking-wide font-semibold text-teal-600 dark:text-teal-500">
              Awesome Participants
            </dd>
          </dl>
          <dl className="space-y-1 px-5 py-8">
            <dt className="text-4xl font-extrabold text-black dark:text-gray-100">
              <CountUp end={500} duration={3} suffix="+"/>
            </dt>
            <dd className="text-sm uppercase tracking-wide font-semibold text-teal-600 dark:text-teal-500">
              Hours of productivity
            </dd>
          </dl>
        </div>
      </div>
    </>
  );
}
