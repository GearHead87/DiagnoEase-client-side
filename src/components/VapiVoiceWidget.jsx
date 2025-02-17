import { useEffect } from 'react';

const VapiVoiceWidget = () => {
    useEffect(() => {
        // Configuration for the Vapi widget
        const ASSISTANT_ID = import.meta.env.VITE_VAPI_ASSISTANT_ID;
        const API_KEY = import.meta.env.VITE_VAPI_API_KEY; // Replace with your actual public API key
        
        // Button configuration
        const buttonConfig = {
            position: "bottom-left",
            offset: "40px",
            width: "50px",
            height: "50px",
            idle: {
                color: "rgb(93, 254, 202)",
                type: "pill",
                title: "Have a quick question?",
                subtitle: "Talk with our AI assistant",
                icon: "https://unpkg.com/lucide-static@0.321.0/icons/phone.svg",
            },
            loading: {
                color: "rgb(93, 124, 202)",
                type: "pill",
                title: "Connecting...",
                subtitle: "Please wait",
                icon: "https://unpkg.com/lucide-static@0.321.0/icons/loader-2.svg",
            },
            active: {
                color: "rgb(255, 0, 0)",
                type: "pill",
                title: "Call is in progress...",
                subtitle: "End the call.",
                icon: "https://unpkg.com/lucide-static@0.321.0/icons/phone-off.svg",
            },
        };

        // Create and load the Vapi script
        const script = document.createElement('script');
        script.src = "https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js";
        script.defer = true;
        script.async = true;

        // Initialize Vapi when script loads
        script.onload = () => {
            const vapiInstance = window.vapiSDK.run({
                apiKey: API_KEY,
                assistant: ASSISTANT_ID,
                config: buttonConfig,
            });

            // Event listeners
            vapiInstance.on('speech-start', () => console.log('Speech has started'));
            vapiInstance.on('speech-end', () => console.log('Speech has ended'));
            vapiInstance.on('call-start', () => console.log('Call has started'));
            vapiInstance.on('call-end', () => console.log('Call has stopped'));
            vapiInstance.on('volume-level', (volume) => console.log(`Assistant volume level: ${volume}`));
            vapiInstance.on('message', (message) => console.log(message));
            vapiInstance.on('error', (e) => console.error(e));
        };

        document.body.appendChild(script);

        // Cleanup function
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div id="VAPI_OVERLAY_CONTAINER" style={{ width: 0, height: 0 }}>
            {/* Vapi widget will render here */}
        </div>
    );
};

export default VapiVoiceWidget;
