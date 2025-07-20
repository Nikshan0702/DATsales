'use client';
import Link from 'next/link';
import { CheckIcon } from '@heroicons/react/20/solid';

const tiers = [
  {
    name: 'Starter',
    id: 'tier-starter',
    href: '#',
    priceMonthly: '$29',
    description: "Perfect for small fashion boutiques getting started online.",
    features: [
      'Up to 50 products',
      'Basic analytics dashboard',
      'Email support',
      'Mobile-friendly storefront'
    ],
    featured: false,
  },
  {
    name: 'Premium', 
    id: 'tier-premium',
    href: '#',
    priceMonthly: '$99',
    description: 'For established brands needing advanced features.',
    features: [
      'Unlimited products',
      'Advanced analytics',
      'Priority support',
      'Custom branding'
    ],
    featured: true,
  },
];

// Plain JavaScript version (no TypeScript)
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Support() {
  return (
    <div className="bg-white px-6 py-16 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base font-semibold text-pink-600">Pricing</h2>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Grow your fashion business
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Simple pricing for businesses of all sizes. Start selling your fashion line today.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-y-8 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        {tiers.map((plan, planIdx) => (
          <div
            key={plan.id}
            className={classNames(
              plan.featured ? 'bg-pink-50 shadow-lg ring-2 ring-pink-600' : 'bg-white ring-1 ring-gray-200',
              'rounded-2xl p-8 sm:p-10'
            )}
          >
            <h3 className="text-lg font-semibold text-pink-600">{plan.name}</h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className="text-5xl font-bold text-gray-900">
                {plan.priceMonthly}
              </span>
              <span className="text-gray-500">/month</span>
            </p>
            <p className="mt-4 text-gray-600">{plan.description}</p>
            
            <ul role="list" className="mt-8 space-y-4">
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    className="h-5 w-5 flex-none text-pink-600"
                    aria-hidden="true"
                  />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href={plan.href}
              className={classNames(
                plan.featured 
                  ? 'bg-pink-600 text-white hover:bg-pink-700' 
                  : 'bg-white text-pink-600 ring-1 ring-pink-600 hover:bg-pink-50',
                'mt-8 block w-full rounded-md px-4 py-3 text-center font-medium sm:mt-10'
              )}
            >
              Get started
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}