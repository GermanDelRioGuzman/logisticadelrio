import React from "react"; 

const WhatsAppButton = () => {
    const phoneNumber = "523335461666"
    const message = "¡Hola! me gustaria mas informacion";

    const handleWhatsAppClick = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
        window.open(url, "_blank");
    };

    return (
        <button 
            onClick={handleWhatsAppClick}
            style = {{
                backgroundColor : "lightblue",
                color: "white",
                width: "20vw", 
                height: "10vw",
                maxWidth: "200px",
                maxHeight: "100px",
                minWidth: "80px",
                minHeight: "40px",
                fontSize: "calc(0.4rem + 0.5vw)",
                border:"none",
                borderRadius: "10%",
                cursor: "pointer",


            }}
            >
                Enviar mensaje por WhatsApp
            </button>
        );
};

export default WhatsAppButton; 