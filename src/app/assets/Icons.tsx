import { svgProps } from 'components/types';
import { SVGProps } from 'react';

export const LikesIcon = (props: svgProps): SVGProps<SVGSVGElement> => {
  return (
    <svg
      {...props}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.4">
        <path
          d="M10.42 2.30506C10.1646 2.04956 9.86141 1.84688 9.52768 1.7086C9.19395 1.57032 8.83624 1.49915 8.475 1.49915C8.11376 1.49915 7.75605 1.57032 7.42232 1.7086C7.08859 1.84688 6.78538 2.04956 6.53 2.30506L6 2.83506L5.47 2.30506C4.95415 1.78921 4.25452 1.49941 3.525 1.49941C2.79548 1.49941 2.09584 1.78921 1.58 2.30506C1.06415 2.8209 0.774353 3.52054 0.774353 4.25006C0.774353 4.97957 1.06415 5.67921 1.58 6.19506L2.11 6.72506L6 10.6151L9.89 6.72506L10.42 6.19506C10.6755 5.93968 10.8782 5.63647 11.0165 5.30274C11.1547 4.96901 11.2259 4.6113 11.2259 4.25006C11.2259 3.88881 11.1547 3.53111 11.0165 3.19738C10.8782 2.86365 10.6755 2.56044 10.42 2.30506V2.30506Z"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export const OpenSeaIconSVG = (props: svgProps): JSX.Element => {
  return (
    <svg
      {...props}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 6C12 9.31352 9.31352 12 6 12C2.68648 12 0 9.31352 0 6C0 2.68648 2.68648 0 6 0C9.31422 0 12 2.68648 12 6Z"
        fill="#2081E2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.91736 7.04188V6.65538C9.91736 6.61962 9.88285 6.59374 9.84893 6.6036L8.02365 7.13127C8.01378 7.13373 8.00514 7.13927 7.99836 7.14668C7.80288 7.36261 7.63673 7.50753 7.59272 7.54592L7.58967 7.54859C7.47624 7.64475 7.33569 7.69716 7.18774 7.69716H6.52691V7.02339H7.05213C7.06569 7.02339 7.07863 7.01846 7.0885 7.00983L7.1563 6.94757C7.18528 6.92106 7.2198 6.88901 7.26109 6.8477C7.2646 6.8442 7.26816 6.84065 7.27176 6.83707C7.29346 6.81544 7.31666 6.79233 7.33938 6.76696C7.36651 6.74045 7.39302 6.71086 7.41767 6.68189C7.45897 6.6375 7.49843 6.59127 7.53973 6.54257C7.56933 6.51052 7.59645 6.47415 7.62295 6.43778C7.65255 6.40326 7.68152 6.36443 7.70864 6.32744C7.71873 6.31261 7.72948 6.29761 7.74046 6.28229C7.75092 6.26768 7.7616 6.25278 7.77213 6.23744C7.79186 6.20785 7.81158 6.17641 7.82823 6.14682C7.88001 6.06669 7.92378 5.981 7.96077 5.89532C7.97774 5.85862 7.99131 5.81999 8.00451 5.78243C8.00616 5.77771 8.00781 5.77301 8.00946 5.76834C8.02426 5.72456 8.03658 5.68327 8.04584 5.6395C8.06802 5.53655 8.07296 5.43423 8.06309 5.33189C8.06063 5.29984 8.05816 5.2684 8.05077 5.23882V5.23389C8.0483 5.21293 8.04336 5.1895 8.03658 5.16793C8.0144 5.06807 7.97987 4.9682 7.93611 4.87019C7.92131 4.83382 7.90406 4.79684 7.88741 4.76294C7.84796 4.68958 7.80665 4.61622 7.7598 4.54533C7.7504 4.53036 7.74001 4.51519 7.72965 4.50004C7.72166 4.48838 7.71368 4.47673 7.70618 4.4652C7.67651 4.41944 7.64315 4.37533 7.61078 4.33252C7.60347 4.32285 7.5962 4.31324 7.58904 4.30369C7.56994 4.2786 7.54902 4.25352 7.52797 4.22827C7.51643 4.21443 7.50485 4.20053 7.4935 4.18656C7.46145 4.14773 7.43001 4.11075 7.39795 4.07438C7.28329 3.94492 7.16309 3.82781 7.05582 3.72794C7.03609 3.70822 7.01452 3.68849 6.99233 3.66939C6.90911 3.59356 6.83328 3.5276 6.76979 3.47644C6.75071 3.46177 6.7336 3.44731 6.71768 3.43385C6.70684 3.42469 6.69655 3.416 6.68657 3.40802C6.66733 3.39367 6.65063 3.38095 6.63661 3.37027C6.62772 3.3635 6.61991 3.35755 6.61321 3.35253C6.60828 3.34884 6.60274 3.34638 6.59719 3.34452L6.52691 3.3248V2.74288C6.52691 2.64795 6.48869 2.56289 6.42767 2.50062C6.36664 2.43837 6.28157 2.40015 6.18787 2.40015C6.00047 2.40015 5.84882 2.55364 5.84882 2.74288V3.13493L5.81369 3.12508L5.71813 3.09794L5.63122 3.07391C5.63096 3.07391 5.63071 3.0738 5.63041 3.07368C5.62998 3.0735 5.62947 3.07329 5.62876 3.07329H5.62691L4.9673 2.89452C4.93834 2.88651 4.91368 2.91795 4.92847 2.94446L5.03388 3.13925C5.03987 3.15422 5.04745 3.16919 5.05524 3.18457C5.06028 3.19453 5.06541 3.20466 5.07025 3.21507C5.08752 3.24959 5.10478 3.28596 5.12142 3.32233C5.13622 3.35438 5.15101 3.38582 5.16827 3.42034C5.17552 3.43657 5.18292 3.453 5.19042 3.46966C5.21798 3.53084 5.24695 3.59517 5.27552 3.66445C5.30018 3.72301 5.32484 3.78157 5.34642 3.8426C5.4056 3.99609 5.46169 4.16006 5.5104 4.32835C5.52252 4.36602 5.53221 4.40246 5.54203 4.4394C5.54619 4.45506 5.55037 4.47081 5.55478 4.48677L5.56156 4.51635C5.58128 4.59465 5.59855 4.67231 5.61088 4.7506C5.62074 4.80423 5.62998 4.85539 5.63491 4.90717C5.64232 4.96573 5.64971 5.0243 5.65218 5.08286C5.65711 5.13649 5.65957 5.19259 5.65957 5.24622C5.65957 5.38306 5.64725 5.51497 5.61827 5.6395C5.61645 5.64619 5.61464 5.65296 5.61281 5.6598C5.60469 5.6901 5.59628 5.72151 5.58622 5.75169C5.57711 5.78402 5.56531 5.81634 5.55306 5.84991C5.54872 5.86179 5.54433 5.87382 5.53998 5.88607C5.53917 5.88825 5.53836 5.89044 5.53754 5.89263C5.52848 5.91704 5.51925 5.94189 5.50793 5.96621C5.4469 6.11292 5.37108 6.25902 5.29279 6.39586C5.17813 6.59867 5.06286 6.77682 4.9821 6.89148C4.97716 6.8989 4.97234 6.90594 4.96769 6.91273C4.96191 6.92118 4.95641 6.92923 4.95128 6.93709C4.92601 6.97284 4.95189 7.02339 4.99566 7.02339H5.84882V7.69716H4.9858C4.75401 7.69716 4.53949 7.56585 4.43593 7.35564C4.3823 7.25024 4.36134 7.13434 4.37367 7.02092C4.37675 6.98702 4.35147 6.95497 4.31696 6.95497H2.57365C2.54406 6.95497 2.52002 6.97901 2.52002 7.0086V7.04434C2.52002 8.1564 3.41818 9.05762 4.52654 9.05762H7.65377C8.23997 9.05762 8.57283 8.52345 8.89999 7.99842C8.99119 7.85206 9.08195 7.70641 9.17763 7.57325C9.34961 7.33407 9.76325 7.14421 9.88407 7.09243C9.9038 7.0838 9.91736 7.06407 9.91736 7.04188ZM2.98606 6.1609L2.96017 6.20159C2.93736 6.23673 2.96263 6.28358 3.00578 6.28358H4.61098C4.62886 6.28358 4.6455 6.27495 4.65537 6.26015C4.67633 6.2281 4.69606 6.19481 4.71393 6.1609C4.85263 5.92789 4.97592 5.67577 5.02092 5.48961C5.12633 5.03714 4.90133 4.31036 4.64057 3.72599C4.62332 3.68715 4.56969 3.68346 4.54688 3.71921L2.98606 6.1609Z"
        fill="white"
      />
    </svg>
  );
};
export const moreHorizontal = (props: svgProps): SVGProps<SVGSVGElement> => (
  <svg
    {...props}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.4">
      <path
        d="M8.00004 8.66666C8.36823 8.66666 8.66671 8.36818 8.66671 7.99999C8.66671 7.63181 8.36823 7.33333 8.00004 7.33333C7.63185 7.33333 7.33337 7.63181 7.33337 7.99999C7.33337 8.36818 7.63185 8.66666 8.00004 8.66666Z"
        stroke={props.stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.6667 8.66666C13.0349 8.66666 13.3333 8.36818 13.3333 7.99999C13.3333 7.63181 13.0349 7.33333 12.6667 7.33333C12.2985 7.33333 12 7.63181 12 7.99999C12 8.36818 12.2985 8.66666 12.6667 8.66666Z"
        stroke={props.stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.33329 8.66666C3.70148 8.66666 3.99996 8.36818 3.99996 7.99999C3.99996 7.63181 3.70148 7.33333 3.33329 7.33333C2.9651 7.33333 2.66663 7.63181 2.66663 7.99999C2.66663 8.36818 2.9651 8.66666 3.33329 8.66666Z"
        stroke={props.stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

export const moreRound = (props: svgProps): SVGProps<SVGSVGElement> => (
  <svg
    {...props}
    width="42"
    height="42"
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="21"
      cy="21"
      r="20"
      fill="white"
      stroke="#CECFEA"
      strokeWidth="0.5"
    />
    <path
      d="M21 21.6668C21.3682 21.6668 21.6667 21.3684 21.6667 21.0002C21.6667 20.632 21.3682 20.3335 21 20.3335C20.6318 20.3335 20.3333 20.632 20.3333 21.0002C20.3333 21.3684 20.6318 21.6668 21 21.6668Z"
      stroke="#010504"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M25.6667 21.6668C26.0349 21.6668 26.3333 21.3684 26.3333 21.0002C26.3333 20.632 26.0349 20.3335 25.6667 20.3335C25.2985 20.3335 25 20.632 25 21.0002C25 21.3684 25.2985 21.6668 25.6667 21.6668Z"
      stroke="#010504"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.3333 21.6668C16.7015 21.6668 17 21.3684 17 21.0002C17 20.632 16.7015 20.3335 16.3333 20.3335C15.9651 20.3335 15.6667 20.632 15.6667 21.0002C15.6667 21.3684 15.9651 21.6668 16.3333 21.6668Z"
      stroke="#010504"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const heartIcon = (props: svgProps): SVGProps<SVGSVGElement> => (
  <svg
    {...props}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.3667 3.84166C16.941 3.41583 16.4357 3.07803 15.8795 2.84757C15.3232 2.6171 14.7271 2.49847 14.125 2.49847C13.5229 2.49847 12.9268 2.6171 12.3705 2.84757C11.8143 3.07803 11.309 3.41583 10.8833 3.84166L10 4.725L9.11666 3.84166C8.25692 2.98192 7.09086 2.49892 5.875 2.49892C4.65914 2.49892 3.49307 2.98192 2.63333 3.84166C1.77359 4.70141 1.29059 5.86747 1.29059 7.08333C1.29059 8.29919 1.77359 9.46525 2.63333 10.325L3.51666 11.2083L10 17.6917L16.4833 11.2083L17.3667 10.325C17.7925 9.89937 18.1303 9.39401 18.3608 8.83779C18.5912 8.28158 18.7099 7.6854 18.7099 7.08333C18.7099 6.48126 18.5912 5.88508 18.3608 5.32887C18.1303 4.77265 17.7925 4.26729 17.3667 3.84166V3.84166Z"
      stroke={props.stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const gridIcon = (text: string): SVGProps<SVGSVGElement> => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.75 2.5H2.5V6.25H8.75V2.5Z"
      stroke={text}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.5 2.5H11.25V10H17.5V2.5Z"
      stroke={text}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.5 12.5H11.25V17.5H17.5V12.5Z"
      stroke={text}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.75 8.75H2.5V17.5H8.75V8.75Z"
      stroke={text}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const listIcon = (text: string): SVGProps<SVGSVGElement> => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.66669 5H17.5"
      stroke={text}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.5 5H2.50833"
      stroke={text}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.66669 10H17.5"
      stroke={text}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.5 10H2.50833"
      stroke={text}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.66669 15H17.5"
      stroke={text}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.5 15H2.50833"
      stroke={text}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ethereum = (props: svgProps): SVGProps<SVGSVGElement> => (
  <svg
    {...props}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="10" cy="10" r="10" fill="#627EEA" />
    <g opacity="0.6">
      <path
        opacity="0.6"
        d="M9.92647 8.26309L5.83331 10.1246L9.92647 12.5429L14.018 10.1246L9.92647 8.26309Z"
        fill="white"
      />
    </g>
    <g opacity="0.45">
      <path
        opacity="0.45"
        d="M5.83331 10.1247L9.92647 12.5429V3.33333L5.83331 10.1247Z"
        fill="white"
      />
    </g>
    <g opacity="0.8">
      <path
        opacity="0.8"
        d="M9.92645 3.33328V12.5429L14.018 10.1246L9.92645 3.33328Z"
        fill="white"
      />
    </g>
    <g opacity="0.45">
      <path
        opacity="0.45"
        d="M5.83331 10.9001L9.92647 16.6666V13.3184L5.83331 10.9001Z"
        fill="white"
      />
    </g>
    <g opacity="0.8">
      <path
        opacity="0.8"
        d="M9.92645 13.3184V16.6666L14.0212 10.9001L9.92645 13.3184Z"
        fill="white"
      />
    </g>
  </svg>
);

export const BackIcon = (props: svgProps): JSX.Element => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_640_4550)">
      <circle cx="24" cy="22" r="20" fill="white" />
    </g>
    <path
      d="M25.5 27L20.5 22L25.5 17"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <filter
        id="filter0_d_640_4550"
        x="0"
        y="0"
        width="48"
        height="48"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="2" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.805903 0 0 0 0 0.812825 0 0 0 0 0.916667 0 0 0 0.24 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_640_4550"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_640_4550"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export const shareIcon = (props: svgProps): SVGProps<SVGSVGElement> => (
  <svg
    {...props}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.4">
      <path
        d="M2.66663 8V13.3333C2.66663 13.687 2.8071 14.0261 3.05715 14.2761C3.3072 14.5262 3.64634 14.6667 3.99996 14.6667H12C12.3536 14.6667 12.6927 14.5262 12.9428 14.2761C13.1928 14.0261 13.3333 13.687 13.3333 13.3333V8"
        stroke={props.stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6667 3.99999L8.00004 1.33333L5.33337 3.99999"
        stroke={props.stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 1.33333V10"
        stroke={props.stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

//FOLDER ICON
export const folderIcon = (props: svgProps): SVGProps<SVGSVGElement> => (
  <svg
    {...props}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.3334 15.8333C18.3334 16.2754 18.1578 16.6993 17.8453 17.0118C17.5327 17.3244 17.1088 17.5 16.6667 17.5H3.33341C2.89139 17.5 2.46746 17.3244 2.1549 17.0118C1.84234 16.6993 1.66675 16.2754 1.66675 15.8333V4.16667C1.66675 3.72464 1.84234 3.30072 2.1549 2.98816C2.46746 2.67559 2.89139 2.5 3.33341 2.5H7.50008L9.16675 5H16.6667C17.1088 5 17.5327 5.17559 17.8453 5.48816C18.1578 5.80072 18.3334 6.22464 18.3334 6.66667V15.8333Z"
      stroke={props.stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const collatIcon = (props: svgProps): SVGProps<SVGSVGElement> => (
  <svg
    {...props}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.8333 2.5H4.16667C3.24619 2.5 2.5 3.24619 2.5 4.16667V15.8333C2.5 16.7538 3.24619 17.5 4.16667 17.5H15.8333C16.7538 17.5 17.5 16.7538 17.5 15.8333V4.16667C17.5 3.24619 16.7538 2.5 15.8333 2.5Z"
      stroke={props.stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.08331 8.33333C7.77367 8.33333 8.33331 7.77368 8.33331 7.08333C8.33331 6.39297 7.77367 5.83333 7.08331 5.83333C6.39296 5.83333 5.83331 6.39297 5.83331 7.08333C5.83331 7.77368 6.39296 8.33333 7.08331 8.33333Z"
      stroke={props.stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.5 12.5L13.3334 8.33333L4.16669 17.5"
      stroke={props.stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

//CARDICON
export const cardIcon = (props: svgProps): SVGProps<SVGSVGElement> => (
  <svg
    {...props}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.5 3.33333H2.50001C1.57954 3.33333 0.833344 4.07952 0.833344 4.99999V15C0.833344 15.9205 1.57954 16.6667 2.50001 16.6667H17.5C18.4205 16.6667 19.1667 15.9205 19.1667 15V4.99999C19.1667 4.07952 18.4205 3.33333 17.5 3.33333Z"
      stroke={props.stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M0.833344 8.33333H19.1667"
      stroke={props.stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

//FLAG ICON
export const flagIcon = (props: svgProps): SVGProps<SVGSVGElement> => (
  <svg
    {...props}
    fill="none"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.33334 12.5C3.33334 12.5 4.16668 11.6667 6.66668 11.6667C9.16668 11.6667 10.8333 13.3333 13.3333 13.3333C15.8333 13.3333 16.6667 12.5 16.6667 12.5V2.50001C16.6667 2.50001 15.8333 3.33334 13.3333 3.33334C10.8333 3.33334 9.16668 1.66667 6.66668 1.66667C4.16668 1.66667 3.33334 2.50001 3.33334 2.50001V12.5Z"
      stroke={props.stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.33334 18.3333V12.5"
      stroke={props.stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
