function Hex_To_HSL(Hex)
{
	// Convert hex to RGB first
	let R = 0, G = 0, B = 0;
	if (Hex.length == 4) {
	  R = "0x" + Hex[1] + Hex[1];
	  G = "0x" + Hex[2] + Hex[2];
	  B = "0x" + Hex[3] + Hex[3];
	} else if (Hex.length == 7) {
	  R = "0x" + Hex[1] + Hex[2];
	  G = "0x" + Hex[3] + Hex[4];
	  B = "0x" + Hex[5] + Hex[6];
	}
	// Then to HSL
	R /= 255;
	G /= 255;
	B /= 255;
	let cmin = Math.min(R,G,B),
	    cmax = Math.max(R,G,B),
	    delta = cmax - cmin,
	    H = 0,
	    S = 0,
	    L = 0;

	if (delta == 0)
	  H = 0;
	else if (cmax == R)
	  H = ((G - B) / delta) % 6;
	else if (cmax == G)
	  H = (B - R) / delta + 2;
	else
	  H = (R - G) / delta + 4;

	H = Math.round(H * 60);

	if (H < 0)
	  H += 360;

	L = (cmax + cmin) / 2;
	S = delta == 0 ? 0 : delta / (1 - Math.abs(2 * L - 1));
	S = +(S * 100).toFixed(1);
	L = +(L * 100).toFixed(1);

	return [H, S, L];
}