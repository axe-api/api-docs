interface IconSize {
  width: number;
  height: number;
}

export const SearchIcon = ({ width, height }: IconSize) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 4C6.68629 4 4 6.68629 4 10C4 13.3137 6.68629 16 10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4ZM2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.2071 14.7929L21.7071 20.2929L20.2929 21.7071L14.7929 16.2071L16.2071 14.7929Z"
        fill="white"
      />
    </svg>
  );
};

export const ArrowUp = ({ width, height }: IconSize) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7071 16L19.2929 17.4142L12 10.1213L4.70712 17.4142L3.29291 16L12 7.29289L20.7071 16Z"
        fill="white"
      />
    </svg>
  );
};

export const ArrowDown = ({ width, height }: IconSize) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.29289 8.70711L4.70711 7.29289L12 14.5858L19.2929 7.29289L20.7071 8.70711L12 17.4142L3.29289 8.70711Z"
        fill="white"
      />
    </svg>
  );
};

export const CopyIcon = ({ width, height }: IconSize) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.35 21C4.99 21 4.675 20.865 4.405 20.595C4.135 20.325 4 20.01 4 19.65V6.0825H5.35V19.65H16.015V21H5.35ZM8.05 18.3C7.69 18.3 7.375 18.165 7.105 17.895C6.835 17.625 6.7 17.31 6.7 16.95V4.35C6.7 3.99 6.835 3.675 7.105 3.405C7.375 3.135 7.69 3 8.05 3H17.95C18.31 3 18.625 3.135 18.895 3.405C19.165 3.675 19.3 3.99 19.3 4.35V16.95C19.3 17.31 19.165 17.625 18.895 17.895C18.625 18.165 18.31 18.3 17.95 18.3H8.05ZM8.05 16.95H17.95V4.35H8.05V16.95Z"
        fill="white"
      />
    </svg>
  );
};
