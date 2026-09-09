import React from "react";

export default function BatikPattern() {
  return (
    <div className="batik-wrapper">
      <svg
        className="batik-svg"
        viewBox="0 0 600 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* MOTIF UTAMA */}
          <g id="motifUtama">
            <path
              d="M 0,-75 C 18,-58 30,-45 35,-25 C 58,-30 73,-18 78,0 C 73,18 58,30 35,25 C 30,45 18,58 0,75 C -18,58 -30,45 -35,25 C -58,30 -73,18 -78,0 C -73,-18 -58,-30 -35,-25 C -30,-45 -18,-58 0,-75 Z"
              fill="#e8a900"
              stroke="#6b3500"
              strokeWidth="3"
            />
            <path
              d="M 0,-58 C 12,-45 18,-30 20,-15 C 38,-20 52,-12 57,0 C 52,12 38,20 20,15 C 18,30 12,45 0,58 C -12,45 -18,30 -20,15 C -38,20 -52,12 -57,0 C -52,-12 -38,-20 -20,-15 C -18,-30 -12,-45 0,-58 Z"
              fill="#f3bd19"
              stroke="#8c4b00"
              strokeWidth="2"
            />
            <path
              d="M 0,-45 C 8,-35 10,-25 8,-15 C 20,-20 29,-15 34,-7 C 24,-4 17,0 14,8 C 25,7 34,12 38,20 C 25,22 14,18 7,11 C 8,25 5,34 0,42 C -5,34 -8,25 -7,11 C -14,18 -25,22 -38,20 C -34,12 -25,7 -14,8 C -17,0 -24,-4 -34,-7 C -29,-15 -20,-20 -8,-15 C -10,-25 -8,-35 0,-45 Z"
              fill="#251400"
            />
            <circle cx="0" cy="0" r="9" fill="#f6c21b" stroke="#2c1700" strokeWidth="3" />
            <circle cx="0" cy="-25" r="3" fill="#2c1700" />
            <circle cx="25" cy="0" r="3" fill="#2c1700" />
            <circle cx="0" cy="25" r="3" fill="#2c1700" />
            <circle cx="-25" cy="0" r="3" fill="#2c1700" />
          </g>

          {/* MOTIF BUNGA KECIL */}
          <g id="motifKecil">
            <path
              d="M 0,-48 C 10,-35 20,-25 32,-25 C 25,-12 25,-5 45,0 C 25,5 25,12 32,25 C 20,25 10,35 0,48 C -10,35 -20,25 -32,25 C -25,12 -25,5 -45,0 C -25,-5 -25,-12 -32,-25 C -20,-25 -10,-35 0,-48 Z"
              fill="#6f3600"
              stroke="#a45a00"
              strokeWidth="3"
            />
            <path
              d="M 0,-30 C 8,-20 10,-12 8,-5 C 18,-10 27,-5 31,0 C 22,5 18,10 8,5 C 10,15 7,24 0,31 C -7,24 -10,15 -8,5 C -18,10 -22,5 -31,0 C -27,-5 -18,-10 -8,-5 C -10,-12 -8,-20 0,-30 Z"
              fill="#321900"
            />
            <circle cx="0" cy="0" r="7" fill="#d28a00" />
          </g>

          // ... kode bagian atas tetap sama ...

          {/* POLA TILE */}
          <pattern
            id="batikPattern"
            width="150"              
            height="150"            
            patternUnits="userSpaceOnUse"
          >
            <rect width="150" height="150" fill="#241300" />
            
            {/* Garis diagonal disesuaikan ke ukuran 150 */}
            <path
              d="M0 75 L75 0 L150 75 L75 150 Z"
              fill="none"
              stroke="#713900"
              strokeWidth="0.8"
            />
            <path
              d="M0 0 L150 150 M150 0 L0 150"
              stroke="#4f2800"
              strokeWidth="0.4"
              opacity="0.5"
            />

            {/* Skala motif utama dikecilkan (.36) */}
            <g transform="translate(0 0) scale(.36)">
              <use href="#motifUtama" />
            </g>
            <g transform="translate(150 0) scale(.36)">
              <use href="#motifUtama" />
            </g>
            <g transform="translate(0 150) scale(.36)">
              <use href="#motifUtama" />
            </g>
            <g transform="translate(150 150) scale(.36)">
              <use href="#motifUtama" />
            </g>

            {/* Skala motif kecil dikecilkan (.42) */}
            <g transform="translate(75 75) scale(.42)">
              <use href="#motifKecil" />
            </g>
          </pattern>
        </defs>

        <rect
          id="animatedRect"
          x="-150"
          y="-150"
          width="1200"
          height="1400"
          fill="url(#batikPattern)"
        />
      </svg>
    </div>
  );
}