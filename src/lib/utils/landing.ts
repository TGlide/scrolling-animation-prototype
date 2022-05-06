export const getStage = (scroll: number) => {
	if (scroll < 600) {
		return 1;
	} else if (scroll < 3000) {
		return 2;
	} else {
		return 3;
	}
};
