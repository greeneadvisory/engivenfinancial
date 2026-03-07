import nextConfig from "@/next.config";
import React, { useState, useEffect } from 'react';

type LoaderProps = {
  active?: boolean;
  transparentBackground?: boolean;
};

const Loader = ({ active = false, transparentBackground = false }: LoaderProps) => {
  let {basePath} = nextConfig;
  const [loading, setLoading] = useState(!active);

  useEffect(() => {
    if (active) {
      return;
    }

    const handleLoadingState = () => {
      setLoading(false);
    };
    handleLoadingState();
  }, [active]);

  return active || loading ? (
    <div id="loader" className="loader" style={transparentBackground ? { background: 'transparent' } : undefined}>
      <img src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/media/loader.svg`} alt="Loading..." />
    </div>
  ) : null;
};

export default Loader;
