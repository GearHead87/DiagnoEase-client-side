import { useEffect } from 'react';

const VGChatWidget = () => {
  useEffect(() => {
    window.VG_CONFIG = {
      ID: import.meta.env.VITE_CHAT_AGENT_ID,
      region: import.meta.env.VITE_CHAT_REGION,
      render: 'bottom-right',
      stylesheets: [
        "https://vg-bunny-cdn.b-cdn.net/vg_live_build/styles.css",
      ],
    };

    const script = document.createElement("script");
    script.src = "https://vg-bunny-cdn.b-cdn.net/vg_live_build/vg_bundle.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div 
      id="VG_OVERLAY_CONTAINER" 
      style={{ width: 0, height: 0 }}
    >
      {/* Here is where TIXAE Agents renders the widget */}
    </div>
  );
};

export default VGChatWidget; 