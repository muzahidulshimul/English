export function calculateProgress(currentAmount, totalAmount) {
	if (!totalAmount || totalAmount <= 0) return 0;
	return Math.min(currentAmount / totalAmount, 1);
}

export function estimateMonthsToGoal({ currentAmount, totalAmount, monthlyContribution }) {
	if (monthlyContribution <= 0) return Infinity;
	const remaining = Math.max(totalAmount - currentAmount, 0);
	return Math.ceil(remaining / monthlyContribution);
}

export function formatCurrency(amount) {
	try {
		return `$${Number(amount).toLocaleString(undefined, { maximumFractionDigits: 2 })}`;
	} catch {
		return `$${amount}`;
	}
}