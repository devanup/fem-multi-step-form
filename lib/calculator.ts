/* 
In this file we're going to implement the calculator function that will be used to calculate the total price of the selected plan and addons. The function will take the selected addons, plan, and billing frequency as arguments and return an object with the total price, plan price, and addons information.
*/
type Plan = 'arcade' | 'advanced' | 'pro'; // Define the Plan type
type Addon = 'online-service' | 'larger-storage' | 'customizable-profile'; // Define the Addon type

// INTERFACE is a TypeScript feature that allows you to define the shape of an object.
interface Prices {
	monthly: number;
	yearly: number;
}
interface AddonInfo {
	title: string;
	price: string;
}

// DATA STRUCTURE for storing the plan and addon prices
const plans: Record<Plan, Prices> = {
	// Object that maps each plan to its monthly and annual prices. <Plan, Prices> means that the key is of type Plan and the value is of type Prices
	arcade: {
		monthly: 9,
		yearly: 90,
	},
	advanced: {
		monthly: 12,
		yearly: 120,
	},
	pro: {
		monthly: 15,
		yearly: 150,
	},
}; // Define the plans object for storing the plan prices
const addons: Record<Addon, Prices> = {
	'online-service': { monthly: 1, yearly: 10 },
	'larger-storage': { monthly: 2, yearly: 20 },
	'customizable-profile': { monthly: 2, yearly: 20 },
}; // Define the addons object for storing the addon prices

// HELPER FUNCTIONS
// Determine the price of a plan based on whether the billing is yearly or monthly.
const planPrices = (plan: Plan, isYearly: boolean): number => {
	// If the billing is yearly, return the yearly price of the plan; otherwise, return the monthly price of the plan.
	const prices = plans[plan];
	return isYearly ? prices.yearly : prices.monthly;
};

// Converts the addon identifier into a more readable format (e.g., 'online-service' to 'Online Service').
const getCleanAddons = (addon: Addon): string => {
	return addon
		.split('-')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
};

// Determine the price of an addon based on whether the billing is yearly or monthly.
const getAddonPrice = (addon: Addon, isYearly: boolean): number => {
	const prices = addons[addon];
	return isYearly ? prices.yearly : prices.monthly;
};

// Calculate the total price of the selected addons.
const calculateTotalAddonPrice = (
	selectedAddons: Addon[],
	isYearly: boolean,
): number => {
	return selectedAddons.reduce((total, addon) => {
		// The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value. In this case, we are summing up the prices of the selected addons.
		return total + getAddonPrice(addon, isYearly); // Add the price of the addon to the total.
	}, 0); // Initialize the total to 0.
};

// Add the '/yr' or '/mo' tag to the price based on the billing frequency.
const addTagYearlyMonthly = (price: number, isYearly: boolean) => {
	return `$${price}${isYearly ? '/yr' : '/mo'}`;
};

// The function takes an array of selected addons and a boolean flag indicating whether the billing is yearly as arguments and returns an array of addon information objects.
const getAddonsInfo = (
	selectedAddons: Addon[],
	isYearly: boolean,
): AddonInfo[] => {
	return selectedAddons.map((addon) => ({
		title: getCleanAddons(addon),
		price: addTagYearlyMonthly(getAddonPrice(addon, isYearly), isYearly),
	})); // Map each selected addon to an object with the addon title and price.
};

// MAIN FUNCTION for calculating the total price of the selected plan and addons.
export function calculator(
	addons:
		| ('online-service' | 'larger-storage' | 'customizable-profile')[]
		| undefined,
	plan: 'arcade' | 'advanced' | 'pro',
	isYearly: boolean,
) {
	let fullPrice = 0;
	const planName =
		plan[0].toUpperCase() +
		plan.slice(1) +
		`${isYearly ? '(Yearly)' : '(Monthly)'}`;
	const selectedPlanPrice = planPrices(plan, isYearly);
	const addonsArray = getAddonsInfo(addons ? addons : [], isYearly);

	fullPrice =
		fullPrice +
		selectedPlanPrice +
		calculateTotalAddonPrice(addons ? addons : [], isYearly);

	return {
		planName,
		planPrice: addTagYearlyMonthly(selectedPlanPrice, isYearly),
		addonsArray,
		fullPrice: addTagYearlyMonthly(fullPrice, isYearly),
	};
}
