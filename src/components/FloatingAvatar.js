import React, { useState } from "react";

export default function FloatingAvatar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Avatar flottant */}
      <div className="fixed bottom-6 right-6 z-50 cursor-pointer">
        <div
          className="relative w-20 h-20 group"
          onClick={() => setIsOpen(true)}
        >
          {/* Halo lumineux animé */}
          <div className="absolute inset-0 rounded-full bg-blue-400 opacity-50 animate-pulse animate-bounce-slow transition-all"></div>

          {/* Avatar */}
          <img
            src={`${process.env.PUBLIC_URL}/me.jpeg`}
            alt="Salima"
            className="w-full h-full rounded-full border-2 border-white shadow-xl relative z-10 object-cover"
          />

          {/* Badge Messenger */}
          <div className="absolute -top-3 -right-3 bg-blue-600 text-white text-xs px-2 py-1 rounded-full shadow-md">
            Me
          </div>
        </div>
      </div>

      {/* Modal pour afficher l'image en grand */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <img
            src={`${process.env.PUBLIC_URL}/me.jpeg`}
            alt="Salima"
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
          />
        </div>
      )}

      {/* Animation CSS personnalisée */}
      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
      `}</style>
    </>
  );
}
