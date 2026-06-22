type LogoProps = { height?: number; className?: string };

export function IMissiveLogo({ height = 54, className }: LogoProps) {
  return (
    <img
      src="/brand/imissive-horizontal.png"
      alt="iMissive"
      className={className}
      style={{ height, width: "auto", objectFit: "contain" }}
      draggable={false}
    />
  );
}

export function IMissiveLogoNegative({ height = 54, className }: LogoProps) {
  return (
    <img
      src="/brand/imissive-horizontal-negative.png"
      alt="iMissive"
      className={className}
      style={{ height, width: "auto", objectFit: "contain" }}
      draggable={false}
    />
  );
}

export function RasscoLogo({ height = 38, className }: LogoProps) {
  return (
    <img
      src="/brand/rassco-group.png"
      alt="RASSCO Group"
      className={className}
      style={{ height, width: "auto", objectFit: "contain" }}
      draggable={false}
    />
  );
}

export function StcLogo({ height = 64, className }: LogoProps) {
  return (
    <img
      src="/brand/stc-purple.png"
      alt="stc"
      className={className}
      style={{ height, width: "auto", objectFit: "contain" }}
      draggable={false}
    />
  );
}
