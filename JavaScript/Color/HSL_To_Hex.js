function HSL_To_Hex(H, S, L)
{
	L /= 100;
	const a = S * Math.min(L, 1 - L) / 100;
	const f = n => {
	  const k = (n + H / 30) % 12;
	  const color = L - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
	  return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
	};
	return `#${f(0)}${f(8)}${f(4)}`;
}