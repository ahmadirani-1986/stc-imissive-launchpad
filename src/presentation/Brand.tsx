import imissiveLogo from "@/assets/imissive-logo.png.asset.json";
import rasscoLogo from "@/assets/rassco-logo.png.asset.json";
import stcGroupLogo from "@/assets/stc-group-logo.png.asset.json";
import rasscoGroupLogo from "@/assets/rassco-group-logo.png.asset.json";
import stcMarkLogo from "@/assets/stc-mark-logo.png.asset.json";

export const IMissiveLogo = ({ height = 64, invert = false }: { height?: number; invert?: boolean }) => (
  <img
    src={imissiveLogo.url}
    alt="iMissive"
    style={{
      height,
      width: "auto",
      objectFit: "contain",
      filter: invert ? "brightness(0) invert(1)" : undefined,
    }}
    draggable={false}
  />
);

export const RasscoLogo = ({ height = 40 }: { height?: number }) => (
  <img
    src={rasscoLogo.url}
    alt="RASSCO Group"
    style={{ height, width: "auto", objectFit: "contain" }}
    draggable={false}
  />
);

export const StcGroupLogo = ({ height = 48 }: { height?: number }) => (
  <img
    src={stcGroupLogo.url}
    alt="stc Group"
    style={{ height, width: "auto", objectFit: "contain" }}
    draggable={false}
  />
);

export const StcMarkLogo = ({ height = 48 }: { height?: number }) => (
  <img
    src={stcMarkLogo.url}
    alt="stc"
    style={{ height, width: "auto", objectFit: "contain" }}
    draggable={false}
  />
);

export const RasscoGroupLogo = ({ height = 56 }: { height?: number }) => (
  <img
    src={rasscoGroupLogo.url}
    alt="RASSCO Group"
    style={{ height, width: "auto", objectFit: "contain" }}
    draggable={false}
  />
);

// stc wordmark — clean text mark in official stc purple. Never recolored or distorted.
export const StcLogo = ({ size = 96, color = "#4F00A0" }: { size?: number; color?: string }) => (
  <span
    aria-label="stc"
    style={{
      fontFamily: "Manrope, system-ui, sans-serif",
      fontWeight: 800,
      fontSize: size,
      lineHeight: 1,
      letterSpacing: "-0.04em",
      color,
      display: "inline-block",
    }}
  >
    stc
  </span>
);