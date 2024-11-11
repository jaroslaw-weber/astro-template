import React from "react";
import Layout from "../layouts/Layout.astro";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCog, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const ComponentShowcase: React.FC = () => {
  return (
    <>
      <h1 className="text-4xl font-bold mb-12 text-center">
        Component Showcase
      </h1>

      {/* FontAwesome Icons */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">FontAwesome Icons</h2>
        <div className="flex flex-wrap gap-4">
          <FontAwesomeIcon icon={faHome} size="2x" />
          <FontAwesomeIcon icon={faUser} size="2x" />
          <FontAwesomeIcon icon={faCog} size="2x" />
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </div>
      </section>
      {/* Buttons */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Buttons</h2>
        <div className="flex flex-wrap gap-2">
          <button className="btn">Default</button>
          <button className="btn btn-primary">Primary</button>
          <button className="btn btn-secondary">Secondary</button>
          <button className="btn btn-accent">Accent</button>
          <button className="btn btn-ghost">Ghost</button>
          <button className="btn btn-link">Link</button>
        </div>
      </section>

      {/* Alert */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Alerts</h2>
        <div className="flex flex-col gap-4">
          <div className="alert alert-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-current shrink-0 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>New software update available.</span>
          </div>
          <div className="alert alert-success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Your purchase has been confirmed!</span>
          </div>
        </div>
      </section>

      {/* Card */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Card</h2>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Tabs</h2>
        <div className="tabs">
          <a className="tab tab-lifted">Tab 1</a>
          <a className="tab tab-lifted tab-active">Tab 2</a>
          <a className="tab tab-lifted">Tab 3</a>
        </div>
      </section>

      {/* Toggle */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Toggle</h2>
        <div className="flex gap-4">
          <input type="checkbox" className="toggle" defaultChecked />
          <input
            type="checkbox"
            className="toggle toggle-primary"
            defaultChecked
          />
          <input
            type="checkbox"
            className="toggle toggle-secondary"
            defaultChecked
          />
          <input
            type="checkbox"
            className="toggle toggle-accent"
            defaultChecked
          />
        </div>
      </section>

      {/* Progress */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Progress</h2>
        <div className="flex flex-col gap-4">
          <progress className="progress w-56" value="0" max="100"></progress>
          <progress className="progress w-56" value="70" max="100"></progress>
          <progress className="progress w-56" value="100" max="100"></progress>
        </div>
      </section>

      {/* Dropdown */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Dropdown</h2>
        <div className="dropdown">
          <label tabIndex={0} className="btn m-1">
            Click
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default ComponentShowcase;

