const isServerRender = () => {
  return typeof window === 'undefined';
};

export default isServerRender;
