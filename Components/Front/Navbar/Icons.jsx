import React from "react";
export const ChevronDown = ({ fill, size, height, width, ...props }) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const Lock = ({ fill, size, height, width, ...props }) => {
  const color = fill;

  return (
    <svg
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g transform="translate(3.5 2)">
        <path
          d="M9.121,6.653V4.5A4.561,4.561,0,0,0,0,4.484V6.653"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth={1.5}
          transform="translate(3.85 0.75)"
        />
        <path
          d="M.5,0V2.221"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth={1.5}
          transform="translate(7.91 12.156)"
        />
        <path
          d="M7.66,0C1.915,0,0,1.568,0,6.271s1.915,6.272,7.66,6.272,7.661-1.568,7.661-6.272S13.4,0,7.66,0Z"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth={1.5}
          transform="translate(0.75 6.824)"
        />
      </g>
    </svg>
  );
};

export const Activity = ({ fill, size, height, width, ...props }) => {
  return (
    <svg
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      >
        <path d="M6.918 14.854l2.993-3.889 3.414 2.68 2.929-3.78" />
        <path d="M19.668 2.35a1.922 1.922 0 11-1.922 1.922 1.921 1.921 0 011.922-1.922z" />
        <path d="M20.756 9.269a20.809 20.809 0 01.194 3.034c0 6.938-2.312 9.25-9.25 9.25s-9.25-2.312-9.25-9.25 2.313-9.25 9.25-9.25a20.931 20.931 0 012.983.187" />
      </g>
    </svg>
  );
};

export const Flash = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 21L17 21"
        stroke={fill}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M21 21L22 21"
        stroke={fill}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M2 16.4V3.6C2 3.26863 2.26863 3 2.6 3H21.4C21.7314 3 22 3.26863 22 3.6V16.4C22 16.7314 21.7314 17 21.4 17H2.6C2.26863 17 2 16.7314 2 16.4Z"
        stroke={fill}
        stroke-width="1.5"
      ></path>
    </svg>
  );
};

export const Server = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 21L17 21"
        stroke={fill}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M21 21L22 21"
        stroke={fill}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M2 16.4V3.6C2 3.26863 2.26863 3 2.6 3H21.4C21.7314 3 22 3.26863 22 3.6V16.4C22 16.7314 21.7314 17 21.4 17H2.6C2.26863 17 2 16.7314 2 16.4Z"
        stroke={fill}
        stroke-width="1.5"
      ></path>
    </svg>
  );
};

