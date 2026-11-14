// 背景シーン: 海図の方眼、ゆっくり回る羅針盤、水平線を進む艦影、寄せる波。
// 夜(ダーク)は月下の海、昼(ライト)は霞む昼の海。すべてオリジナル図形。
export const SCENE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
<defs>
  <linearGradient id="skyN" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#050b18"/><stop offset=".55" stop-color="#0c1d3a"/><stop offset="1" stop-color="#132a4f"/>
  </linearGradient>
  <linearGradient id="seaN" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#0d2142"/><stop offset="1" stop-color="#040a16"/>
  </linearGradient>
  <linearGradient id="skyD" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#b9cadb"/><stop offset=".6" stop-color="#dfe3dc"/><stop offset="1" stop-color="#ece5cf"/>
  </linearGradient>
  <linearGradient id="seaD" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#6f8fb0"/><stop offset="1" stop-color="#2c4a72"/>
  </linearGradient>
  <radialGradient id="moonGlow"><stop offset="0" stop-color="#f3e3b0" stop-opacity=".55"/><stop offset="1" stop-color="#f3e3b0" stop-opacity="0"/></radialGradient>
  <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
    <path d="M80 0H0V80" fill="none" class="gridline" stroke-width="1"/>
  </pattern>
  <path id="wave" d="M0 0 Q 50 -14 100 0 T 200 0 T 300 0 T 400 0 T 500 0 T 600 0 T 700 0 T 800 0 T 900 0 T 1000 0 T 1100 0 T 1200 0 T 1300 0 T 1400 0 T 1500 0 T 1600 0 T 1700 0 T 1800 0 T 1900 0 T 2000 0 T 2100 0 T 2200 0 T 2300 0 T 2400 0 T 2500 0 T 2600 0 T 2700 0 T 2800 0 T 2900 0 T 3000 0 T 3100 0 T 3200 0 V 400 H 0 Z"/>
  <g id="ship">
    <path d="M0 0 L8 10 L132 10 L144 0 Z"/>
    <path d="M22 0 V-8 H46 V0 Z M54 0 V-14 H76 V0 Z M84 0 V-8 H104 V0 Z"/>
    <path d="M62 -14 V-34 H66 V-14 Z M58 -28 H72 V-26 H58 Z"/>
    <path d="M88 -8 V-20 H96 V-8 Z"/>
  </g>
</defs>
<style>
  .night{opacity:1} .day{opacity:0}
  .gridline{stroke:#d4a843;stroke-opacity:.07}
  .ink{fill:#d4a843} .inkS{stroke:#d4a843}
  .ship{fill:#020611}
  .w1{fill:#0b1b36} .w2{fill:#08152b} .w3{fill:#050e1f}
  .crest{fill:none;stroke:#d4a843;stroke-opacity:.18;stroke-width:1.5}
  @media (prefers-color-scheme: light){
    .night{opacity:0} .day{opacity:1}
    .gridline{stroke:#1f3a68;stroke-opacity:.09}
    .ink{fill:#1f3a68} .inkS{stroke:#1f3a68}
    .ship{fill:#2a3d58}
    .w1{fill:#5d7fa3} .w2{fill:#46688f} .w3{fill:#33547c}
    .crest{stroke:#f4ecd8;stroke-opacity:.45}
  }
  @keyframes drift{from{transform:translateX(0)}to{transform:translateX(-400px)}}
  @keyframes drift2{from{transform:translateX(-400px)}to{transform:translateX(0)}}
  @keyframes spin{to{transform:rotate(360deg)}}
  @keyframes sail{from{transform:translateX(1700px)}to{transform:translateX(-400px)}}
  @keyframes twinkle{0%,100%{opacity:.25}50%{opacity:.9}}
  .a1{animation:drift 26s linear infinite}
  .a2{animation:drift2 34s linear infinite}
  .a3{animation:drift 44s linear infinite}
  .rose{transform-origin:0 0;animation:spin 240s linear infinite}
  .fleet{animation:sail 180s linear infinite;animation-delay:-70s}
  .st{animation:twinkle 5s ease-in-out infinite}
  .st:nth-child(2n){animation-duration:7s;animation-delay:-2s}
  .st:nth-child(3n){animation-duration:9s;animation-delay:-4s}
  @media (prefers-reduced-motion: reduce){ .a1,.a2,.a3,.rose,.fleet,.st{animation:none} }
</style>
<rect class="night" width="1600" height="1000" fill="url(#skyN)"/>
<rect class="day" width="1600" height="1000" fill="url(#skyD)"/>
<rect width="1600" height="1000" fill="url(#grid)"/>
<g class="night">
  <circle cx="520" cy="150" r="140" fill="url(#moonGlow)"/>
  <circle cx="520" cy="150" r="34" fill="#f3e6bf"/>
  <circle cx="536" cy="140" r="30" fill="#0a1830"/>
  <g fill="#f3e6bf">
    <circle class="st" cx="420" cy="90" r="1.6"/><circle class="st" cx="610" cy="160" r="1.2"/>
    <circle class="st" cx="760" cy="70" r="1.8"/><circle class="st" cx="930" cy="140" r="1.3"/>
    <circle class="st" cx="1080" cy="60" r="1.5"/><circle class="st" cx="120" cy="320" r="1.2"/>
    <circle class="st" cx="520" cy="300" r="1.4"/><circle class="st" cx="1010" cy="280" r="1.1"/>
    <circle class="st" cx="350" cy="230" r="1"/><circle class="st" cx="860" cy="230" r="1.6"/>
  </g>
</g>
<rect class="night" y="620" width="1600" height="380" fill="url(#seaN)"/>
<rect class="day" y="620" width="1600" height="380" fill="url(#seaD)"/>
<line x1="0" y1="620" x2="1600" y2="620" class="inkS" stroke-opacity=".35" stroke-width="1"/>
<g class="fleet">
  <use href="#ship" class="ship" x="0" y="612" transform="scale(1)"/>
  <use href="#ship" class="ship" x="190" y="614" opacity=".85"/>
  <use href="#ship" class="ship" x="360" y="616" opacity=".7"/>
</g>
<g transform="translate(0 700)"><g class="a3"><use href="#wave" class="w1"/><use href="#wave" class="crest"/></g></g>
<g transform="translate(0 790)"><g class="a2"><use href="#wave" class="w2"/><use href="#wave" class="crest"/></g></g>
<g transform="translate(0 880)"><g class="a1"><use href="#wave" class="w3"/><use href="#wave" class="crest"/></g></g>
<svg x="0" y="0" width="1600" height="1000" viewBox="0 0 400 400" preserveAspectRatio="xMaxYMin meet">
  <g transform="translate(300 100)" opacity=".55">
    <circle r="78" fill="none" class="inkS" stroke-width="1.2"/>
    <circle r="70" fill="none" class="inkS" stroke-width=".6" stroke-dasharray="2 4"/>
    <g class="rose">
      <path class="ink" d="M0 -66 L8 -8 L0 0 L-8 -8 Z M0 66 L8 8 L0 0 L-8 8 Z M66 0 L8 8 L0 0 L8 -8 Z M-66 0 L-8 8 L0 0 L-8 -8 Z" opacity=".9"/>
      <path class="ink" d="M40 -40 L6 -2 L0 0 L2 -6 Z M-40 40 L-6 2 L0 0 L-2 6 Z M40 40 L2 6 L0 0 L6 2 Z M-40 -40 L-2 -6 L0 0 L-6 -2 Z" opacity=".5"/>
      <circle r="4" class="ink"/>
    </g>
  </g>
</svg>
</svg>`
