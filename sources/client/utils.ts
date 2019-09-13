export function trimString(str: string, max_len: number, suffix = '...') {
	if (str.length > max_len)
		return str.substr(0, max_len - suffix.length) + suffix;
	return str;
}