export const TagUser = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 18.86h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69c-.56-.56-1.33-.87-2.12-.87H6c-1.66 0-3-1.33-3-2.97V4.98c0-1.64 1.34-2.97 3-2.97h12c1.66 0 3 1.33 3 2.97v10.91c0 1.63-1.34 2.97-3 2.97Z"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
      <path
        d="M12 10a2.33 2.33 0 1 0 0-4.66A2.33 2.33 0 0 0 12 10ZM16 15.66c0-1.8-1.79-3.26-4-3.26s-4 1.46-4 3.26"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const Scale = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-square-letter-w"
      height={size || height}
      width={size || width}
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke={fill}
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      {/* <path stroke="none" d="M0 0h24v24H0z" fill="none" /> */}
      <path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
      <path d="M9 8l1 8l2 -5l2 5l1 -8" />
    </svg>
  );
};
export const Shopify = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      height={size || height}
      width={size || width}
      viewBox="0 0 50 50"
    >
      <path
        fill="#7cb342"
        d="M37.216,11.78c-0.023-0.211-0.211-0.305-0.351-0.305s-3.21-0.234-3.21-0.234s-2.132-2.132-2.39-2.343	c-0.234-0.234-0.68-0.164-0.867-0.117c-0.023,0-0.469,0.141-1.195,0.375c-0.726-2.086-1.968-3.984-4.194-3.984h-0.211	C24.187,4.375,23.391,4,22.735,4c-5.155,0-7.639,6.444-8.412,9.725c-2.015,0.633-3.445,1.054-3.609,1.125	c-1.125,0.351-1.148,0.375-1.289,1.429c-0.117,0.797-3.046,23.456-3.046,23.456L29.179,44l12.373-2.671	C41.575,41.282,37.24,11.991,37.216,11.78z M27.937,9.483c-0.562,0.164-1.242,0.375-1.921,0.609V9.671	c0-1.265-0.164-2.296-0.469-3.117C26.718,6.695,27.445,7.984,27.937,9.483L27.937,9.483z M24.117,6.812	c0.305,0.797,0.516,1.922,0.516,3.468v0.234c-1.265,0.398-2.601,0.797-3.984,1.242C21.422,8.804,22.899,7.351,24.117,6.812	L24.117,6.812z M22.617,5.359c0.234,0,0.469,0.094,0.656,0.234c-1.664,0.773-3.421,2.718-4.148,6.655	c-1.101,0.351-2.156,0.656-3.163,0.984C16.806,10.233,18.915,5.359,22.617,5.359z"
      ></path>
      <path
        fill="#558b2f"
        d="M36.865,11.428c-0.141,0-3.21-0.234-3.21-0.234s-2.132-2.132-2.39-2.343	C31.17,8.757,31.053,8.71,30.96,8.71L29.249,44l12.373-2.671c0,0-4.335-29.338-4.359-29.549	C37.169,11.569,37.005,11.475,36.865,11.428z"
      ></path>
      <path
        fill="#fff"
        d="M24.792,18.593l-1.475,4.449c0,0-1.337-0.715-2.927-0.715c-2.374,0-2.489,1.498-2.489,1.867	c0,2.028,5.301,2.812,5.301,7.583c0,3.757-2.374,6.177-5.578,6.177c-3.872,0-5.808-2.397-5.808-2.397l1.037-3.411	c0,0,2.028,1.752,3.734,1.752c1.129,0,1.59-0.876,1.59-1.521c0-2.651-4.333-2.766-4.333-7.145c0-3.665,2.628-7.214,7.952-7.214	C23.777,17.994,24.792,18.593,24.792,18.593z"
      ></path>
    </svg>
  );
};
export const Magento = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      height={size || height}
      width={size || width}
      viewBox="0 0 50 50"
    >
      <polygon
        fill="#f4511e"
        points="26,35.164 24.004,36.293 22,35.159 22,17.476 17,20.311 17,38.07 24,42.039 31,38.075 31,20.264 26,17.428"
      ></polygon>
      <polygon
        fill="#f4511e"
        points="24,5.995 8,14.979 8,32.981 13,35.808 13,17.964 24.004,11.742 35,17.959 35,35.813 40,32.986 40,15.042"
      ></polygon>
    </svg>
  );
};
export const Joomla = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      height={size || height}
      width={size || width}
      viewBox="0 0 50 50"
    >
      <path
        fill="#1565C0"
        d="M31.355,28.43l-3.551-3.557l-3.467,3.474l-3.552,3.557l-0.695,0.698c-1.15,1.151-3.024,1.154-4.182-0.006c-1.148-1.15-1.153-3.01-0.014-4.166l-3.555-3.557l0-0.001c-2.053,2.067-2.745,4.979-2.075,7.611c-2.123,0.501-3.704,2.411-3.704,4.692c0,2.662,2.156,4.822,4.816,4.822c2.289-0.003,4.204-1.597,4.695-3.74c2.625,0.653,5.519-0.046,7.571-2.1l0.696-0.698l3.552-3.56L31.355,28.43L31.355,28.43z"
      ></path>
      <path
        fill="#FF9800"
        d="M42.52,10.822C42.521,8.159,40.365,6,37.704,6c-2.435,0-4.447,1.809-4.772,4.157c-2.709-0.795-5.758-0.122-7.896,2.018l-0.694,0.692l-3.555,3.56l-3.476,3.475l0.001,0.001l3.554,3.557l3.474-3.475l3.553-3.556l0.694-0.695c1.159-1.157,3.024-1.157,4.173-0.005c1.15,1.148,1.152,3.014,0.008,4.169l0.003,0.003l3.552,3.556c2.115-2.128,2.792-5.152,2.016-7.852C40.698,15.294,42.52,13.272,42.52,10.822z"
      ></path>
      <path
        fill="#F44336"
        d="M38.424,32.405c0.637-2.617-0.068-5.497-2.111-7.541l-0.697-0.7l-3.553-3.557l-3.462-3.473L28.6,17.136l-3.553,3.556l-0.001,0.001l3.464,3.472l3.553,3.559l0.695,0.695c1.158,1.161,1.156,3.028,0.006,4.181c-1.148,1.149-3.009,1.151-4.163,0.008l-3.552,3.56l-0.001,0.001c2.163,2.155,5.251,2.813,7.979,1.975C33.471,40.345,35.417,42,37.746,42c2.658,0,4.816-2.157,4.816-4.821C42.564,34.747,40.765,32.734,38.424,32.405z"
      ></path>
      <path
        fill="#4CAF50"
        d="M20.078,31.197L20.078,31.197l3.552-3.557l0.001-0.001l-3.473-3.474l-3.554-3.557l-0.696-0.695c-1.15-1.151-1.152-3.029,0.005-4.186c1.151-1.15,3.013-1.153,4.167-0.011l3.554-3.558c-2.025-2.021-4.864-2.729-7.458-2.119C15.804,7.749,13.817,6.002,11.423,6c-2.66,0-4.815,2.159-4.815,4.822c0,2.298,1.603,4.218,3.75,4.705c-0.814,2.723-0.15,5.794,1.998,7.944l0.693,0.694l3.555,3.557L20.078,31.197z"
      ></path>
    </svg>
  );
};
export const Drupal = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      height={size || height}
      width={size || width}
      viewBox="0 0 16 16"
    >
      <path
        fill="#03A9F4"
        d="M7.585 9.907c-1.377 0-2.493 1.131-2.493 2.525s1.116 2.525 2.493 2.525 2.493-1.131 2.493-2.525-1.116-2.525-2.493-2.525zM10.689 9.423a4.365 4.365 0 0 1 1.192 3.008c0 1.48-.728 2.783-1.84 3.569 2.058-.642 3.761-2.208 4.522-4.105 1.055-2.625.071-4.599-1.575-6.39a3.328 3.328 0 0 1-2.299 3.918zM7.869 6.228c0 1.068.856 1.931 1.906 1.931s1.911-.867 1.911-1.931c0-1.068-.856-1.931-1.906-1.931s-1.911.862-1.911 1.931z"
      ></path>
      <path
        fill="#03A9F4"
        d="M4.298 15.234a4.369 4.369 0 0 1-1.008-2.802c0-2.228 1.651-4.062 3.784-4.316a3.364 3.364 0 0 1-.581-1.888c0-1.84 1.471-3.325 3.288-3.325.151 0 .298.01.44.029C9.147 1.993 8.073 1.04 7.226 0c.43 4.56-4.101 2.903-5.781 7.109-1.121 2.817-.109 6.299 2.853 8.125z"
      ></path>
    </svg>
  );
};
export const Moodle = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      height={size || height}
      width={size || width}
      viewBox="0 0 50 50"
    >
      <path
        fill="#ffab40"
        d="M33.5,16c-2.5,0-4.8,1-6.5,2.6C25.3,17,23,16,20.5,16c-5.2,0-9.5,4.3-9.5,9.5V37h6V24.5 c0-1.9,1.6-3.5,3.5-3.5s3.5,1.6,3.5,3.5V37h6V24.5c0-1.9,1.6-3.5,3.5-3.5s3.5,1.6,3.5,3.5V37h6V25.5C43,20.3,38.7,16,33.5,16z"
      ></path>
      <path d="M5.5 16.2H6.5V32H5.5z"></path>
      <path
        fill="#424242"
        d="M22,13c1.1,0.4,2.6,2,3,3c-1.8,1.7-2.6,2.9-3,6c-0.1,1.1-0.9,1.7-2,1c-3.1-1.9-6-2-8-2 c-1-1-0.5-3.7,0-5l6,1L22,13z"
      ></path>
      <path fill="#616161" d="M18,17H4l11-7h14L18,17z"></path>
      <path
        fill="#424242"
        d="M7.5,30c0-2.2-0.7-4-1.5-4s-1.5,1.8-1.5,4s0.7,4,1.5,4S7.5,32.2,7.5,30z"
      ></path>
    </svg>
  );
};
export const PrestaShop = ({
  fill = "currentColor",
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      height={size || height}
      width={size || width}
      viewBox="0 0 50 50"
    >
      <defs>
        <clipPath id="a">
          <path d="M0 38h38V0H0v38Z"></path>
        </clipPath>
      </defs>
      <g clip-path="url(#a)" transform="matrix(1.25 0 0 -1.25 0 47.5)">
        <path
          fill="#269"
          d="M37 5a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v28a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V5Z"
        ></path>
        <path
          fill="#fff"
          d="M17 19h3.063c2.017 0 3.296 1.465 3.296 3.385 0 1.92-1.279 3.391-3.296 3.391H17V19Zm-5 8.504c0 1.504.896 2.496 2.496 2.496h5.664c4.703 0 8.192-2.944 8.192-7.52 0-4.67-3.618-7.48-8-7.48H17V9.521c0-1.599-1.024-2.496-2.4-2.496S12 7.922 12 9.521v17.983z"
        ></path>
      </g>
    </svg>
  );
};
